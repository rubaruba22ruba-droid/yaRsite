/* YarVpn — 3D-фон: плавная волна из точек в перспективе (canvas 2D, без библиотек).
   Нейтральные белые точки; оранжевым подсвечивается только волна-«импульс» в момент подключения.
   Работает только пока блок виден, на слабых устройствах сам снижает плотность. */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var small = window.innerWidth < 720;

  function Lattice(cv, o) {
    var ctx = cv.getContext("2d");
    var cols = o.cols, rows = o.rows, X = o.spanX, Z0 = o.z0, Z1 = o.z1;
    var W = 0, H = 0, dpr = 1, t = 0, last = 0, running = false, visible = false, pulseAt = -99, pulseZ = o.pulseZ || 900;
    var cam = { y: o.camY, pitch: o.pitch };
    var px = new Float32Array(cols * rows), py = new Float32Array(cols * rows), pa = new Float32Array(cols * rows), ps = new Float32Array(cols * rows), po = new Float32Array(cols * rows);
    var sinP = Math.sin(cam.pitch), cosP = Math.cos(cam.pitch);

    function resize() {
      var r = cv.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = Math.max(1, Math.round(r.width)); H = Math.max(1, Math.round(r.height));
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!running) frame(0);
    }

    function height(x, z, tt) {
      return o.amp * (0.62 * Math.sin(x * 0.0046 + tt * 0.5 + z * 0.0021)
                    + 0.46 * Math.sin(z * 0.0063 - tt * 0.42 - x * 0.0029)
                    + 0.22 * Math.sin((x + z) * 0.0112 + tt * 0.9));
    }

    function frame(dt) {
      t += dt;
      var yaw = (window.YV ? window.YV.px : 0) * 260 + Math.sin(t * 0.07) * 90;
      var F = W * o.focal, cx = W * 0.5, cy = H * o.horizon;
      var age = t - pulseAt, pulsing = age >= 0 && age < 3.4, R = age * 720;
      ctx.clearRect(0, 0, W, H);

      // 1) проекция
      var i, r, c, k = 0;
      for (r = 0; r < rows; r++) {
        var z = Z0 + (Z1 - Z0) * (r / (rows - 1)) * (r / (rows - 1) * 0.55 + 0.45);   // строки гуще вблизи
        for (c = 0; c < cols; c++, k++) {
          var x = -X + (2 * X) * (c / (cols - 1));
          var y = height(x, z, t), bump = 0;
          if (pulsing) {
            var d = Math.hypot(x - 0, z - pulseZ);
            bump = Math.exp(-Math.pow((d - R) / 150, 2)) * (1 - age / 3.4);
            y += bump * o.amp * 1.4;
          }
          var relx = x - yaw, dy = y - cam.y;
          var depth = -dy * sinP + z * cosP, up = dy * cosP + z * sinP;
          var s = F / depth;
          px[k] = cx + relx * s; py[k] = cy - up * s;
          var fade = Math.max(0, 1 - (z - Z0) / (Z1 - Z0));
          var crest = Math.max(0, Math.min(1, 0.5 + y / (o.amp * 2.2)));
          pa[k] = Math.pow(fade, 0.8) * (0.16 + 0.62 * crest);
          ps[k] = Math.max(0.7, Math.min(2.6, s * o.dot));
          po[k] = bump;
        }
      }

      // 2) линии рядов (тонкая «сетка»)
      ctx.lineWidth = 1;
      for (r = 0; r < rows; r += 1) {
        var base = r * cols, aRow = pa[base + (cols >> 1)] * 0.3;
        if (aRow < 0.006) continue;
        ctx.strokeStyle = "rgba(255,255,255," + aRow.toFixed(3) + ")";
        ctx.beginPath(); ctx.moveTo(px[base], py[base]);
        for (c = 1; c < cols; c++) ctx.lineTo(px[base + c], py[base + c]);
        ctx.stroke();
      }

      // 2b) линии колонок (каждая 3-я) — «каркас» рельефа, сходящийся к горизонту
      for (c = 0; c < cols; c += 3) {
        ctx.beginPath(); var started = false, aCol = 0;
        for (r = 0; r < rows; r++) {
          var kk = r * cols + c; aCol = Math.max(aCol, pa[kk]);
          if (pa[kk] < 0.012) { started = false; continue; }
          if (!started) { ctx.moveTo(px[kk], py[kk]); started = true; } else ctx.lineTo(px[kk], py[kk]);
        }
        ctx.strokeStyle = "rgba(255,255,255," + Math.min(0.09, aCol * 0.17).toFixed(3) + ")"; ctx.stroke();
      }

      // 3) точки
      for (i = 0; i < px.length; i++) {
        var a = pa[i]; if (a < 0.02) continue;
        var sz = ps[i], b = po[i];
        if (b > 0.06) { ctx.fillStyle = "rgba(255,106,26," + Math.min(0.72, a + b * 0.55).toFixed(3) + ")"; sz *= 1 + b * 0.9; }
        else ctx.fillStyle = "rgba(255,255,255," + a.toFixed(3) + ")";
        ctx.fillRect(px[i] - sz * 0.5, py[i] - sz * 0.5, sz, sz);
      }
    }

    function loop(ts) {
      if (!running) return;
      var dt = Math.min((ts - last) / 1000, 0.05); last = ts;
      frame(dt);
      requestAnimationFrame(loop);
    }
    function start() { if (running || reduce || !visible || document.hidden) return; running = true; last = performance.now(); requestAnimationFrame(loop); }
    function stop() { running = false; }

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else start(); });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) { es.forEach(function (e) { visible = e.isIntersecting; if (visible) start(); else stop(); }); }, { threshold: 0 }).observe(cv);
    } else { visible = true; }
    if (o.pulse) window.addEventListener("yv:pulse", function () { pulseAt = t; });
    t = 4.2;
    resize();
    if (reduce) frame(0); else { visible = true; start(); }
  }

  var hero = document.getElementById("lattice");
  if (hero) new Lattice(hero, small
    ? { cols: 44, rows: 26, spanX: 2100, z0: 160, z1: 2300, camY: 250, pitch: 0.3, focal: 1.5, horizon: 0.36, amp: 34, dot: 1.5, pulse: true, pulseZ: 800 }
    : { cols: 72, rows: 40, spanX: 2600, z0: 150, z1: 2700, camY: 260, pitch: 0.3, focal: 1.05, horizon: 0.32, amp: 54, dot: 1.45, pulse: true, pulseZ: 900 });
  var cta = document.getElementById("lattice2");
  if (cta) new Lattice(cta, small
    ? { cols: 36, rows: 22, spanX: 2000, z0: 200, z1: 2200, camY: 240, pitch: 0.27, focal: 1.3, horizon: 0.3, amp: 30, dot: 1.4 }
    : { cols: 60, rows: 30, spanX: 2400, z0: 200, z1: 2500, camY: 250, pitch: 0.27, focal: 0.95, horizon: 0.3, amp: 32, dot: 1.2 });
})();
