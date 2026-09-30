/* YarVpn — фон-видео (ASCII-арт «sss») + запасная ASCII-анимация на canvas.
   Видео — то же, что в компоненте <AsciiArt/>: один <video> на всю страницу (см. components/ui/sss.tsx).
   Если видео не загрузилось (сеть, блокировка домена) — включается собственная ASCII-волна, чтобы фон никогда не был пустым.
   При прокрутке фон плавно приглушается и слегка «едет» (параллакс). */
(function () {
  "use strict";

  var wrap = document.getElementById("ascii");
  if (!wrap) return;
  var video = wrap.querySelector("video"), cv = document.getElementById("asciiFallback");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var saveData = navigator.connection && navigator.connection.saveData;
  var small = window.innerWidth < 720;
  // Быстрая проверка вида фона без правки кода: ?bg=invert (тёмное видео на светлом), ?bg=raw (без цветной тонировки), ?bg=fallback (только запасная анимация)
  var qs = /[?&]bg=([a-z,]+)/.exec(window.location.search), force = "";
  if (qs) qs[1].split(",").forEach(function (v) {
    if (v === "invert") wrap.setAttribute("data-tone", "light");
    else if (v === "raw") wrap.setAttribute("data-tint", "off");
    else if (v === "fallback") force = v;
  });

  /* ---------- запасная ASCII-анимация ---------- */
  var ctx = cv && cv.getContext("2d"), running = false, last = 0, t = 0, W = 0, H = 0, cw = 0, ch = 0, cols = 0, rows = 0, atlas = null, ramp = " .:-=+*#%@";
  function buildAtlas() {
    cw = small ? 9 : 10; ch = cw * 1.8;
    var a = document.createElement("canvas"); a.width = Math.ceil(cw * ramp.length); a.height = Math.ceil(ch);
    var g = a.getContext("2d"); g.fillStyle = "#fff"; g.font = "500 " + Math.round(ch * 0.8) + 'px ui-monospace,"SF Mono",Menlo,Consolas,monospace'; g.textBaseline = "middle"; g.textAlign = "center";
    for (var i = 1; i < ramp.length; i++) g.fillText(ramp[i], i * cw + cw / 2, ch / 2 + 1);
    atlas = a;
  }
  function resize() {
    if (!cv) return;
    var dpr = 1; W = window.innerWidth; H = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildAtlas(); cols = Math.ceil(W / cw); rows = Math.ceil(H / ch);
  }
  function field(x, y, tt) {
    var nx = x / cols, ny = y / rows, cxn = nx - 0.66, cyn = ny - 0.46;
    var d = Math.sqrt(cxn * cxn * 1.6 + cyn * cyn * 2.2);
    var v = 0.5 + 0.5 * Math.sin(d * 14 - tt * 1.2);                       // кольца от «глобуса»
    v = v * (1 - Math.min(1, d * 1.5));
    v += 0.32 * Math.sin(nx * 9 + tt * 0.6) * Math.sin(ny * 7 - tt * 0.5);  // мягкие волны
    v += 0.16 * Math.sin((nx + ny) * 22 + tt * 1.4);
    return Math.max(0, Math.min(1, v));
  }
  function drawFallback() {
    ctx.clearRect(0, 0, W, H);
    for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
      var v = field(c, r, t), i = Math.floor(v * (ramp.length - 1));
      if (i < 1) continue;
      ctx.drawImage(atlas, i * cw, 0, cw, ch, c * cw, r * ch, cw, ch);
    }
  }
  function loop(ts) {
    if (!running) return;
    var dt = Math.min((ts - last) / 1000, 0.1);
    if (dt > 1 / 24) { last = ts; t += dt; drawFallback(); }   // ~24 кадров/с — хватает для «печатной» анимации
    requestAnimationFrame(loop);
  }
  function startFallback() {
    if (!cv || running) return;
    wrap.classList.add("fb"); resize(); drawFallback();
    if (reduce) return;
    running = true; last = performance.now(); requestAnimationFrame(loop);
  }
  function stopFallback() { running = false; wrap.classList.remove("fb"); }

  /* ---------- видео ---------- */
  // Логика: видео играет — показываем его. Не играет (автоплей запрещён, «экономия трафика») — остаётся кадр-постер.
  // Ни видео, ни постер не загрузились (сеть, блокировка домена) — включаем собственную ASCII-анимацию, чтобы фон не был пустым.
  var playing = false, poster = "pending", stalled = false, errored = false;
  function decide() {
    if (playing || poster === "ok") return;
    if (poster === "fail" || stalled || errored) startFallback();
  }
  if (force === "fallback") {
    if (video) { try { video.pause(); } catch (e) { /* ignore */ } video.removeAttribute("src"); video.removeAttribute("poster"); video.load(); }
    startFallback();
  } else if (video) {
    var pu = video.getAttribute("poster");
    if (pu) { var im = new Image(); im.onload = function () { poster = "ok"; if (!playing) stopFallback(); }; im.onerror = function () { poster = "fail"; decide(); }; im.src = pu; } else poster = "fail";
    video.addEventListener("playing", function () { playing = true; wrap.classList.add("vid"); stopFallback(); });
    video.addEventListener("error", function () { errored = true; decide(); });
    video.addEventListener("stalled", function () { stalled = true; decide(); });
    setTimeout(function () { if (!playing) { stalled = true; decide(); } }, 4500);
    if (reduce || saveData) { try { video.pause(); video.removeAttribute("autoplay"); } catch (e) { /* ignore */ } }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { try { video.pause(); } catch (e) { /* ignore */ } }
      else if (!reduce && !saveData) { var p = video.play(); if (p && p.catch) p.catch(function () { /* автозапуск запрещён — остаётся постер */ }); }
    });
    // iOS/Safari иногда не стартует автоплей до первого касания — подстрахуем
    var kick = function () { if (!playing && !reduce && !saveData) { var p = video.play(); if (p && p.catch) p.catch(function () {}); } };
    window.addEventListener("touchstart", kick, { once: true, passive: true });
    window.addEventListener("pointerdown", kick, { once: true, passive: true });
    if (reduce || saveData) setTimeout(function () { stalled = true; decide(); }, 300);
  } else { startFallback(); }
  window.addEventListener("resize", function () { if (running || wrap.classList.contains("fb")) { resize(); drawFallback(); } });

  /* ---------- приглушение и параллакс при прокрутке ---------- */
  var ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      var y = window.pageYOffset, k = Math.max(0, Math.min(1, y / (window.innerHeight * 0.95)));
      wrap.style.setProperty("--dim", (1 - 0.7 * k).toFixed(3));
      wrap.style.setProperty("--py", (-y * 0.05).toFixed(1) + "px");
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
