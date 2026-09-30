import { useEffect, useRef, useState } from 'react';
import MP4Box from 'mp4box';
import type { MP4ArrayBuffer, MP4Sample } from 'mp4box';

const LERP_TAU = 8;
const SNAP = 0.002;
const LRU_MAX = 24;
const LEAD = 24;
const WATCHDOG = 60000;

type BankFrame = { ts: number; blob: Blob };

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function getDescription(mp4: any, trackId: number): Uint8Array | undefined {
  const trak = mp4.getTrackById(trackId);
  for (const entry of trak.mdia.minf.stbl.stsd.entries) {
    const box = entry.avcC || entry.hvcC || entry.vpcC || entry.av1C;
    if (box) {
      const stream = new MP4Box.DataStream(undefined, 0, MP4Box.DataStream.BIG_ENDIAN);
      box.write(stream);
      return new Uint8Array(stream.buffer, 8); // без заголовка бокса
    }
  }
  return undefined;
}

/** Достаёт все кадры ролика через WebCodecs и складывает их в память как webp-блобы. */
async function buildBank(src: string, isCancelled: () => boolean, hw: 'prefer-hardware' | 'prefer-software'): Promise<BankFrame[]> {
  const res = await fetch(src, { mode: 'cors' });
  if (!res.ok) throw new Error('fetch failed');
  const buffer = (await res.arrayBuffer()) as MP4ArrayBuffer;
  buffer.fileStart = 0;

  const mp4 = MP4Box.createFile();
  const chunks: EncodedVideoChunk[] = [];
  let width = 0;
  let height = 0;
  let config: VideoDecoderConfig | null = null;

  await new Promise<void>((resolve, reject) => {
    mp4.onError = reject;
    mp4.onReady = (info) => {
      const track = info.videoTracks[0];
      if (!track) return reject(new Error('no video track'));
      width = track.video.width;
      height = track.video.height;
      config = {
        codec: track.codec.startsWith('vp08') ? 'vp8' : track.codec,
        codedWidth: width,
        codedHeight: height,
        description: getDescription(mp4, track.id),
        hardwareAcceleration: hw,
      };
      mp4.setExtractionOptions(track.id, null, { nbrSamples: 200 });
      mp4.start();
    };
    mp4.onSamples = (_id: number, _u: unknown, samples: MP4Sample[]) => {
      for (const s of samples) {
        chunks.push(
          new EncodedVideoChunk({
            type: s.is_sync ? 'key' : 'delta',
            timestamp: (1e6 * s.cts) / s.timescale,
            duration: (1e6 * s.duration) / s.timescale,
            data: s.data,
          }),
        );
      }
    };
    mp4.appendBuffer(buffer);
    mp4.flush();
    // onSamples вызывается синхронно во время flush — даём событиям завершиться
    setTimeout(resolve, 0);
  });

  if (!config || chunks.length === 0) throw new Error('no samples');
  const support = await VideoDecoder.isConfigSupported(config);
  if (!support.supported) throw new Error('config unsupported');

  const outW = Math.min(1920, width);
  const outH = Math.round((outW / width) * height);
  const off = document.createElement('canvas');
  off.width = outW;
  off.height = outH;
  const octx = off.getContext('2d')!;

  const bank: BankFrame[] = [];
  let pending = 0;
  let failed: unknown = null;

  const decoder = new VideoDecoder({
    output: (frame) => {
      // draw + toBlob идут строго друг за другом, чтобы не гонять один и тот же холст параллельно
      const ts = frame.timestamp;
      octx.drawImage(frame, 0, 0, outW, outH);
      frame.close();
      pending++;
      off.toBlob(
        (blob) => {
          pending--;
          if (blob) bank.push({ ts, blob });
        },
        'image/webp',
        0.82,
      );
    },
    error: (e) => {
      failed = e;
    },
  });
  decoder.configure(config);

  for (const chunk of chunks) {
    if (isCancelled()) {
      decoder.close();
      throw new Error('cancelled');
    }
    if (failed) throw failed;
    while (pending > LEAD || decoder.decodeQueueSize > LEAD) {
      if (isCancelled()) {
        decoder.close();
        throw new Error('cancelled');
      }
      await sleep(4);
    }
    decoder.decode(chunk);
    // даём кадру дойти до toBlob до следующего декодирования (холст общий)
    await sleep(0);
  }
  await decoder.flush();
  while (pending > 0) await sleep(8);
  decoder.close();
  if (failed) throw failed;

  bank.sort((a, b) => a.ts - b.ts);
  if (bank.length === 0) throw new Error('empty bank');
  return bank;
}

export function useVideoScrub(videoSrc: string) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setScrollProgress] = useState(0);
  const [canvasLive, setCanvasLive] = useState(false);

  useEffect(() => {
    const video = videoRef.current!;
    const canvas = canvasRef.current!;
    const container = containerRef.current!;
    const ctx = canvas.getContext('2d')!;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let dur = 0;
    let current = 0;
    let ready = false;
    let reverted = false;
    let painted = false;
    let building = false;
    let disposed = false;
    let raf = 0;
    let last = performance.now();
    let span = 1;
    let bank: BankFrame[] = [];
    const lru = new Map<number, ImageBitmap | null>();
    let lastDrawn = -1;

    const measure = () => {
      span = Math.max(1, container.offsetHeight - window.innerHeight);
    };
    const getProgress = () => Math.min(1, Math.max(0, window.scrollY / span));

    const onMeta = () => {
      if (isFinite(video.duration)) dur = video.duration;
    };
    video.addEventListener('loadedmetadata', onMeta);
    video.addEventListener('durationchange', onMeta);
    if (video.readyState >= 1) onMeta();

    // ---------- банк кадров ----------
    const nearestIndex = (t: number) => {
      const target = t * 1e6;
      let lo = 0;
      let hi = bank.length - 1;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (bank[mid].ts < target) lo = mid + 1;
        else hi = mid;
      }
      if (lo > 0 && Math.abs(bank[lo - 1].ts - target) <= Math.abs(bank[lo].ts - target)) lo--;
      return lo;
    };

    const warmLRU = (i: number) => {
      for (let j = i - 1; j <= i + 2; j++) {
        if (j < 0 || j >= bank.length) continue;
        if (lru.has(j)) {
          // обновляем «свежесть»
          const v = lru.get(j)!;
          lru.delete(j);
          lru.set(j, v);
          continue;
        }
        lru.set(j, null);
        createImageBitmap(bank[j].blob)
          .then((bmp) => {
            if (disposed || !lru.has(j)) {
              bmp.close();
              return;
            }
            lru.set(j, bmp);
          })
          .catch(() => lru.delete(j));
      }
      while (lru.size > LRU_MAX) {
        const oldest = lru.keys().next().value as number;
        lru.get(oldest)?.close();
        lru.delete(oldest);
      }
    };

    const paint = (bmp: ImageBitmap) => {
      // cover-отрисовка в холст 1920×1080
      const cw = canvas.width;
      const ch = canvas.height;
      const s = Math.max(cw / bmp.width, ch / bmp.height);
      const w = bmp.width * s;
      const h = bmp.height * s;
      ctx.drawImage(bmp, (cw - w) / 2, (ch - h) / 2, w, h);
      if (!painted) {
        painted = true;
        setCanvasLive(true);
      }
    };

    const drawFromBank = (t: number) => {
      const i = nearestIndex(t);
      warmLRU(i);
      const bmp = lru.get(i);
      if (bmp && i !== lastDrawn) {
        paint(bmp);
        lastDrawn = i;
      }
    };

    const revert = () => {
      reverted = true;
      ready = false;
      painted = false;
      setCanvasLive(false);
    };

    const start = async (hw: 'prefer-hardware' | 'prefer-software', retry: boolean) => {
      building = true;
      const watchdog = window.setTimeout(() => {
        if (!ready) revert();
      }, WATCHDOG);
      try {
        const result = await buildBank(videoSrc, () => disposed || reverted, hw);
        if (disposed || reverted) return;
        bank = result;
        ready = true;
      } catch (e) {
        if (!disposed && !reverted && retry && hw === 'prefer-hardware') {
          window.clearTimeout(watchdog);
          return start('prefer-software', false);
        }
        revert();
      } finally {
        window.clearTimeout(watchdog);
        building = false;
      }
    };

    const beginBuild = () => {
      if (reduced || typeof VideoDecoder === 'undefined' || building || reverted) return;
      start('prefer-hardware', true);
    };

    // ---------- цикл кадров ----------
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      const p = getProgress();
      setScrollProgress(p);
      if (dur > 0) {
        const target = p * dur;
        if (reduced) {
          current = target;
        } else {
          current += (target - current) * (1 - Math.exp(-dt * LERP_TAU));
          if (Math.abs(target - current) < SNAP) current = target;
        }
        if (ready) {
          drawFromBank(Math.min(current, dur));
        } else if (!video.seeking && Math.abs(video.currentTime - current) > 0.01) {
          video.currentTime = current;
        }
      }
    };

    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);
    raf = requestAnimationFrame(frame);

    if (document.readyState === 'complete') beginBuild();
    else window.addEventListener('load', beginBuild, { once: true });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
      window.removeEventListener('orientationchange', measure);
      window.removeEventListener('load', beginBuild);
      video.removeEventListener('loadedmetadata', onMeta);
      video.removeEventListener('durationchange', onMeta);
      lru.forEach((b) => b?.close());
      lru.clear();
    };
  }, [videoSrc]);

  return { videoRef, canvasRef, containerRef, progress, canvasLive };
}
