/* YarVpn — фон «космос»: звёздное небо рисуется ОДИН раз (без покадровой нагрузки) и лишь плавно сдвигается при прокрутке.
   Никаких низкого разрешения и «квадратных» звёзд: рисуется в родном разрешении экрана. */
(function () {
  "use strict";
  var cv = document.getElementById("space");
  if (!cv || !cv.getContext) return;
  var root = document.documentElement;
  var ctx = cv.getContext("2d");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var W = 0, H = 0, D = 1, seed = 20260930;

  function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
  function gauss() { return (rnd() + rnd() + rnd() + rnd() - 2) / 2; }   // ≈ нормальное распределение, -1..1

  function glow(x, y, r, rgb, a) {
    var g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, "rgba(" + rgb + "," + a + ")"); g.addColorStop(0.5, "rgba(" + rgb + "," + (a * 0.35) + ")"); g.addColorStop(1, "rgba(" + rgb + ",0)");
    ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  function star(x, y, r, a, tint) {
    ctx.globalAlpha = a; ctx.fillStyle = tint; ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill();
  }

  function paint() {
    seed = 20260930;
    D = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = Math.round(window.innerHeight * 1.32);
    cv.width = Math.round(W * D); cv.height = Math.round(H * D);
    cv.style.width = W + "px"; cv.style.height = H + "px";
    ctx.setTransform(D, 0, 0, D, 0, 0);
    ctx.globalCompositeOperation = "source-over"; ctx.globalAlpha = 1;

    var g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, "#050506"); g.addColorStop(0.5, "#08080a"); g.addColorStop(1, "#0b0b0e");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    // мягкие туманности: холодные, еле заметные
    ctx.globalCompositeOperation = "lighter";
    var s = Math.max(W, H);
    glow(W * 0.78, H * 0.30, s * 0.55, "60,70,100", 0.10);
    glow(W * 0.12, H * 0.72, s * 0.50, "70,50,40", 0.06);
    glow(W * 0.50, H * 0.95, s * 0.60, "50,50,60", 0.07);
    glow(W * 0.30, H * 0.10, s * 0.35, "60,60,80", 0.04);

    // Млечный Путь — диагональная полоса из мелких звёзд и пыли
    var ax = -W * 0.1, ay = H * 0.86, bx = W * 1.1, by = H * 0.14;
    var dx = bx - ax, dy = by - ay, len = Math.sqrt(dx * dx + dy * dy), nx = -dy / len, ny = dx / len;
    var i, t, off, x, y, n = Math.round(W * H / 95);
    for (i = 0; i < 60; i++) {
      t = rnd(); off = gauss() * s * 0.10; x = ax + dx * t + nx * off; y = ay + dy * t + ny * off;
      glow(x, y, s * (0.07 + rnd() * 0.10), rnd() < 0.5 ? "70,100,170" : "90,110,150", 0.022 + rnd() * 0.02);
    }
    for (i = 0; i < n; i++) {
      t = rnd(); off = gauss() * s * 0.085; x = ax + dx * t + nx * off; y = ay + dy * t + ny * off;
      if (x < 0 || x > W || y < 0 || y > H) continue;
      star(x, y, 0.25 + rnd() * 0.45, 0.10 + rnd() * 0.34, rnd() < 0.7 ? "#dfe8ff" : "#ffe9cf");
    }
    // россыпь звёзд по всему небу
    var m = Math.round(W * H / 2600);
    for (i = 0; i < m; i++) {
      var p = Math.pow(rnd(), 3.4);                       // много мелких, мало крупных
      star(rnd() * W, rnd() * H, 0.28 + p * 1.05, 0.25 + rnd() * 0.65, rnd() < 0.62 ? "#e8eeff" : rnd() < 0.55 ? "#bcd0ff" : "#ffe6c4");
    }
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
  }

  // мерцающие яркие звёзды — обычные элементы с CSS-анимацией (рисует видеокарта, без JS-цикла)
  var tw = document.getElementById("twinkle");
  function twinkles() {
    if (!tw || tw.childNodes.length) return;
    var frag = document.createDocumentFragment(), k, e, sz;
    for (k = 0; k < 26; k++) {
      e = document.createElement("i"); sz = 2 + rnd() * 3;
      e.style.cssText = "left:" + (rnd() * 97).toFixed(2) + "%;top:" + (rnd() * 100).toFixed(2) + "%;width:" + sz.toFixed(1) + "px;height:" + sz.toFixed(1) + "px;animation-duration:" + (3 + rnd() * 5).toFixed(1) + "s;animation-delay:-" + (rnd() * 8).toFixed(1) + "s";
      frag.appendChild(e);
    }
    tw.appendChild(frag);
  }

  // тонкое зерно — убирает «ступеньки» на тёмных градиентах
  function grain() {
    var el = document.getElementById("grain");
    if (!el) return;
    var c = document.createElement("canvas"); c.width = c.height = 180;
    var x = c.getContext("2d"), im = x.createImageData(180, 180), d = im.data, v;
    for (var q = 0; q < d.length; q += 4) { v = Math.round(rnd() * 255); d[q] = d[q + 1] = d[q + 2] = v; d[q + 3] = 255; }
    x.putImageData(im, 0, 0);
    el.style.backgroundImage = "url(" + c.toDataURL("image/png") + ")";
  }

  // плавный сдвиг фона при прокрутке (transform — работает на видеокарте, без перерисовки)
  var ticking = false, cur = 0, tgt = 0;
  function onScroll() {
    var max = Math.max(1, root.scrollHeight - window.innerHeight);
    tgt = Math.min(1, Math.max(0, window.pageYOffset / max));
    if (!ticking) { ticking = true; requestAnimationFrame(step); }
  }
  function step() {
    cur += (tgt - cur) * 0.12;
    if (Math.abs(tgt - cur) < 0.0004) cur = tgt;
    var shift = -cur * (H - window.innerHeight);
    cv.style.transform = "translate3d(0," + shift.toFixed(1) + "px,0)";
    if (tw) tw.style.transform = "translate3d(0," + (shift * 0.6).toFixed(1) + "px,0)";
    if (cur !== tgt) requestAnimationFrame(step); else ticking = false;
  }

  paint(); twinkles(); grain(); root.classList.add("space-ok");
  if (!reduce) window.addEventListener("scroll", onScroll, { passive: true });
  var rt = 0, lastW = window.innerWidth;
  window.addEventListener("resize", function () {
    clearTimeout(rt);
    rt = setTimeout(function () { if (window.innerWidth !== lastW || Math.abs(cv.clientHeight - window.innerHeight * 1.32) > 200) { lastW = window.innerWidth; paint(); } }, 250);   // на телефоне адресная строка не должна перерисовывать фон
  });
})();
