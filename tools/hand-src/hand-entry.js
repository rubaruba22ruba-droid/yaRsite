/* Точка входа: подключает 3D-руку к странице (canvas#hand), синхронизирует свет с небом, засыпает вне экрана. */
import { mountHand } from "./hand3d.js";
(function () {
  const cv = document.getElementById("hand");
  if (!cv) return;
  const reduce = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  let hand = null;
  try {
    const t = document.createElement("canvas");
    if (!(t.getContext("webgl2") || t.getContext("webgl"))) throw new Error("no webgl");
    hand = mountHand(cv, {
      reduce,
      onBreak() { if (window.YVSky) window.YVSky.flareTarget = 1; },
      onReady() { document.documentElement.classList.add("has-hand"); }
    });
  } catch (e) { cv.style.display = "none"; return; }

  // свет руки берём у неба: время суток и положение солнца
  const SUNC = [[1.0, 0.96, 0.85], [1.0, 0.80, 0.50], [1.0, 0.62, 0.42]];
  const mixv = (a, b, t) => a.map((x, i) => x + (b[i] - x) * t);
  function lightNow() {
    const sk = window.YVSky, ph = Math.max(0, Math.min(2, sk ? sk.phase : 0)), i = Math.min(1, Math.floor(ph));
    const sx = sk ? sk.sun[0] : 0.27, sy = sk ? sk.sun[1] : 0.66;
    return { ph, sun: mixv(SUNC[i], SUNC[i + 1], ph - i), sunDir: [(sx - 0.5) * 1.6, (sy - 0.5) * 1.4 + 0.15, 0.9] };
  }
  hand.setSky(lightNow()); setInterval(() => hand.setSky(lightNow()), 250);

  let visible = true;
  window.addEventListener("pointermove", (e) => hand.pointer(e.clientX / innerWidth - 0.5, e.clientY / innerHeight - 0.5), { passive: true });
  window.addEventListener("resize", () => { hand.layout(); if (reduce) hand.render(); });
  if ("IntersectionObserver" in window) new IntersectionObserver((es) => es.forEach((e) => { visible = e.isIntersecting; if (visible && !document.hidden) hand.start(); else hand.stop(); }), { threshold: 0 }).observe(cv);
  document.addEventListener("visibilitychange", () => { if (document.hidden) hand.stop(); else if (visible) hand.start(); });
  if (reduce) { hand.frame(99); } else hand.start();
  window.YVHand = { replay() { hand.reset(); }, api: hand };
})();
