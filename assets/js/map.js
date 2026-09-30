/* YarVpn — карта серверов.
   Точечная карта мира (canvas) + HTML-пины. Список серверов берётся из <ul id="srvList"> в index.html
   (data-lat / data-lon / data-dir / data-main) — чтобы добавить или убрать узел, правь только HTML. */
(function () {
  "use strict";

  var M = window.YARVPN_MAP, box = document.getElementById("map");
  if (!M || !box) return;
  var cv = document.getElementById("mapCanvas"), ctx = cv.getContext("2d");
  var pinsEl = document.getElementById("pins"), listEl = document.getElementById("srvList");
  var overlay = box.parentNode.querySelector(".net-list");
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

  /* ---------- проекция (Меркатор, шаг сетки одинаков по x и y) ---------- */
  var PI = Math.PI, RAD = PI / 180, pitch = 2 * PI / cols;
  function my(lat) { return Math.log(Math.tan(PI / 4 + lat * RAD / 2)); }
  var yTop = my(M.latTop);
  function cell(lon, lat) { return { x: (lon + 180) / 360 * cols, y: (yTop - my(lat)) / pitch }; }

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

  /* «Вы»: примерное положение по часовому поясу браузера (без запросов и геолокации) */
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

  /* подписи столиц для «настоящести» карты */
  var CAPS = [
    ["Лондон", 51.51, -0.13], ["Париж", 48.86, 2.35], ["Мадрид", 40.42, -3.7], ["Рим", 41.9, 12.5], ["Осло", 59.91, 10.75],
    ["Москва", 55.75, 37.62], ["Киев", 50.45, 30.52], ["Минск", 53.9, 27.56], ["Таллин", 59.44, 24.75], ["Вена", 48.21, 16.37],
    ["Анкара", 39.93, 32.86], ["Афины", 37.98, 23.73], ["Рейкьявик", 64.15, -21.94], ["Прага", 50.08, 14.44], ["Бухарест", 44.43, 26.1]
  ].map(function (c) { return { name: c[0], c: cell(c[2], c[1]) }; });

  /* ---------- размеры и камера ---------- */
  var W = 0, H = 0, dpr = 1, insetL = 0, vcx = 0, vcy = 0;
  var cam = { x: 0, y: 0, ls: 0 }, tgt = { x: 0, y: 0, ls: 0 };
  var dim = document.createElement("canvas"), bright = document.createElement("canvas");
  var dctx = dim.getContext("2d"), bctx = bright.getContext("2d");
  var view = "eu", selected = main, moving = true, dirty = true, running = false, visible = false, autoplay = true, autoTimer = 0;
  var pinEls = {}, youPin = null;

  function euSpan() { return W < 560 ? 44 : (W < 1020 ? 58 : 66); }
  function euScale() { return (W - insetL) / (euSpan() / 360 * cols); }
  function bboxCenter() {
    var x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    servers.forEach(function (s) { x0 = Math.min(x0, s.c.x); x1 = Math.max(x1, s.c.x); y0 = Math.min(y0, s.c.y); y1 = Math.max(y1, s.c.y); });
    if (you) { x0 = Math.min(x0, you.c.x); x1 = Math.max(x1, you.c.x); y0 = Math.min(y0, you.c.y); y1 = Math.max(y1, you.c.y); }
    return { x: (x0 + x1) / 2 + 5, y: (y0 + y1) / 2 - 2 };
  }
  function setTarget(kind, focus, snap) {
    var t;
    if (kind === "world") {
      t = { x: cols / 2, y: rows / 2 + 6, ls: Math.log(Math.max((W - insetL) / cols, H / (rows * 1.04))) };
    } else {
      var c = bboxCenter(), ls = Math.log(euScale());
      t = { x: c.x, y: c.y, ls: ls };
      if (focus) { t = { x: focus.c.x, y: focus.c.y + 1, ls: ls + Math.log(1.5) }; }
    }
    tgt = t;
    if (snap) { cam.x = t.x; cam.y = t.y; cam.ls = t.ls; }
    moving = true; dirty = true;
  }
  function scale() { return Math.exp(cam.ls); }
  function sx(cx) { return (cx - cam.x) * scale() + vcx; }
  function sy(cy) { return (cy - cam.y) * scale() + vcy; }

  function resize() {
    var r = box.getBoundingClientRect();
    W = Math.max(280, Math.round(r.width)); H = Math.max(280, Math.round(r.height));
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    [cv, dim, bright].forEach(function (c) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); });
    insetL = 0;
    if (overlay && window.innerWidth > 1020) {
      var lr = listEl.getBoundingClientRect();
      insetL = Math.max(0, lr.right - r.left + 28);
    }
    vcx = insetL + (W - insetL) / 2; vcy = H / 2;
    setTarget(view, view === "focus" ? selected : null, true);
    dirty = true;
    if (!running) draw(0, 0);
  }

  /* ---------- статические слои: тусклые точки + яркие (для волн) ---------- */
  function paintLayer(g, buckets, alphas, color) {
    var s = scale(), rad = Math.max(0.5, Math.min(4.3, s * 0.3)) * dpr, sq = rad < 1.7 * dpr, m = 2;
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
    var s = scale();
    paintLayer(dctx, 3, [0.16, 0.26, 0.4], "rgba(255,214,176,A)");
    // сетка координат и подписи — поверх точек, в том же слое
    dctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    dctx.lineWidth = 1; dctx.strokeStyle = "rgba(255,226,196,.05)";
    var lon, lat, x, y;
    dctx.beginPath();
    for (lon = -180; lon <= 180; lon += 15) { x = sx((lon + 180) / 360 * cols); if (x > -2 && x < W + 2) { dctx.moveTo(x, 0); dctx.lineTo(x, H); } }
    for (lat = -50; lat <= 70; lat += 10) { y = sy((yTop - my(lat)) / pitch); if (y > -2 && y < H + 2) { dctx.moveTo(0, y); dctx.lineTo(W, y); } }
    dctx.stroke();
    if (s > 4.2) {
      dctx.font = '500 11px "JetBrains Mono",monospace'; dctx.textBaseline = "middle"; dctx.fillStyle = "rgba(255,226,196,.38)";
      var anchors = servers.map(function (o) { return [sx(o.c.x), sy(o.c.y)]; });
      if (you) anchors.push([sx(you.c.x), sy(you.c.y)]);
      CAPS.forEach(function (c) {
        var x = sx(c.c.x), y = sy(c.c.y);
        if (x < insetL - 30 || x > W - 20 || y < 24 || y > H - 20) return;
        for (var a = 0; a < anchors.length; a++) if (Math.hypot(anchors[a][0] - x, anchors[a][1] - y) < 92) return;   // не лезем под подписи узлов
        dctx.fillRect(x - 1.5, y - 1.5, 3, 3);
        dctx.fillText(c.name.toUpperCase(), x + 8, y);
      });
    }
    paintLayer(bctx, 1, [0.95], "rgba(255,132,60,A)");
    dirty = false;
  }

  /* ---------- пины ---------- */
  function makePin(cls, dir, city, code, label) {
    var p = document.createElement("div");
    p.className = "pin " + cls; p.setAttribute("data-dir", dir);
    p.innerHTML = '<button class="pin-hit" type="button" tabindex="' + (cls.indexOf("you") >= 0 ? "-1" : "0") + '" aria-label="' + label + '"></button><i class="pin-dot"></i>' +
      '<span class="pin-label"><span class="full">' + city + "</span><span class=\"short\">" + code + "</span></span>";
    pinsEl.appendChild(p); return p;
  }
  servers.forEach(function (s) {
    var p = makePin(s.main ? "main" : "", s.dir, s.city, s.code, s.city + ", " + s.country);
    pinEls[s.id] = p;
    p.querySelector(".pin-hit").addEventListener("click", function () { userSelect(s); });
    s.btn.addEventListener("click", function () { userSelect(s, true); });
  });
  if (you) youPin = makePin("pin-you", "t", "Вы", "Вы", "Ваше примерное положение");

  function placePins() {
    servers.forEach(function (s) {
      var x = sx(s.c.x), y = sy(s.c.y), p = pinEls[s.id];
      p.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0)";
      p.style.opacity = (x < insetL - 10 || x > W + 10 || y < -10 || y > H + 10) ? "0" : "1";
    });
    if (youPin) {
      var x = sx(you.c.x), y = sy(you.c.y);
      youPin.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0)";
      youPin.style.opacity = (x < insetL - 10 || x > W + 10 || y < -10 || y > H + 10) ? "0" : "1";
    }
  }

  /* ---------- выбор сервера ---------- */
  var hudEl = document.getElementById("hud");
  if (hudEl) hudEl.setAttribute("aria-live", "off");
  var hud = { code: document.getElementById("hudCode"), city: document.getElementById("hudCity"), sub: document.getElementById("hudSub"), coord: document.getElementById("hudCoord") };
  function fmtCoord(lat, lon) { return Math.abs(lat).toFixed(2) + "° " + (lat >= 0 ? "N" : "S") + " · " + Math.abs(lon).toFixed(2) + "° " + (lon >= 0 ? "E" : "W"); }
  var t0 = 0;
  function select(s, fly) {
    selected = s; t0 = performance.now();
    servers.forEach(function (x) {
      var on = x === s;
      x.li.classList.toggle("on", on); x.btn.setAttribute("aria-pressed", on ? "true" : "false");
      pinEls[x.id].classList.toggle("on", on);
    });
    if (hud.code) { hud.code.textContent = s.code; hud.city.textContent = s.city; hud.sub.textContent = s.country + " · столица"; hud.coord.textContent = fmtCoord(s.lat, s.lon); }
    if (fly) { view = "focus"; box.classList.remove("is-world"); setPressed(null); setTarget("eu", s); }
  }
  function userSelect(s, fromList) {
    autoplay = false; clearInterval(autoTimer);
    if (hudEl) hudEl.setAttribute("aria-live", "polite");   // пока крутится автопоказ — экранному диктору молчим, при ручном выборе — озвучиваем
    select(s, true);
    if (fromList && window.innerWidth <= 1020) {
      var r = box.getBoundingClientRect();
      if (r.top < 60 || r.bottom > window.innerHeight - 20) box.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    }
  }
  var presetBtns = Array.prototype.slice.call(box.querySelectorAll(".map-ui button"));
  function setPressed(v) { presetBtns.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-view") === v ? "true" : "false"); }); }
  presetBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      view = b.getAttribute("data-view"); autoplay = false; clearInterval(autoTimer);
      box.classList.toggle("is-world", view === "world");   // на карте мира подписи узлов только у выбранного — иначе слипаются
      setPressed(view); setTarget(view, null, false);
    });
  });

  /* ---------- дуги и пакеты ---------- */
  function ctrl(a, b) {
    var mx = (a[0] + b[0]) / 2, my2 = (a[1] + b[1]) / 2, d = Math.hypot(b[0] - a[0], b[1] - a[1]);
    return [mx, my2 - Math.min(d * 0.32, 160) - 8];
  }
  function qpt(a, c, b, t) {
    var u = 1 - t; return [u * u * a[0] + 2 * u * t * c[0] + t * t * b[0], u * u * a[1] + 2 * u * t * c[1] + t * t * b[1]];
  }
  function pt(o) { return [sx(o.c.x), sy(o.c.y)]; }
  var spark = (function () {
    var k = document.createElement("canvas"); k.width = k.height = 32; var g = k.getContext("2d"), gr = g.createRadialGradient(16, 16, 0, 16, 16, 16);
    gr.addColorStop(0, "rgba(255,246,230,1)"); gr.addColorStop(.25, "rgba(255,176,102,.9)"); gr.addColorStop(1, "rgba(255,106,31,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 32, 32); return k;
  })();

  function drawArcs(t) {
    var hub = pt(main), from, to = pt(selected), rt = selected;
    servers.forEach(function (s) {
      if (s === main) return;
      var b = pt(s), c = ctrl(hub, b);
      ctx.beginPath(); ctx.moveTo(hub[0], hub[1]); ctx.quadraticCurveTo(c[0], c[1], b[0], b[1]);
      ctx.strokeStyle = "rgba(255,150,80,.16)"; ctx.lineWidth = 1; ctx.setLineDash([3, 5]); ctx.lineDashOffset = -t * 10; ctx.stroke();
    });
    ctx.setLineDash([]);
    from = you ? pt(you) : hub;
    if (!you && selected === main) return;
    if (you || selected !== main) {
      var c2 = ctrl(from, to);
      var grad = ctx.createLinearGradient(from[0], from[1], to[0], to[1]);
      grad.addColorStop(0, "rgba(255,190,120,.15)"); grad.addColorStop(1, "rgba(255,106,31,.95)");
      ctx.beginPath(); ctx.moveTo(from[0], from[1]); ctx.quadraticCurveTo(c2[0], c2[1], to[0], to[1]);
      ctx.strokeStyle = "rgba(255,106,31,.22)"; ctx.lineWidth = 6; ctx.stroke();
      ctx.strokeStyle = grad; ctx.lineWidth = 1.6; ctx.stroke();
      ctx.globalCompositeOperation = "lighter";
      for (var i = 0; i < 3; i++) {
        var p = ((t * 0.42) + i / 3) % 1, e = p * p * (3 - 2 * p);
        for (var tr = 0; tr < 6; tr++) {
          var q = qpt(from, c2, to, Math.max(0, e - tr * 0.012)), sz = 11 - tr * 1.4;
          ctx.globalAlpha = (1 - tr / 6) * Math.sin(p * PI) * 0.95;
          ctx.drawImage(spark, q[0] - sz, q[1] - sz, sz * 2, sz * 2);
        }
      }
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = "source-over";
    }
  }
  function ripple(x, y, r, a) {
    var X = x * dpr, Y = y * dpr, R = r * dpr, w = 24 * dpr, ro = R + w;
    var bx = Math.max(0, Math.floor(X - ro)), by = Math.max(0, Math.floor(Y - ro));
    var bw = Math.min(cv.width, Math.ceil(X + ro)) - bx, bh = Math.min(cv.height, Math.ceil(Y + ro)) - by;
    if (bw > 0 && bh > 0) {   // копируем яркий слой только под кольцом, а не на весь экран
      ctx.save(); ctx.beginPath(); ctx.arc(X, Y, ro, 0, 6.2832); ctx.arc(X, Y, Math.max(0, R - w), 0, 6.2832, true); ctx.clip("evenodd");
      ctx.globalAlpha = a; ctx.drawImage(bright, bx, by, bw, bh, bx, by, bw, bh); ctx.restore();
    }
    ctx.save(); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832);
    ctx.strokeStyle = "rgba(255,130,60," + (a * 0.28).toFixed(3) + ")"; ctx.lineWidth = 1; ctx.stroke(); ctx.restore();
  }

  function draw(dt, t) {
    if (dirty) renderLayers();
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1; ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.drawImage(dim, 0, 0);
    var sp = pt(selected), i, ph, e;
    var age = (performance.now() - t0) / 1000;
    for (i = 0; i < 3; i++) {
      ph = ((age / 4.4) + i / 3) % 1; e = 1 - Math.pow(1 - ph, 2.4);
      ripple(sp[0], sp[1], e * Math.min(380, W * 0.42), Math.pow(1 - ph, 1.6) * 0.85);
    }
    if (main !== selected) { var mp = pt(main); ph = (age / 5.2) % 1; ripple(mp[0], mp[1], (1 - Math.pow(1 - ph, 2)) * 150, (1 - ph) * 0.4); }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawArcs(t);
    placePins();
  }

  /* ---------- цикл ---------- */
  var last = 0;
  function frame(ts) {
    if (!running) return;
    var dt = Math.min((ts - last) / 1000, 0.05); last = ts;
    if (moving) {
      var kk = 1 - Math.exp(-dt * 4.6);
      cam.x += (tgt.x - cam.x) * kk; cam.y += (tgt.y - cam.y) * kk; cam.ls += (tgt.ls - cam.ls) * kk;
      if (Math.abs(tgt.x - cam.x) < 0.02 && Math.abs(tgt.y - cam.y) < 0.02 && Math.abs(tgt.ls - cam.ls) < 0.0005) { cam.x = tgt.x; cam.y = tgt.y; cam.ls = tgt.ls; moving = false; }
      dirty = true;
    }
    draw(dt, ts / 1000);
    requestAnimationFrame(frame);
  }
  function start() { if (running || !visible || document.hidden) return; running = true; last = performance.now(); requestAnimationFrame(frame); }
  function stop() { running = false; }

  function startAuto() {
    clearInterval(autoTimer);
    if (reduce) return;
    autoTimer = setInterval(function () {
      if (!autoplay || !visible) return;
      var i = servers.indexOf(selected); select(servers[(i + 1) % servers.length], false);
    }, 5200);
  }

  var rsz = 0;
  window.addEventListener("resize", function () { clearTimeout(rsz); rsz = setTimeout(resize, 120); });
  document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else start(); });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { es.forEach(function (e) { visible = e.isIntersecting; if (visible) start(); else stop(); }); }, { threshold: 0.05 }).observe(box);
  } else { visible = true; }

  // шрифт подписей на canvas подгружается лениво — перерисуем, когда будет готов
  if (document.fonts && document.fonts.load) document.fonts.load('500 11px "JetBrains Mono"', "Москва").then(function () { dirty = true; if (!running) draw(0, 0); });

  resize();
  select(main, false);
  if (reduce) { draw(0, 0); visible = false; } else { visible = true; start(); }
  startAuto();
})();
