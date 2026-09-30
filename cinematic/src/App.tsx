import { useEffect, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { ArrowDown, ArrowRight, ChevronUp, Info, X } from 'lucide-react';
import { useVideoScrub } from '@/useVideoScrub';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260821_114821_a8ca298f-be2c-4613-a4dd-51b69e16bbde.mp4';

const DARK = '#1D3045';
const EASE = 'cubic-bezier(0.16,1,0.3,1)';

const NAV_LINKS = ['VECTRUS ENERGY', 'VECTRUS UPSTREAM', 'VECTRUS MARKETS', 'VECTRUS SYSTEMS', 'VECTRUS+'];

function Stagger({ visible, delay, children, className = '' }: { visible: boolean; delay: number; children: ReactNode; className?: string }) {
  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s ${EASE} ${delay}ms, transform 0.8s ${EASE} ${delay}ms`,
  };
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

function Navbar({ isLight, onOpenMenu }: { isLight: boolean; onOpenMenu: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 200);
    return () => window.clearTimeout(t);
  }, []);

  const color = isLight ? DARK : '#ffffff';
  const enter = (delay: number): CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(-12px)',
    transition: `opacity 0.6s ${EASE} ${delay}ms, transform 0.6s ${EASE} ${delay}ms`,
  });

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50 pointer-events-auto flex items-center justify-between px-6 sm:px-8 md:px-12 pt-8 sm:pt-12 pb-6 transition-colors duration-500"
      style={{ color }}
    >
      {/* левая часть */}
      <div className="flex items-center">
        {/* гамбургер < lg */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={onOpenMenu}
          className="lg:hidden flex flex-col items-start"
          style={{ gap: 5, ...enter(100) }}
        >
          <span className="block transition-colors duration-500" style={{ width: 24, height: 2, background: color }} />
          <span className="block transition-colors duration-500" style={{ width: 24, height: 2, background: color }} />
          <span className="block transition-colors duration-500" style={{ width: 16, height: 2, background: color }} />
        </button>

        {/* ссылки lg+ */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {NAV_LINKS.map((label, i) => (
            <a
              key={label}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="relative text-xs tracking-[0.15em] uppercase font-medium hover:opacity-70"
              style={enter(i * 80 + 100)}
            >
              {label}
              {i === 0 && (
                <span className="absolute -bottom-3 left-0 w-full transition-colors duration-500" style={{ height: 2, background: color }} />
              )}
            </a>
          ))}
        </div>
      </div>

      {/* правая часть (скрыта < sm) */}
      <div className="hidden sm:flex items-center gap-8" style={enter(500)}>
        <div className="flex items-center gap-2">
          <span className="text-xs tracking-[0.2em] uppercase font-medium">NEWS</span>
          <span
            className="flex items-center justify-center rounded-full transition-colors duration-500"
            style={{ width: 20, height: 20, background: color }}
          >
            <Info size={10} color={isLight ? '#ffffff' : DARK} />
          </span>
        </div>
        <span className="hidden lg:inline text-xs tracking-[0.2em] uppercase font-medium">MENU</span>
        <button type="button" onClick={onOpenMenu} className="lg:hidden text-xs tracking-[0.2em] uppercase font-medium">
          MENU
        </button>
      </div>
    </nav>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-500 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      style={{ background: DARK, transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}
      aria-hidden={!open}
    >
      <div
        className={`flex h-full flex-col transition-transform duration-500 ${open ? 'translate-y-0' : '-translate-y-8'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4,0,0.2,1)' }}
      >
        <div className="flex justify-end px-6 sm:px-8 pt-8 sm:pt-12">
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex items-center justify-center rounded-full border border-white/30 text-white hover:border-white transition-colors"
            style={{ width: 40, height: 40 }}
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          {NAV_LINKS.map((label, i) => (
            <a
              key={label}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
              className={`px-8 sm:px-12 py-3 text-2xl sm:text-3xl font-light tracking-wide uppercase hover:text-white ${i === 0 ? 'text-white' : 'text-white/60'}`}
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s ${EASE} ${i * 60}ms, transform 0.6s ${EASE} ${i * 60}ms, color 0.3s`,
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex gap-8 px-8 sm:px-12 pb-10 text-xs tracking-[0.2em] uppercase text-white/60">
          <span>NEWS</span>
          <span>CONTACT</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { videoRef, canvasRef, containerRef, progress: p, canvasLive } = useVideoScrub(VIDEO_SRC);
  const [menuOpen, setMenuOpen] = useState(false);

  const s1 = p < 0.2 ? 1 : Math.max(0, 1 - (p - 0.2) / 0.08);
  const s2 = p < 0.32 ? 0 : p < 0.4 ? (p - 0.32) / 0.08 : p < 0.55 ? 1 : Math.max(0, 1 - (p - 0.55) / 0.08);
  const s3 = p < 0.67 ? 0 : p < 0.75 ? (p - 0.67) / 0.08 : 1;
  const isLight = p <= 0.55;

  const section = (o: number): CSSProperties => ({ opacity: o, transition: 'opacity 0.1s ease-out' });

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: canvasLive ? 1 : 0 }}
        />

        <div className="absolute inset-0 pointer-events-none">
          <Navbar isLight={isLight} onOpenMenu={() => setMenuOpen(true)} />

          {/* Секция 1 */}
          <div className="absolute inset-0 flex items-center px-6 sm:px-8 md:px-20 lg:px-32" style={section(s1)}>
            <div className="max-w-4xl">
              <Stagger visible={s1 > 0.3} delay={0}>
                <h1
                  className="font-light uppercase leading-[1.2]"
                  style={{ fontSize: 'clamp(2rem,5vw,5rem)', color: DARK }}
                >
                  Advancing resources for a cleaner future
                </h1>
              </Stagger>
              <Stagger visible={s1 > 0.3} delay={150} className="mt-6">
                <p className="text-sm tracking-[0.3em] uppercase" style={{ color: `${DARK}90` }}>
                  Sustainable power with purpose
                </p>
              </Stagger>
            </div>
            <Stagger visible={s1 > 0.3} delay={300} className="absolute bottom-12 right-6 sm:right-8 md:right-12">
              <button
                type="button"
                aria-label="Continue"
                className="pointer-events-auto flex items-center justify-center rounded-full border hover:opacity-70 transition-opacity"
                style={{ width: 48, height: 48, borderColor: `${DARK}80`, color: DARK }}
              >
                <ArrowRight size={18} />
              </button>
            </Stagger>
          </div>

          {/* Секция 2 */}
          <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8" style={section(s2)}>
            <div className="max-w-[900px]">
              <Stagger visible={s2 > 0.3} delay={0}>
                <h2
                  className="font-extralight tracking-wide leading-[1.3] text-center uppercase"
                  style={{ fontSize: 'clamp(1.5rem,4.5vw,4.5rem)', color: DARK }}
                >
                  We build lasting partnerships with vision <span style={{ color: `${DARK}CC` }}>and precision</span>{' '}
                  <span style={{ color: `${DARK}80` }}>across every frontier</span>
                </h2>
              </Stagger>
            </div>
            <div className="absolute bottom-16 right-6 sm:right-8 md:right-12 flex flex-col items-center gap-4">
              <Stagger visible={s2 > 0.3} delay={200}>
                <button
                  type="button"
                  aria-label="Scroll down"
                  className="pointer-events-auto flex items-center justify-center rounded-full border"
                  style={{ width: 48, height: 48, borderColor: `${DARK}66`, color: DARK }}
                >
                  <ArrowDown size={18} />
                </button>
              </Stagger>
              <Stagger visible={s2 > 0.3} delay={350} className="mt-4">
                <div className="flex flex-col items-center gap-2">
                  <span className="rounded-full" style={{ width: 8, height: 8, background: DARK }} />
                  <span className="rounded-full" style={{ width: 6, height: 6, background: `${DARK}66` }} />
                  <span className="rounded-full" style={{ width: 6, height: 6, background: `${DARK}66` }} />
                </div>
              </Stagger>
              <Stagger visible={s2 > 0.3} delay={500} className="mt-2">
                <button
                  type="button"
                  aria-label="Back to top"
                  className="pointer-events-auto flex items-center justify-center rounded-full border"
                  style={{ width: 40, height: 40, borderColor: `${DARK}4D`, color: `${DARK}CC` }}
                >
                  <ChevronUp size={16} />
                </button>
              </Stagger>
            </div>
          </div>

          {/* Секция 3 */}
          <div className="absolute inset-0 flex items-center justify-end px-6 sm:px-8 md:px-20 lg:px-32" style={section(s3)}>
            <div className="max-w-2xl text-left">
              <Stagger visible={s3 > 0.3} delay={0}>
                <p className="text-white/60 text-lg tracking-wide mb-4">Halder | Nordvik</p>
              </Stagger>
              <Stagger visible={s3 > 0.3} delay={150}>
                <h2
                  className="font-light text-white leading-[1.2] uppercase tracking-wide mb-8"
                  style={{ fontSize: 'clamp(2rem,4vw,4rem)' }}
                >
                  Fueling ambition,
                  <br />
                  shaping tomorrow.
                </h2>
              </Stagger>
              <Stagger visible={s3 > 0.3} delay={300}>
                <div className="flex items-center gap-4">
                  <span className="text-sm tracking-[0.3em] text-white/80 uppercase">Contact Nordvik</span>
                  <button
                    type="button"
                    aria-label="Contact Nordvik"
                    className="pointer-events-auto flex items-center justify-center rounded-full bg-white text-gray-800 hover:scale-110 duration-300 transition-transform"
                    style={{ width: 40, height: 40 }}
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </Stagger>
            </div>
          </div>
        </div>

        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </div>
  );
}
