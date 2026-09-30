/* YarVpn — карта серверов: точечная карта мира, по которой летает самолётик от страны к стране.
   Список серверов — в массиве SERVERS ниже (единственный источник: карта и список под ней строятся из него).
   Добавить или убрать страну = добавить или убрать строку. side — с какой стороны подписать точку: l/r/t/b. */
(function () {
  "use strict";
  var SERVERS = [
    { c: "CH", n: "Швейцария", city: "Цюрих", lat: 47.37, lon: 8.54, side: "t", sideN: "b" },
    { c: "ES", n: "Испания", city: "Мадрид", lat: 40.42, lon: -3.70, side: "l" },
    { c: "US", n: "США", city: "Вашингтон", lat: 38.90, lon: -77.04, side: "l" },
    { c: "SE", n: "Швеция", city: "Стокгольм", lat: 59.33, lon: 18.07, side: "l" },
    { c: "FI", n: "Финляндия", city: "Хельсинки", lat: 60.17, lon: 24.94, side: "r" },
    { c: "TR", n: "Турция", city: "Анкара", lat: 39.93, lon: 32.86, side: "r" },
    { c: "AL", n: "Албания", city: "Тирана", lat: 41.33, lon: 19.82, side: "b" }
  ];
  /* порядок облёта (индексы SERVERS); замыкается на первую точку */
  var ROUTE = [0, 1, 2, 3, 4, 5, 6];

  var doc = document;
  var cv = doc.getElementById("mapCv"), list = doc.getElementById("srvList"), now = doc.getElementById("mapNow");
  var D = window.YV_DOTS;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var TAU = Math.PI * 2;

  /* счётчики стран на странице */
  Array.prototype.forEach.call(doc.querySelectorAll("[data-count]"), function (el) { el.textContent = SERVERS.length; });

  /* список под картой */
  var btns = [];
  if (list) {
    SERVERS.forEach(function (s, i) {
      var li = doc.createElement("li"), b = doc.createElement("button");
      b.type = "button"; b.setAttribute("aria-label", s.n + ", " + s.city + ": показать на карте");
      b.innerHTML = "<code>" + s.c + "</code><span><strong>" + s.n + "</strong><small>" + s.city + "</small></span>";
      b.addEventListener("click", function () { fly(i); });
      li.appendChild(b); list.appendChild(li); btns.push(b);
    });
  }

  if (!cv || !cv.getContext || !D) return;
  var cx = cv.getContext("2d");
  var base = doc.createElement("canvas"), bx = base.getContext("2d");
  var W = 0, H = 0, dpr = 1, S = 1, narrow = false, pts = [], dots = null, nd = 0;
  var R = 2;          /* радиус точки суши */
  var running = false, visible = true, raf = 0, last = 0;

  /* состояние полёта */
  var leg = { a: 0, b: 1, p: 0, dur: 4, wait: 0 };   /* p: 0..1 вдоль дуги; wait: пауза в аэропорту */
  var cursor = 0, queued = -1, arriveAt = -99, tAcc = 0, hot = -1;
  var legGeo = null;

  function view() {
    if (W < 700) return { lon0: -96, lon1: 52, latT: 74, latB: -8 };
    if (W < 960) return { lon0: -132, lon1: 78, latT: 76, latB: -40 };
    return { lon0: -180, lon1: 180, latT: D.meta.latTop, latB: D.meta.latBot };
  }
  function proj(lon, lat) { return [ox + (lon - v.lon0) * S, oy + (v.latT - lat) * S]; }
  var v = view(), ox = 0, oy = 0;

  function resize() {
    W = cv.clientWidth; H = cv.clientHeight;
    if (!W || !H) return;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    base.width = cv.width; base.height = cv.height;
    narrow = W < 700;
    v = view();
    S = Math.min(W / (v.lon1 - v.lon0), H / (v.latT - v.latB));
    ox = (W - (v.lon1 - v.lon0) * S) / 2; oy = (H - (v.latT - v.latB) * S) / 2;
    R = Math.max(.9, D.meta.step * S * .30);

    /* точки суши → экранные координаты */
    var arr = [], st = D.meta.step;
    for (var r = 0; r < D.rows.length; r++) {
      var lat = D.meta.latTop - (r + .5) * st, y = oy + (v.latT - lat) * S;
      if (y < -R || y > H + R) continue;
      var runs = D.rows[r];
      for (var k = 0; k < runs.length; k += 2) {
        for (var c = runs[k]; c < runs[k] + runs[k + 1]; c++) {
          var lon = -180 + (c + .5) * st, x = ox + (lon - v.lon0) * S;
          if (x < -R || x > W + R) continue;
          arr.push(x, y);
        }
      }
    }
    dots = new Float32Array(arr); nd = arr.length / 2;

    bx.setTransform(dpr, 0, 0, dpr, 0, 0);
    bx.clearRect(0, 0, W, H);
    bx.fillStyle = "rgba(255,255,255,.2)";
    bx.beginPath();
    for (var i = 0; i < nd; i++) { var px = dots[i * 2], py = dots[i * 2 + 1]; bx.moveTo(px + R, py); bx.arc(px, py, R, 0, TAU); }
    bx.fill();

    pts = SERVERS.map(function (s) { return proj(s.lon, s.lat); });
    legGeo = geo(leg.a, leg.b);
    if (!running) draw(0);
  }

  /* дуга между двумя серверами (квадратичная кривая, выгнутая «вверх») */
  function geo(a, b) {
    var A = pts[a], B = pts[b], dx = B[0] - A[0], dy = B[1] - A[1], d = Math.sqrt(dx * dx + dy * dy) || 1;
    var nx = dy / d, ny = -dx / d; if (ny > 0) { nx = -nx; ny = -ny; }
    var lift = d * .3;
    return { ax: A[0], ay: A[1], cx: (A[0] + B[0]) / 2 + nx * lift, cy: (A[1] + B[1]) / 2 + ny * lift, bx: B[0], by: B[1], d: d };
  }
  function at(g, p) {
    var q = 1 - p;
    return [q * q * g.ax + 2 * q * p * g.cx + p * p * g.bx, q * q * g.ay + 2 * q * p * g.cy + p * p * g.by];
  }
  function tan(g, p) {
    var q = 1 - p;
    return Math.atan2(2 * q * (g.cy - g.ay) + 2 * p * (g.by - g.cy), 2 * q * (g.cx - g.ax) + 2 * p * (g.bx - g.cx));
  }
  function setLeg(a, b) {
    leg.a = a; leg.b = b; leg.p = 0; legGeo = geo(a, b);
    leg.dur = Math.max(1.7, Math.min(5.5, legGeo.d / (W * .13)));
  }

  function nextTarget() {
    if (queued >= 0 && queued !== leg.b) { var q = queued; queued = -1; var i = ROUTE.indexOf(q); if (i >= 0) cursor = i; return q; }
    queued = -1;
    cursor = (cursor + 1) % ROUTE.length;
    return ROUTE[cursor];
  }
  function fly(i) {
    hot = i; queued = i;
    if (leg.wait > 0) leg.wait = 0;
    markBtn();
  }
  function markBtn() { btns.forEach(function (b, i) { b.classList.toggle("on", i === hot); }); }
  function say(a, b) {
    if (!now) return;
    now.innerHTML = "Маршрут: <b>" + SERVERS[a].n + "</b> → <b>" + SERVERS[b].n + "</b>";
  }

  /* ---------- отрисовка ---------- */
  function drawPlane(x, y, ang, sc) {
    cx.save(); cx.translate(x, y); cx.rotate(ang); cx.scale(sc, sc);
    cx.shadowColor = "rgba(255,90,0,.9)"; cx.shadowBlur = 14;
    cx.fillStyle = "#fff";
    cx.beginPath();
    /* силуэт самолёта, нос направлен вправо */
    cx.moveTo(11, 0);
    cx.lineTo(3, 2.2); cx.lineTo(-1, 10); cx.lineTo(-4, 10); cx.lineTo(-2.4, 2.6);
    cx.lineTo(-8, 1.8); cx.lineTo(-10.5, 4.6); cx.lineTo(-12.5, 4.6); cx.lineTo(-11.4, 0);
    cx.lineTo(-12.5, -4.6); cx.lineTo(-10.5, -4.6); cx.lineTo(-8, -1.8); cx.lineTo(-2.4, -2.6);
    cx.lineTo(-4, -10); cx.lineTo(-1, -10); cx.lineTo(3, -2.2);
    cx.closePath(); cx.fill();
    cx.restore();
  }

  function label(i, t) {
    var s = SERVERS[i], side = (narrow && s.sideN) || s.side, p = pts[i], on = i === leg.b && leg.wait > 0 || i === hot;
    var txt = narrow ? s.c : s.c + " · " + s.city;
    cx.font = (narrow ? "800 9px" : "700 11px") + ' "Unbounded","Manrope",sans-serif';
    var w = cx.measureText(txt).width, pad = 6, gap = on ? 14 : 11, x = p[0], y = p[1], bw = w + pad * 2, bh = narrow ? 16 : 20;
    var bxp = x - bw / 2, byp = y - gap - bh;
    if (side === "l") { bxp = x - gap - bw; byp = y - bh / 2; }
    else if (side === "r") { bxp = x + gap; byp = y - bh / 2; }
    else if (side === "b") { bxp = x - bw / 2; byp = y + gap; }
    bxp = Math.max(4, Math.min(W - bw - 4, bxp));
    cx.fillStyle = on ? "rgba(255,90,0,.95)" : "rgba(10,10,13,.82)";
    cx.strokeStyle = on ? "rgba(255,150,90,1)" : "rgba(255,255,255,.22)";
    cx.lineWidth = 1;
    cx.beginPath();
    if (cx.roundRect) cx.roundRect(bxp, byp, bw, bh, 4); else cx.rect(bxp, byp, bw, bh);
    cx.fill(); cx.stroke();
    cx.fillStyle = "#fff"; cx.textBaseline = "middle"; cx.textAlign = "left";
    cx.fillText(txt, bxp + pad, byp + bh / 2 + .5);
  }

  function draw(dt) {
    tAcc += dt;
    var t = tAcc;
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx.clearRect(0, 0, W, H);
    cx.drawImage(base, 0, 0, W, H);

    /* положение самолёта */
    var pos = at(legGeo, leg.p), ang = tan(legGeo, leg.p);
    var px = pos[0], py = pos[1];

    /* подсветка суши: оранжевое сияние вокруг самолёта и серверов */
    var rad = Math.max(46, S * 12), rad2 = rad * rad, r2 = rad * .55;
    cx.fillStyle = "rgba(255,120,40,.95)";
    var b1 = [], b2 = [];
    for (var i = 0; i < nd; i++) {
      var x = dots[i * 2], y = dots[i * 2 + 1], dx = x - px, dy = y - py, d2 = dx * dx + dy * dy;
      if (d2 < rad2) { (d2 < rad2 * .3 ? b1 : b2).push(x, y); continue; }
      for (var m = 0; m < pts.length; m++) {
        var ex = x - pts[m][0], ey = y - pts[m][1];
        if (ex * ex + ey * ey < r2 * r2 * .5) { b2.push(x, y); break; }
      }
    }
    cx.globalAlpha = .55; cx.beginPath();
    for (i = 0; i < b2.length; i += 2) { cx.moveTo(b2[i] + R * 1.1, b2[i + 1]); cx.arc(b2[i], b2[i + 1], R * 1.1, 0, TAU); }
    cx.fill();
    cx.globalAlpha = 1; cx.beginPath();
    for (i = 0; i < b1.length; i += 2) { cx.moveTo(b1[i] + R * 1.3, b1[i + 1]); cx.arc(b1[i], b1[i + 1], R * 1.3, 0, TAU); }
    cx.fill();

    /* маршрут: бледные пунктирные дуги между всеми точками */
    cx.save();
    cx.setLineDash([3, 5]); cx.lineWidth = 1; cx.strokeStyle = "rgba(255,255,255,.2)";
    for (var k = 0; k < ROUTE.length; k++) {
      var g = geo(ROUTE[k], ROUTE[(k + 1) % ROUTE.length]);
      cx.beginPath(); cx.moveTo(g.ax, g.ay); cx.quadraticCurveTo(g.cx, g.cy, g.bx, g.by); cx.stroke();
    }
    cx.restore();

    /* светящийся след за самолётом */
    if (leg.wait <= 0 || leg.p > 0) {
      var p0 = Math.max(0, leg.p - .42), N = 22, prev = at(legGeo, p0);
      cx.lineCap = "round";
      for (var n = 1; n <= N; n++) {
        var pp = p0 + (leg.p - p0) * n / N, cur = at(legGeo, pp), f = n / N;
        cx.strokeStyle = "rgba(255,110,30," + (f * f * .95).toFixed(3) + ")";
        cx.lineWidth = 1 + f * 2.4;
        cx.beginPath(); cx.moveTo(prev[0], prev[1]); cx.lineTo(cur[0], cur[1]); cx.stroke();
        prev = cur;
      }
    }

    /* точки серверов */
    for (var j = 0; j < pts.length; j++) {
      var P = pts[j], act = (j === leg.b && leg.wait > 0) || j === hot;
      var ph = (t * .7 + j * .37) % 1, rr = 4 + ph * (act ? 22 : 15);
      cx.strokeStyle = "rgba(255,90,0," + ((1 - ph) * (act ? .75 : .45)).toFixed(3) + ")"; cx.lineWidth = 1.4;
      cx.beginPath(); cx.arc(P[0], P[1], rr, 0, TAU); cx.stroke();
      cx.fillStyle = "#ff5a00"; cx.shadowColor = "rgba(255,90,0,.9)"; cx.shadowBlur = 12;
      cx.beginPath(); cx.arc(P[0], P[1], act ? 5.2 : 3.8, 0, TAU); cx.fill(); cx.shadowBlur = 0;
      cx.fillStyle = "#fff"; cx.beginPath(); cx.arc(P[0], P[1], 1.4, 0, TAU); cx.fill();
    }
    for (j = 0; j < pts.length; j++) label(j, t);

    drawPlane(px, py, ang, narrow ? .85 : 1.1);
  }

  function step(dt) {
    if (leg.wait > 0) {
      leg.wait -= dt;
      if (leg.wait <= 0) { leg.wait = 0; var nx = nextTarget(); setLeg(leg.b, nx); say(leg.a, leg.b); }
      return;
    }
    leg.p += dt / leg.dur;
    if (leg.p >= 1) {
      leg.p = 1; leg.wait = .9; arriveAt = tAcc;
      if (hot === leg.b) { setTimeout(function () { hot = -1; markBtn(); }, 1600); }
    }
  }

  function frame(ts) {
    if (!running) return;
    var dt = Math.min(.05, (ts - last) / 1000 || 0); last = ts;
    step(dt); draw(dt);
    raf = requestAnimationFrame(frame);
  }
  function start() { if (running || reduce || !visible || doc.hidden) return; running = true; last = performance.now(); raf = requestAnimationFrame(frame); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  /* клик по точке на карте */
  function pick(e) {
    var r = cv.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top, best = -1, bd = 26 * 26;
    for (var i = 0; i < pts.length; i++) { var dx = pts[i][0] - x, dy = pts[i][1] - y, d = dx * dx + dy * dy; if (d < bd) { bd = d; best = i; } }
    return best;
  }
  cv.addEventListener("click", function (e) { var i = pick(e); if (i >= 0) fly(i); });
  cv.addEventListener("mousemove", function (e) { cv.style.cursor = pick(e) >= 0 ? "pointer" : ""; });

  window.addEventListener("resize", function () { resize(); });
  doc.addEventListener("visibilitychange", function () { if (doc.hidden) stop(); else start(); });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { visible = es[0].isIntersecting; if (visible) start(); else stop(); }, { rootMargin: "120px" }).observe(cv);
  }
  var go = function () {
    resize();
    setLeg(ROUTE[0], ROUTE[1]); cursor = 1; say(leg.a, leg.b);
    if (reduce) { leg.p = .5; draw(0); } else { start(); }
  };
  if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(go); else go();
})();
