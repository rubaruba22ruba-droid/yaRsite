/* YarVpn — карта серверов.
   Точечная карта (canvas) + HTML-пины. Список серверов берётся из <ul id="srvList"> в index.html
   (data-lat / data-lon / data-dir / data-main) — чтобы добавить или убрать сервер, правь только HTML.
   На карте нет ни пинга, ни аптайма, ни загрузки — только то, что есть в проекте (страна и город-столица). */
(function () {
  "use strict";

  var M = window.YARVPN_MAP, box = document.getElementById("map");
  if (!M) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- суша: RLE → список клеток ---------- */
  var cols = M.cols, rows = M.rows, runs = M.rle.split(","), idxs = [], pos = 0, val = 0, i, k;
  for (i = 0; i < runs.length; i++) {
    var n = parseInt(runs[i], 36);
    if (val) for (k = 0; k < n; k++) idxs.push(pos + k);
    pos += n; val ^= 1;
  }
  var LN = idxs.length, LC = new Uint16Array(LN), LR = new Uint16Array(LN), LB = new Uint8Array(LN);
  for (i = 0; i < LN; i++) {
    LC[i] = idxs[i] % cols; LR[i] = (idxs[i] / cols) | 0;
    LB[i] = ((Math.imul(LC[i], 73856093) ^ Math.imul(LR[i], 19349663)) >>> 0) % 3;
  }
  idxs = null;

  var PI = Math.PI, RAD = PI / 180, pitch = 2 * PI / cols;
  function my(lat) { return Math.log(Math.tan(PI / 4 + lat * RAD / 2)); }
  var yTop = my(M.latTop);
  function cell(lon, lat) { return { x: (lon + 180) / 360 * cols, y: (yTop - my(lat)) / pitch }; }

  /* ---------- миниатюра карты в блоке «Несколько стран»: точки мира + сервер из проекта ---------- */
  (function mini() {
    var c = document.getElementById("miniMap"); if (!c) return;
    var g = c.getContext("2d"), W = 0, H = 0, dpr = 1, off = document.createElement("canvas"), vis = false, run = false, tt = 0, fin = cell(24.94, 60.17);
    function draw() {
      var r = c.parentNode.getBoundingClientRect(); dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.round(r.width); H = Math.round(r.height); c.width = off.width = Math.round(W * dpr); c.height = off.height = Math.round(H * dpr);
      var o = off.getContext("2d"), s = Math.max(W / cols, H / rows) * 1.02, ox = (W - cols * s) / 2, oy = (H - rows * s) / 2 - H * 0.04;
      o.setTransform(dpr, 0, 0, dpr, 0, 0); o.fillStyle = "rgba(255,255,255,.26)"; o.beginPath();
      var rad = Math.max(0.55, s * 0.34);
      var st = s < 1.4 ? 3 : 1;   // на маленьком размере прореживаем сетку, чтобы точки не слипались в сплошные пятна
      for (var j = 0; j < LN; j += 1) { if (st > 1 && (LC[j] % st || LR[j] % st)) continue; var x = ox + (LC[j] + .5) * s, y = oy + (LR[j] + .5) * s; o.rect(x - rad, y - rad, rad * 2, rad * 2); }
      o.fill(); c._fx = ox + fin.x * s; c._fy = oy + fin.y * s;
      frame(0);
    }
    function frame(dt) {
      tt += dt; g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, c.width, c.height); g.drawImage(off, 0, 0); g.setTransform(dpr, 0, 0, dpr, 0, 0);
      var fx = c._fx, fy = c._fy, ph = (tt / 3) % 1;
      g.strokeStyle = "rgba(255,106,26," + (0.6 * (1 - ph)).toFixed(3) + ")"; g.lineWidth = 1.2; g.beginPath(); g.arc(fx, fy, 3 + ph * 26, 0, 6.2832); g.stroke();
      g.fillStyle = "#ff6a1a"; g.beginPath(); g.arc(fx, fy, 3.2, 0, 6.2832); g.fill();
      g.fillStyle = "rgba(255,106,26,.25)"; g.beginPath(); g.arc(fx, fy, 7, 0, 6.2832); g.fill();
    }
    var last = 0;
    function loop(ts) { if (!run) return; frame(Math.min((ts - last) / 1000, 0.05)); last = ts; requestAnimationFrame(loop); }
    function start() { if (run || !vis || reduce) return; run = true; last = performance.now(); requestAnimationFrame(loop); }
    if ("IntersectionObserver" in window) new IntersectionObserver(function (es) { es.forEach(function (e) { vis = e.isIntersecting; if (vis) start(); else run = false; }); }).observe(c);
    window.addEventListener("resize", draw); draw();
  })();

  if (!box) return;
  var cv = document.getElementById("mapCanvas"), ctx = cv.getContext("2d");
  var pinsEl = document.getElementById("pins"), listEl = document.getElementById("srvList");
  var face = cv.parentNode;

  /* ---------- серверы из HTML ---------- */
  var servers = [], main = null;
  Array.prototype.forEach.call(listEl.querySelectorAll(".srv"), function (li) {
    var s = {
      id: li.getAttribute("data-id"), code: li.getAttribute("data-code"), city: li.getAttribute("data-city"),
      country: li.getAttribute("data-country"), lat: +li.getAttribute("data-lat"), lon: +li.getAttribute("data-lon"),
      dir: li.getAttribute("data-dir") || "r", main: li.getAttribute("data-main") === "1", li: li, btn: li.querySelector(".srv-btn")
    };
    s.c = cell(s.lon, s.lat);
    servers.push(s); if (s.main) main = s;
  });
  if (!servers.length) return;
  if (!main) main = servers[0];

  /* «Вы»: примерное положение по часовому поясу браузера (без запросов и геолокации; город не показываем) */
  var TZ = {
    "Europe/Moscow": [55.75, 37.62], "Europe/Kaliningrad": [54.71, 20.51], "Europe/Samara": [53.2, 50.15], "Europe/Kiev": [50.45, 30.52],
    "Europe/Kyiv": [50.45, 30.52], "Europe/Minsk": [53.9, 27.56], "Asia/Yekaterinburg": [56.84, 60.6], "Asia/Omsk": [54.99, 73.37],
    "Asia/Novosibirsk": [55.03, 82.92], "Asia/Krasnoyarsk": [56.01, 92.85], "Asia/Almaty": [43.24, 76.89], "Asia/Tashkent": [41.3, 69.24],
    "Asia/Tbilisi": [41.72, 44.79], "Asia/Yerevan": [40.18, 44.51], "Asia/Baku": [40.41, 49.87], "Europe/Istanbul": [41.01, 28.98],
    "Europe/Riga": [56.95, 24.11], "Europe/Vilnius": [54.69, 25.28], "Europe/Chisinau": [47.01, 28.86], "Asia/Bishkek": [42.87, 74.59],
    "Asia/Dubai": [25.2, 55.27]
  };
  var you = null;
  try {
    var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && TZ[tz]) { you = { lat: TZ[tz][0], lon: TZ[tz][1] }; you.c = cell(you.lon, you.lat); }
  } catch (e) { /* без геометки */ }

  /* подписи столиц для контекста (география, не данные проекта) */
  var CAPS = [
    ["Лондон", 51.51, -0.13], ["Париж", 48.86, 2.35], ["Мадрид", 40.42, -3.7], ["Рим", 41.9, 12.5], ["Осло", 59.91, 10.75],
    ["Москва", 55.75, 37.62], ["Киев", 50.45, 30.52], ["Минск", 53.9, 27.56], ["Вена", 48.21, 16.37], ["Стокгольм", 59.33, 18.07],
    ["Анкара", 39.93, 32.86], ["Берлин", 52.52, 13.4], ["Варшава", 52.23, 21.01], ["Рейкьявик", 64.15, -21.94]
  ].map(function (c) { return { name: c[0], c: cell(c[2], c[1]) }; });

  /* ---------- размеры и камера ---------- */
  var W = 0, H = 0, dpr = 1, vcx = 0, vcy = 0;
  var cam = { x: 0, y: 0, ls: 0 }, tgt = { x: 0, y: 0, ls: 0 };
  var dim = document.createElement("canvas"), hot = document.createElement("canvas"), snow = document.createElement("canvas");
  var dctx = dim.getContext("2d"), hctx = hot.getContext("2d"), sctx = snow.getContext("2d");
  var view = "eu", selected = main, moving = true, dirty = true, running = false, visible = false;
  var pinEls = {}, youPin = null;

  function euSpan() { return W < 560 ? 42 : (W < 1020 ? 66 : 92); }
  function euScale() { return W / (euSpan() / 360 * cols); }
  function bboxCenter() {
    var x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    servers.forEach(function (s) { x0 = Math.min(x0, s.c.x); x1 = Math.max(x1, s.c.x); y0 = Math.min(y0, s.c.y); y1 = Math.max(y1, s.c.y); });
    return { x: (x0 + x1) / 2 + (W < 560 ? 3 : 6), y: (y0 + y1) / 2 + 2 };
  }
  function setTarget(kind, snap) {
    var t, c = bboxCenter(), ls = Math.log(euScale());
    if (kind === "world") t = { x: cols / 2, y: rows / 2 + 6, ls: Math.log(Math.max(W / cols, H / (rows * 1.04))) };
    else if (kind === "focus") t = { x: selected.c.x + (W < 560 ? 0 : 3), y: selected.c.y + 1, ls: ls + Math.log(1.7) };
    else t = { x: c.x, y: c.y, ls: ls };
    tgt = t;
    if (snap) { cam.x = t.x; cam.y = t.y; cam.ls = t.ls; }
    moving = true; dirty = true;
  }
  function scale() { return Math.exp(cam.ls); }
  function sx(cx) { return (cx - cam.x) * scale() + vcx; }
  function sy(cy) { return (cy - cam.y) * scale() + vcy; }

  function resize() {
    W = Math.max(280, face.offsetWidth); H = Math.max(280, face.offsetHeight);
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    [cv, dim, hot, snow].forEach(function (c) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); });
    vcx = W / 2; vcy = H / 2;
    setTarget(view, true); dirty = true;
    if (!running) draw(0, 0);
  }

  /* ---------- статические слои ---------- */
  function paintLayer(g, buckets, alphas, color) {
    var s = scale(), rad = Math.max(0.5, Math.min(4.2, s * 0.3)) * dpr, sq = rad < 1.7 * dpr, m = 2;
    var cmin = cam.x - vcx / s - m, cmax = cam.x + (W - vcx) / s + m, rmin = cam.y - vcy / s - m, rmax = cam.y + (H - vcy) / s + m;
    g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, dim.width, dim.height);
    for (var b = 0; b < buckets; b++) {
      g.beginPath();
      for (var i = 0; i < LN; i++) {
        if (buckets > 1 && LB[i] !== b) continue;
        var c = LC[i] + 0.5, r = LR[i] + 0.5;
        if (c < cmin || c > cmax || r < rmin || r > rmax) continue;
        var x = ((c - cam.x) * s + vcx) * dpr, y = ((r - cam.y) * s + vcy) * dpr;
        if (sq) g.rect(x - rad, y - rad, rad * 2, rad * 2); else { g.moveTo(x + rad, y); g.arc(x, y, rad, 0, 6.2832); }
      }
      g.fillStyle = color.replace("A", alphas[b]); g.fill();
    }
  }
  function renderLayers() {
    var s = scale(), x, y;
    paintLayer(dctx, 3, [0.15, 0.25, 0.37], "rgba(255,255,255,A)");
    dctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dctx.lineWidth = 1; dctx.strokeStyle = "rgba(255,255,255,.035)"; dctx.beginPath();
    for (var lon = -180; lon <= 180; lon += 15) { x = sx((lon + 180) / 360 * cols); if (x > -2 && x < W + 2) { dctx.moveTo(x, 0); dctx.lineTo(x, H); } }
    for (var lat = -50; lat <= 70; lat += 10) { y = sy((yTop - my(lat)) / pitch); if (y > -2 && y < H + 2) { dctx.moveTo(0, y); dctx.lineTo(W, y); } }
    dctx.stroke();
    if (s > 4.2) {
      dctx.font = '500 11.5px Onest,system-ui,sans-serif'; dctx.textBaseline = "middle"; dctx.fillStyle = "rgba(255,255,255,.32)";
      var anchors = servers.map(function (o) { return [sx(o.c.x), sy(o.c.y)]; });
      if (you) anchors.push([sx(you.c.x), sy(you.c.y)]);
      CAPS.forEach(function (c) {
        var x = sx(c.c.x), y = sy(c.c.y);
        if (x < 24 || x > W - 24 || y < 24 || y > H - 24) return;
        for (var a = 0; a < anchors.length; a++) if (Math.hypot(anchors[a][0] - x, anchors[a][1] - y) < 96) return;
        dctx.fillRect(x - 1.5, y - 1.5, 3, 3); dctx.fillText(c.name, x + 8, y);
      });
    }
    paintLayer(hctx, 1, [0.9], "rgba(255,106,26,A)");
    paintLayer(sctx, 1, [0.9], "rgba(255,255,255,A)");
    dirty = false;
  }

  /* ---------- пины ---------- */
  function makePin(cls, dir, main, sub, label) {
    var p = document.createElement("div");
    p.className = "pin " + cls; p.setAttribute("data-dir", dir);
    p.innerHTML = '<button class="pin-hit" type="button" tabindex="' + (cls.indexOf("you") >= 0 ? "-1" : "0") + '" aria-label="' + label + '"></button><i class="pin-dot"></i>' +
      '<span class="pin-label">' + main + (sub ? " <small>" + sub + "</small>" : "") + "</span>";
    pinsEl.appendChild(p); return p;
  }
  servers.forEach(function (s) {
    var p = makePin(s.main ? "main" : "", s.dir, s.country, s.city, s.country + ", " + s.city);
    pinEls[s.id] = p;
    p.querySelector(".pin-hit").addEventListener("click", function () { toggleFocus(s); });
    s.btn.addEventListener("click", function () { toggleFocus(s); });
  });
  if (you) youPin = makePin("pin-you", "t", "Вы", "", "Ваше примерное положение");

  function placePins() {
    servers.forEach(function (s) {
      var x = sx(s.c.x), y = sy(s.c.y), p = pinEls[s.id];
      p.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0)";
      p.style.opacity = (x < -10 || x > W + 10 || y < -10 || y > H + 10) ? "0" : "1";
    });
    if (youPin) {
      var x = sx(you.c.x), y = sy(you.c.y);
      youPin.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0)";
      youPin.style.opacity = (x < -10 || x > W + 10 || y < -10 || y > H + 10) ? "0" : "1";
    }
  }

  /* ---------- выбор сервера ---------- */
  var t0 = 0;
  function select(s) {
    selected = s; t0 = performance.now();
    servers.forEach(function (x) {
      var on = x === s;
      x.li.classList.toggle("on", on); x.btn.setAttribute("aria-pressed", on ? "true" : "false");
      pinEls[x.id].classList.toggle("on", on);
    });
  }
  function toggleFocus(s) {
    select(s);
    if (view === "focus" && selected === s) { view = "eu"; setPressed("eu"); } else { view = "focus"; setPressed(null); }
    box.classList.remove("is-world"); setTarget(view, false);
  }
  var presetBtns = Array.prototype.slice.call(box.querySelectorAll(".map-ui button"));
  function setPressed(v) { presetBtns.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-view") === v ? "true" : "false"); }); }
  presetBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      view = b.getAttribute("data-view");
      setPressed(view); setTarget(view, false);
    });
  });

  /* ---------- маршрут и пакеты ---------- */
  function ctrl(a, b) {
    var mx = (a[0] + b[0]) / 2, my2 = (a[1] + b[1]) / 2, d = Math.hypot(b[0] - a[0], b[1] - a[1]);
    return [mx, my2 - Math.min(d * 0.3, 150) - 8];
  }
  function qpt(a, c, b, t) { var u = 1 - t; return [u * u * a[0] + 2 * u * t * c[0] + t * t * b[0], u * u * a[1] + 2 * u * t * c[1] + t * t * b[1]]; }
  function pt(o) { return [sx(o.c.x), sy(o.c.y)]; }
  var spark = (function () {
    var k = document.createElement("canvas"); k.width = k.height = 32; var g = k.getContext("2d"), gr = g.createRadialGradient(16, 16, 0, 16, 16, 16);
    gr.addColorStop(0, "rgba(255,255,255,1)"); gr.addColorStop(.3, "rgba(255,150,80,.85)"); gr.addColorStop(1, "rgba(255,106,26,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 32, 32); return k;
  })();
  function drawRoute(t) {
    if (!you) return;
    var from = pt(you), to = pt(selected), c2 = ctrl(from, to);
    var grad = ctx.createLinearGradient(from[0], from[1], to[0], to[1]);
    grad.addColorStop(0, "rgba(255,255,255,.08)"); grad.addColorStop(1, "rgba(255,106,26,.85)");
    ctx.beginPath(); ctx.moveTo(from[0], from[1]); ctx.quadraticCurveTo(c2[0], c2[1], to[0], to[1]);
    ctx.strokeStyle = grad; ctx.lineWidth = 1.3; ctx.setLineDash([2, 5]); ctx.lineDashOffset = -t * 14; ctx.stroke(); ctx.setLineDash([]);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < 2; i++) {
      var p = ((t * 0.3) + i / 2) % 1, e = p * p * (3 - 2 * p);
      for (var tr = 0; tr < 5; tr++) {
        var q = qpt(from, c2, to, Math.max(0, e - tr * 0.011)), sz = 8 - tr * 1.3;
        ctx.globalAlpha = (1 - tr / 5) * Math.sin(p * PI) * 0.85;
        ctx.drawImage(spark, q[0] - sz, q[1] - sz, sz * 2, sz * 2);
      }
    }
    ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
  }
  function ripple(x, y, r, a) {
    var X = x * dpr, Y = y * dpr, R = r * dpr, w = 15 * dpr, ro = R + w;
    var bx = Math.max(0, Math.floor(X - ro)), by = Math.max(0, Math.floor(Y - ro));
    var bw = Math.min(cv.width, Math.ceil(X + ro)) - bx, bh = Math.min(cv.height, Math.ceil(Y + ro)) - by;
    if (bw > 0 && bh > 0) {
      ctx.save(); ctx.beginPath(); ctx.arc(X, Y, ro, 0, 6.2832); ctx.arc(X, Y, Math.max(0, R - w), 0, 6.2832, true); ctx.clip("evenodd");
      ctx.globalAlpha = a; ctx.drawImage(hot, bx, by, bw, bh, bx, by, bw, bh); ctx.restore();
    }
    ctx.save(); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832);
    ctx.strokeStyle = "rgba(255,106,26," + (a * 0.22).toFixed(3) + ")"; ctx.lineWidth = 1; ctx.stroke(); ctx.restore();
  }
  function sweep(t) {   // медленный светлый «проход» по точкам — фоновое движение карты
    var ph = ((t / 11) % 1.5) - 0.25, cxp = ph * (W + H * 0.4) - H * 0.1, slant = H * 0.32;
    for (var i = 1; i <= 4; i++) {
      var w = 26 * i, x0 = cxp - w - slant, x1 = cxp + w;
      var bx = Math.max(0, Math.floor(x0 * dpr)), bw = Math.min(cv.width, Math.ceil(x1 * dpr)) - bx;
      if (bw <= 0) continue;
      ctx.save(); ctx.beginPath(); ctx.moveTo((cxp - w) * dpr, 0); ctx.lineTo((cxp + w) * dpr, 0); ctx.lineTo((cxp + w - slant) * dpr, cv.height); ctx.lineTo((cxp - w - slant) * dpr, cv.height); ctx.closePath(); ctx.clip();
      ctx.globalAlpha = 0.075; ctx.drawImage(snow, bx, 0, bw, cv.height, bx, 0, bw, cv.height); ctx.restore();
    }
  }

  function draw(dt, t) {
    if (dirty) renderLayers();
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1; ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.drawImage(dim, 0, 0);
    if (!reduce) sweep(t);
    var sp = pt(selected), age = (performance.now() - t0) / 1000;
    for (var i = 0; i < 3; i++) {
      var ph = ((age / 5) + i / 3) % 1, e = 1 - Math.pow(1 - ph, 2.4);
      ripple(sp[0], sp[1], e * Math.min(300, W * 0.36), Math.pow(1 - ph, 1.9) * 0.5);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawRoute(t);
    placePins();
  }

  /* ---------- цикл ---------- */
  var last = 0;
  function frame(ts) {
    if (!running) return;
    var dt = Math.min((ts - last) / 1000, 0.05); last = ts;
    if (moving) {
      var kk = 1 - Math.exp(-dt * 4.2);
      cam.x += (tgt.x - cam.x) * kk; cam.y += (tgt.y - cam.y) * kk; cam.ls += (tgt.ls - cam.ls) * kk;
      if (Math.abs(tgt.x - cam.x) < 0.02 && Math.abs(tgt.y - cam.y) < 0.02 && Math.abs(tgt.ls - cam.ls) < 0.0005) { cam.x = tgt.x; cam.y = tgt.y; cam.ls = tgt.ls; moving = false; }
      dirty = true;
    }
    draw(dt, ts / 1000);
    requestAnimationFrame(frame);
  }
  function start() { if (running || !visible || document.hidden) return; running = true; last = performance.now(); requestAnimationFrame(frame); }
  function stop() { running = false; }

  var rsz = 0;
  window.addEventListener("resize", function () { clearTimeout(rsz); rsz = setTimeout(resize, 120); });
  document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else start(); });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { es.forEach(function (e) { visible = e.isIntersecting; if (visible) start(); else stop(); }); }, { threshold: 0.05 }).observe(box);
  } else { visible = true; }
  if (document.fonts && document.fonts.load) document.fonts.load('500 11px Onest', "Москва").then(function () { dirty = true; if (!running) draw(0, 0); });

  resize();
  select(main);
  if (reduce) { draw(0, 0); visible = false; } else { visible = true; start(); }
})();
