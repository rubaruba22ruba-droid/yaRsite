/* YarVpn — стеклянный 3D-глобус (canvas 2D, без библиотек).
   Суша — точки на сфере Фибоначчи по сетке Natural Earth (assets/js/mapdata.js). Узлы и дуги — только оформление «сети»:
   на глобусе нет подписей и списка серверов (локации меняются — актуальный список всегда в боте).
   Тянется мышью/пальцем, продолжает вращаться сам, спит, когда не виден. */
(function () {
  "use strict";
  var M = window.YARVPN_MAP;
  if (!M) return;
  var doc = document, PI = Math.PI, TAU = PI * 2, RAD = PI / 180;
  var reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var hasIO = "IntersectionObserver" in window;

  /* ---------- суша ---------- */
  var cols = M.cols, rows = M.rows, runs = M.rle.split(","), mask = new Uint8Array(cols * rows), pos = 0, val = 0, i;
  for (i = 0; i < runs.length; i++) { var n = parseInt(runs[i], 36); if (val) mask.fill(1, pos, pos + n); pos += n; val ^= 1; }
  function my(lat) { return Math.log(Math.tan(PI / 4 + lat * RAD / 2)); }
  var yTop = my(M.latTop), cellRad = TAU / cols;
  function isLand(lat, lon) {
    if (lat > M.latTop || lat < M.latBot) return false;
    var x = ((lon + 180) / 360 * cols) | 0, y = ((yTop - my(lat)) / cellRad) | 0;
    if (x < 0) x += cols; else if (x >= cols) x -= cols;
    return y >= 0 && y < rows && mask[y * cols + x] === 1;
  }
  var LX = [], LY = [], LZ = [], GOLD = PI * (3 - Math.sqrt(5)), NP = 24000;
  for (i = 0; i < NP; i++) {
    var yy = 1 - 2 * (i + 0.5) / NP, rr = Math.sqrt(1 - yy * yy), th = GOLD * i, px = Math.cos(th) * rr, pz = Math.sin(th) * rr;
    if (isLand(Math.asin(yy) / RAD, Math.atan2(px, pz) / RAD)) { LX.push(px); LY.push(yy); LZ.push(pz); }
  }
  var LN = LX.length, PX = new Float32Array(LX), PY = new Float32Array(LY), PZ = new Float32Array(LZ);
  LX = LY = LZ = null;
  function vec(lat, lon) { var c = Math.cos(lat * RAD); return [c * Math.sin(lon * RAD), Math.sin(lat * RAD), c * Math.cos(lon * RAD)]; }
  var GRID = [];
  (function () {
    var lon, lat, a, line;
    for (lon = -180; lon < 180; lon += 30) { line = []; for (lat = -84; lat <= 84; lat += 6) { a = vec(lat, lon); line.push(a[0], a[1], a[2]); } GRID.push(new Float32Array(line)); }
    for (lat = -60; lat <= 60; lat += 30) { line = []; for (lon = -180; lon <= 180; lon += 6) { a = vec(lat, lon); line.push(a[0], a[1], a[2]); } GRID.push(new Float32Array(line)); }
  })();

  /* узлы сети (без подписей — просто «огни» на карте) */
  var NODE_LL = [[40.7, -74], [51.5, -0.1], [52.5, 13.4], [48.9, 2.3], [55.7, 37.6], [25.2, 55.3], [19.1, 72.9], [1.35, 103.8], [35.7, 139.7], [-33.9, 151.2], [-23.5, -46.6], [37.8, -122.4], [60.2, 24.9], [41, 28.9], [30, 31.2], [-26.2, 28], [22.3, 114.2], [45.5, -73.6]];
  var NODES = NODE_LL.map(function (p, idx) { var v = vec(p[0], p[1]); return { x: v[0], y: v[1], z: v[2], lat: p[0], lon: p[1], ph: idx * 0.71, sx: 0, sy: 0, sz: -1 }; });

  var sprites = {};
  function sprite(rgb) {
    if (sprites[rgb]) return sprites[rgb];
    var c = doc.createElement("canvas"); c.width = c.height = 64; var g = c.getContext("2d"), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    r.addColorStop(0, "rgba(" + rgb + ",.95)"); r.addColorStop(.25, "rgba(" + rgb + ",.42)"); r.addColorStop(1, "rgba(" + rgb + ",0)");
    g.fillStyle = r; g.fillRect(0, 0, 64, 64); return (sprites[rgb] = c);
  }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function wrapA(a) { return a - TAU * Math.round(a / TAU); }

  function Globe(root) {
    var cv = doc.createElement("canvas"); cv.setAttribute("aria-hidden", "true"); root.insertBefore(cv, root.firstChild);
    var ctx = cv.getContext("2d");
    var yaw = 20 * RAD, pitch = 24 * RAD, vyaw = 0, vpitch = 0, t = 0, userAt = -99;
    var W = 0, H = 0, dpr = 1, cx = 0, cy = 0, Rb = 100, running = false, visible = !hasIO, last = 0;
    var dragging = false, lx = 0, ly = 0, lt = 0, pxm = 0, pym = 0;
    var arcs = [], nextSpawn = 0, rings = [];
    var BUF = [], b;
    for (b = 0; b < 5; b++) BUF.push({ a: new Float32Array(LN * 3), n: 0 });
    var COL = ["rgba(150,190,255,.34)", "rgba(190,220,255,.55)", "rgba(228,240,255,.80)", "rgba(255,255,255,.96)", "rgba(200,220,255,.10)"];
    var cyw, syw, cp, sp, _x = 0, _y = 0, _z = 0;
    function rot(x, y, z) { var x1 = x * cyw - z * syw, z1 = x * syw + z * cyw; _x = x1; _y = y * cp - z1 * sp; _z = y * sp + z1 * cp; }

    function size() {
      var rw = Math.max(2, root.clientWidth), rh = Math.max(2, root.clientHeight);
      W = Math.round(rw * 1.24); H = Math.round(rh * 1.24);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2; cy = H / 2; Rb = Math.min(rw, rh) * 0.4;
      if (!running) draw();
    }

    function spawn() {
      var a = (Math.random() * NODES.length) | 0, c = (Math.random() * NODES.length) | 0;
      if (a === c) return;
      var A = NODES[a], B2 = NODES[c], dot = clamp(A.x * B2.x + A.y * B2.y + A.z * B2.z, -1, 1), om = Math.acos(dot);
      if (om < 0.5) return;
      var N = 48, so = Math.sin(om) || 1, h = 0.10 + 0.22 * om / PI, pts = new Float32Array((N + 1) * 3), j;
      for (j = 0; j <= N; j++) {
        var s = j / N, w1 = Math.sin((1 - s) * om) / so, w2 = Math.sin(s * om) / so, lift = 1 + h * Math.sin(PI * s);
        pts[j * 3] = (w1 * A.x + w2 * B2.x) * lift; pts[j * 3 + 1] = (w1 * A.y + w2 * B2.y) * lift; pts[j * 3 + 2] = (w1 * A.z + w2 * B2.z) * lift;
      }
      arcs.push({ pts: pts, N: N, born: t, dur: 2.6 + Math.random() * 1.4, a: A, b: B2 });
    }

    function draw() {
      var R = Rb, j, g, k;
      cyw = Math.cos(yaw); syw = Math.sin(yaw); cp = Math.cos(pitch + pym * 0.12); sp = Math.sin(pitch + pym * 0.12);
      var X0 = cx + pxm * 8, Y0 = cy;
      ctx.clearRect(0, 0, W, H);

      /* атмосфера + стеклянный корпус + кромка */
      g = ctx.createRadialGradient(X0, Y0, R * 0.94, X0, Y0, R * 1.26);
      g.addColorStop(0, "rgba(255,255,255,.34)"); g.addColorStop(.35, "rgba(190,220,255,.12)"); g.addColorStop(1, "rgba(160,200,255,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(X0, Y0, R * 1.26, 0, TAU); ctx.fill();
      g = ctx.createRadialGradient(X0 - R * 0.34, Y0 - R * 0.38, R * 0.05, X0, Y0, R);
      g.addColorStop(0, "rgba(255,255,255,.34)"); g.addColorStop(.5, "rgba(120,170,235,.20)"); g.addColorStop(1, "rgba(30,70,150,.30)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(X0, Y0, R, 0, TAU); ctx.fill();
      g = ctx.createRadialGradient(X0, Y0, R * 0.74, X0, Y0, R);
      g.addColorStop(0, "rgba(255,255,255,0)"); g.addColorStop(1, "rgba(255,255,255,.55)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(X0, Y0, R, 0, TAU); ctx.fill();

      /* сетка */
      ctx.lineWidth = 1; ctx.strokeStyle = "rgba(255,255,255,.16)"; ctx.beginPath();
      for (j = 0; j < GRID.length; j++) {
        var ln = GRID[j], open = false;
        for (k = 0; k < ln.length; k += 3) {
          rot(ln[k], ln[k + 1], ln[k + 2]);
          if (_z > 0) { var gx = X0 + R * _x, gy = Y0 - R * _y; if (open) ctx.lineTo(gx, gy); else { ctx.moveTo(gx, gy); open = true; } } else open = false;
        }
      }
      ctx.stroke();

      /* суша: точки по освещённости */
      for (b = 0; b < 5; b++) BUF[b].n = 0;
      for (j = 0; j < LN; j++) {
        var x = PX[j], y = PY[j], z = PZ[j], x1 = x * cyw - z * syw, z1 = x * syw + z * cyw, y2 = y * cp - z1 * sp, z2 = y * sp + z1 * cp, bk, sz;
        if (z2 < 0) { bk = 4; sz = 0.9; }
        else { var sh = -0.42 * x1 + 0.52 * y2 + 0.74 * z2; bk = sh < 0.06 ? 0 : sh < 0.42 ? 1 : sh < 0.74 ? 2 : 3; sz = 0.85 + 0.55 * z2; }
        var bf = BUF[bk], q = bf.n * 3; bf.a[q] = X0 + R * x1; bf.a[q + 1] = Y0 - R * y2; bf.a[q + 2] = sz; bf.n++;
      }
      var ds = clamp(R / 185, 0.9, 2.1);
      for (b = 0; b < 5; b++) {
        var bb = BUF[b], arr = bb.a, m = bb.n * 3; if (!bb.n) continue;
        ctx.fillStyle = COL[b]; ctx.beginPath();
        for (j = 0; j < m; j += 3) { var d = arr[j + 2] * ds; ctx.rect(arr[j] - d / 2, arr[j + 1] - d / 2, d, d); }
        ctx.fill();
      }

      /* узлы */
      for (j = 0; j < NODES.length; j++) {
        var nd = NODES[j]; rot(nd.x, nd.y, nd.z); nd.sx = X0 + R * _x; nd.sy = Y0 - R * _y; nd.sz = _z;
        if (_z > 0.02) {
          var fa = clamp(_z / 0.3, 0, 1), pulse = 0.5 + 0.5 * Math.sin(t * 2 + nd.ph);
          ctx.globalAlpha = fa; var gr = 12 + 5 * pulse; ctx.drawImage(sprite("255,207,122"), nd.sx - gr, nd.sy - gr, gr * 2, gr * 2);
          ctx.fillStyle = "#fff7e0"; ctx.beginPath(); ctx.arc(nd.sx, nd.sy, 2.4, 0, TAU); ctx.fill(); ctx.globalAlpha = 1;
        }
      }

      /* дуги: растут от узла к узлу и гаснут */
      var ai, p;
      for (ai = arcs.length - 1; ai >= 0; ai--) {
        var ar = arcs[ai], age = (t - ar.born) / ar.dur;
        if (age > 1.5) { arcs.splice(ai, 1); continue; }
        var head = Math.min(1, age) * ar.N, tail = Math.max(0, (age - 0.6)) / 0.9 * ar.N, fade = age < 1 ? 1 : 1 - (age - 1) / 0.5;
        var open2 = false, prev = null;
        ctx.lineCap = "round";
        for (p = Math.floor(tail); p <= Math.floor(head); p++) {
          rot(ar.pts[p * 3], ar.pts[p * 3 + 1], ar.pts[p * 3 + 2]);
          var vis = _z > 0 || (_x * _x + _y * _y) > 1, ax = X0 + R * _x, ay = Y0 - R * _y;
          if (vis && prev && open2) {
            var f = (p - tail) / Math.max(1, head - tail);
            ctx.strokeStyle = "rgba(255," + ((200 + 40 * f) | 0) + "," + ((120 + 100 * f) | 0) + "," + (0.15 + 0.8 * f * fade).toFixed(3) + ")";
            ctx.lineWidth = 0.8 + 1.8 * f; ctx.beginPath(); ctx.moveTo(prev[0], prev[1]); ctx.lineTo(ax, ay); ctx.stroke();
          }
          open2 = vis; prev = vis ? [ax, ay] : null;
          if (p === Math.floor(head) && vis && age < 1) { ctx.drawImage(sprite("255,236,190"), ax - 8, ay - 8, 16, 16); }
        }
        if (age >= 1 && !ar.hit) { ar.hit = true; rings.push({ n: ar.b, born: t }); }
      }
      for (j = rings.length - 1; j >= 0; j--) {
        var rg = rings[j], pr = (t - rg.born) / 1.8; if (pr > 1) { rings.splice(j, 1); continue; }
        var nd2 = rg.n; if (nd2.sz > 0.02) {
          var rad = (10 + 34 * pr) * (R / 260);
          ctx.strokeStyle = "rgba(255,225,160," + ((1 - pr) * 0.7).toFixed(3) + ")"; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.arc(nd2.sx, nd2.sy, rad, 0, TAU); ctx.stroke();
        }
      }
    }

    function step(dt) {
      t += dt;
      if (t > nextSpawn) { spawn(); nextSpawn = t + 0.7 + Math.random() * 0.9; }
      var idle = t - userAt > 2.4;
      if (!dragging) {
        yaw += vyaw * dt; pitch += vpitch * dt; var dm = Math.exp(-dt * 2.4); vyaw *= dm; vpitch *= dm;
        if (idle) { yaw -= 0.14 * dt; pitch += (24 * RAD - pitch) * (1 - Math.exp(-dt * 0.6)); }
      }
      pitch = clamp(pitch, -0.95, 1.35);
      if (yaw > 100 || yaw < -100) yaw = wrapA(yaw);
    }
    function loop(ts) {
      if (!running) return;
      var dt = Math.min((ts - last) / 1000, 0.05); last = ts;
      step(dt); draw();
      requestAnimationFrame(loop);
    }
    function start() { if (running || reduce || !visible || doc.hidden) return; running = true; last = performance.now(); requestAnimationFrame(loop); }
    function stop() { running = false; }

    root.addEventListener("pointerdown", function (e) {
      if (e.button > 0) return;
      dragging = true; lx = e.clientX; ly = e.clientY; lt = performance.now(); vyaw = vpitch = 0; userAt = t; root.classList.add("grab");
      try { root.setPointerCapture(e.pointerId); } catch (er) { /* ignore */ }
    });
    root.addEventListener("pointermove", function (e) {
      if (dragging) {
        var now = performance.now(), dt = Math.max(0.008, (now - lt) / 1000), dx = e.clientX - lx, dy = e.clientY - ly, R = Rb;
        yaw -= dx / R * 1.1; pitch += dy / R * 1.1; pitch = clamp(pitch, -0.95, 1.35);
        vyaw = clamp(0.7 * vyaw + 0.3 * (-dx / R * 1.1 / dt), -6, 6); vpitch = clamp(0.7 * vpitch + 0.3 * (dy / R * 1.1 / dt), -4, 4);
        lx = e.clientX; ly = e.clientY; lt = now; userAt = t; if (!running) draw();
      } else if (e.pointerType === "mouse") {
        var r = root.getBoundingClientRect(); pxm = (e.clientX - r.left) / Math.max(1, r.width) - 0.5; pym = (e.clientY - r.top) / Math.max(1, r.height) - 0.5;
      }
    });
    var up = function () { if (!dragging) return; dragging = false; root.classList.remove("grab"); userAt = t; if (performance.now() - lt > 90) vyaw = vpitch = 0; };
    root.addEventListener("pointerup", up); root.addEventListener("pointercancel", up); root.addEventListener("lostpointercapture", up);
    root.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse" && !dragging) { pxm = 0; pym = 0; } });

    if (hasIO) new IntersectionObserver(function (es) { es.forEach(function (e) { visible = e.isIntersecting; if (visible) start(); else stop(); }); }, { threshold: 0.01 }).observe(root);
    doc.addEventListener("visibilitychange", function () { if (doc.hidden) stop(); else start(); });
    if ("ResizeObserver" in window) new ResizeObserver(size).observe(root); else window.addEventListener("resize", size);
    size(); t = 3;
    var k2; for (k2 = 0; k2 < 3; k2++) spawn();
    if (reduce) draw(); else { visible = visible || !hasIO; start(); }
    return { state: function () { return { yaw: yaw, pitch: pitch, land: LN }; } };
  }

  var inst = [];
  Array.prototype.forEach.call(doc.querySelectorAll("[data-globe]"), function (el) { inst.push(Globe(el)); });
  window.YVGlobe = { instances: inst };
})();
