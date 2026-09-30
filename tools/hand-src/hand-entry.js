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

  // палитры окружения по времени суток (те же, что у неба)
  const K = [
    { top: [0.16, 0.42, 0.85], hor: [0.85, 0.93, 1.0], gnd: [0.55, 0.62, 0.32], sun: [1.0, 0.96, 0.85] },
    { top: [0.20, 0.42, 0.66], hor: [1.0, 0.72, 0.42], gnd: [0.82, 0.52, 0.22], sun: [1.0, 0.80, 0.50] },
    { top: [0.16, 0.14, 0.42], hor: [1.0, 0.52, 0.42], gnd: [0.36, 0.20, 0.30], sun: [1.0, 0.62, 0.42] },
    { top: [0.02, 0.04, 0.16], hor: [0.20, 0.24, 0.45], gnd: [0.06, 0.08, 0.16], sun: [0.70, 0.78, 1.0] }
  ];
  const mixv = (a, b, t) => a.map((x, i) => x + (b[i] - x) * t);
  function colors(ph) {
    ph = Math.max(0, Math.min(3, ph)); const i = Math.min(2, Math.floor(ph)), f = ph - i, a = K[i], b = K[i + 1];
    return { top: mixv(a.top, b.top, f), hor: mixv(a.hor, b.hor, f), gnd: mixv(a.gnd, b.gnd, f), sun: mixv(a.sun, b.sun, f), sunDir: [-0.55, 0.55, 0.62] };
  }
  let lastPh = -9;
  function syncSky() { const ph = window.YVSky ? window.YVSky.phase : 0; if (Math.abs(ph - lastPh) > 0.04) { lastPh = ph; hand.setSky(colors(ph)); } }
  syncSky(); setInterval(syncSky, 250);

  let visible = true;
  window.addEventListener("pointermove", (e) => hand.pointer(e.clientX / innerWidth - 0.5, e.clientY / innerHeight - 0.5), { passive: true });
  window.addEventListener("resize", () => { hand.layout(); if (reduce) hand.render(); });
  if ("IntersectionObserver" in window) new IntersectionObserver((es) => es.forEach((e) => { visible = e.isIntersecting; if (visible && !document.hidden) hand.start(); else hand.stop(); }), { threshold: 0 }).observe(cv);
  document.addEventListener("visibilitychange", () => { if (document.hidden) hand.stop(); else if (visible) hand.start(); });
  if (reduce) { hand.frame(99); } else hand.start();
  window.YVHand = { replay() { hand.reset(); }, api: hand };
})();
