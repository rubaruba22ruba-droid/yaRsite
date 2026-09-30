declare module 'mp4box' {
  export interface MP4VideoTrack {
    id: number;
    codec: string;
    duration: number;
    timescale: number;
    nb_samples: number;
    track_width: number;
    track_height: number;
    video: { width: number; height: number };
  }
  export interface MP4Info {
    duration: number;
    timescale: number;
    videoTracks: MP4VideoTrack[];
  }
  export interface MP4Sample {
    is_sync: boolean;
    cts: number;
    dts: number;
    duration: number;
    timescale: number;
    data: Uint8Array;
  }
  export type MP4ArrayBuffer = ArrayBuffer & { fileStart: number };
  export interface MP4File {
    onReady: ((info: MP4Info) => void) | null;
    onError: ((e: unknown) => void) | null;
    onSamples: ((id: number, user: unknown, samples: MP4Sample[]) => void) | null;
    appendBuffer(buf: MP4ArrayBuffer): number;
    setExtractionOptions(id: number, user?: unknown, opts?: { nbrSamples?: number }): void;
    start(): void;
    stop(): void;
    flush(): void;
    getTrackById(id: number): any;
  }
  export class DataStream {
    constructor(buffer?: ArrayBuffer, byteOffset?: number, endianness?: boolean);
    static BIG_ENDIAN: boolean;
    buffer: ArrayBuffer;
  }
  export function createFile(): MP4File;
  const MP4Box: { createFile: typeof createFile; DataStream: typeof DataStream };
  export default MP4Box;
}
