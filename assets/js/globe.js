/* YarVpn — 3D-глобус со всеми серверами (canvas 2D, без библиотек).
   Суша — точки на сфере Фибоначчи, отфильтрованные по сетке Natural Earth (assets/js/mapdata.js).
   Серверы берутся из <ul id="srvList"> в index.html (data-lat / data-lon / data-dir / data-main) — правится только HTML.
   Что есть на глобусе: страны и города-столицы (из проекта), связи между узлами. Пинга, аптайма и нагрузки нет и не выдумывается.
   Режимы (data-globe): "hero" — крутится, «летит» к серверу вслед за демо-подключением; "main" — большой, с выбором из списка;
   "mini" — маленький вращающийся значок в карточке. Двигается только когда виден на экране. */
(function () {
  "use strict";

  var M = window.YARVPN_MAP;
  if (!M) return;
  var doc = document, PI = Math.PI, TAU = PI * 2, RAD = PI / 180;
  var reduce = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  var hasIO = "IntersectionObserver" in window;
  var coarse = !!(window.matchMedia && window.matchMedia("(pointer:coarse)").matches);

  /* ---------- суша: RLE → маска сетки Меркатора ---------- */
  var cols = M.cols, rows = M.rows, runs = M.rle.split(","), mask = new Uint8Array(cols * rows), pos = 0, val = 0, i, k;
  for (i = 0; i < runs.length; i++) { var n = parseInt(runs[i], 36); if (val) mask.fill(1, pos, pos + n); pos += n; val ^= 1; }
  function my(lat) { return Math.log(Math.tan(PI / 4 + lat * RAD / 2)); }
  var yTop = my(M.latTop), cellRad = TAU / cols;
  function isLand(lat, lon) {
    if (lat > M.latTop || lat < M.latBot) return false;
    var x = ((lon + 180) / 360 * cols) | 0, y = ((yTop - my(lat)) / cellRad) | 0;
    if (x < 0) x += cols; else if (x >= cols) x -= cols;
    return y >= 0 && y < rows && mask[y * cols + x] === 1;
  }

  /* точки суши на сфере (единичные векторы) */
  var LX = [], LY = [], LZ = [], GOLD = PI * (3 - Math.sqrt(5)), NP = 24000;
  for (i = 0; i < NP; i++) {
    var yy = 1 - 2 * (i + 0.5) / NP, rr = Math.sqrt(1 - yy * yy), th = GOLD * i, px = Math.cos(th) * rr, pz = Math.sin(th) * rr;
    if (isLand(Math.asin(yy) / RAD, Math.atan2(px, pz) / RAD)) { LX.push(px); LY.push(yy); LZ.push(pz); }
  }
  var LN = LX.length, PX = new Float32Array(LX), PY = new Float32Array(LY), PZ = new Float32Array(LZ);
  LX = LY = LZ = null;

  /* сетка параллелей и меридианов */
  var GRID = [];
  function vec(lat, lon) { var c = Math.cos(lat * RAD); return [c * Math.sin(lon * RAD), Math.sin(lat * RAD), c * Math.cos(lon * RAD)]; }
  (function () {
    var lon, lat, a, line;
    for (lon = -180; lon < 180; lon += 30) { line = []; for (lat = -84; lat <= 84; lat += 6) { a = vec(lat, lon); line.push(a[0], a[1], a[2]); } GRID.push(new Float32Array(line)); }
    for (lat = -60; lat <= 60; lat += 30) { line = []; for (lon = -180; lon <= 180; lon += 6) { a = vec(lat, lon); line.push(a[0], a[1], a[2]); } GRID.push(new Float32Array(line)); }
  })();

  /* ---------- сервера из HTML ---------- */
  var BASE = [];
  (function () {
    var list = doc.getElementById("srvList"); if (!list) return;
    Array.prototype.forEach.call(list.querySelectorAll(".srv"), function (li) {
      var lat = +li.getAttribute("data-lat"), lon = +li.getAttribute("data-lon"), a = vec(lat, lon);
      BASE.push({
        id: li.getAttribute("data-id"), code: li.getAttribute("data-code"), city: li.getAttribute("data-city"), country: li.getAttribute("data-country"),
        lat: lat, lon: lon, dir: li.getAttribute("data-dir") || "r", main: li.getAttribute("data-main") === "1", li: li, btn: li.querySelector(".srv-btn"),
        x: a[0], y: a[1], z: a[2]
      });
    });
  })();
  if (!BASE.length) return;
  var HUB = 0; BASE.forEach(function (s, idx) { if (s.main) HUB = idx; });

  /* ---------- спрайты свечения ---------- */
  var sprites = {};
  function sprite(rgb) {
    if (sprites[rgb]) return sprites[rgb];
    var c = doc.createElement("canvas"); c.width = c.height = 64; var g = c.getContext("2d"), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    r.addColorStop(0, "rgba(" + rgb + ",.95)"); r.addColorStop(.25, "rgba(" + rgb + ",.42)"); r.addColorStop(1, "rgba(" + rgb + ",0)");
    g.fillStyle = r; g.fillRect(0, 0, 64, 64); return (sprites[rgb] = c);
  }
  var C_HUB = "255,150,70", C_SRV = "90,225,255";

  function wrapA(a) { return a - TAU * Math.round(a / TAU); }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function ease(p) { return 1 - Math.pow(1 - p, 3); }

  /* ================= глобус ================= */
  function Globe(root, mode) {
    var mini = mode === "mini", hero = mode === "hero", main = mode === "main";
    var cv = doc.createElement("canvas"); cv.setAttribute("aria-hidden", "true"); root.insertBefore(cv, root.firstChild);
    var ctx = cv.getContext("2d");
    var labelsEl = null;
    var S = BASE.map(function (b) { var s = Object.create(b); s.sx = 0; s.sy = 0; s.sz = 0; s.lab = null; s.off = Math.random() * 3; return s; });
    var byId = {}; S.forEach(function (s) { byId[s.id] = s; });

    if (!mini) {
      labelsEl = doc.createElement("div"); labelsEl.className = "gl-labels"; labelsEl.setAttribute("aria-hidden", "true"); root.appendChild(labelsEl);
      S.forEach(function (s) {
        var el = doc.createElement("div"); el.className = "gl-lab d-" + s.dir + (s.main ? " main" : "");
        var inn = doc.createElement("span"); inn.className = "gl-in";
        var b = doc.createElement("b"); b.textContent = s.city; var sm = doc.createElement("small"); sm.textContent = s.code;
        inn.appendChild(sm); inn.appendChild(b); el.appendChild(inn); labelsEl.appendChild(el); s.lab = el; el._sid = s.id;
      });
    }

    /* дуги от основного узла ко всем остальным */
    var NA = 56, arcs = [];
    S.forEach(function (s, idx) {
      if (idx === HUB) return;
      var a = S[HUB], dot = clamp(a.x * s.x + a.y * s.y + a.z * s.z, -1, 1), om = Math.acos(dot), so = Math.sin(om) || 1, h = 0.09 + 0.20 * om / PI, pts = new Float32Array((NA + 1) * 3), j;
      for (j = 0; j <= NA; j++) {
        var t = j / NA, w1 = Math.sin((1 - t) * om) / so, w2 = Math.sin(t * om) / so, lift = 1 + h * Math.sin(PI * t);
        pts[j * 3] = (w1 * a.x + w2 * s.x) * lift; pts[j * 3 + 1] = (w1 * a.y + w2 * s.y) * lift; pts[j * 3 + 2] = (w1 * a.z + w2 * s.z) * lift;
      }
      arcs.push({ to: s, pts: pts, off: Math.random(), sp: 0.16 + om * 0.03 });
    });

    /* состояние камеры */
    var HOME = hero ? { yaw: 12 * RAD, pitch: 30 * RAD } : main ? { yaw: -22 * RAD, pitch: 40 * RAD } : { yaw: 15 * RAD, pitch: 26 * RAD };
    var yaw = HOME.yaw, pitch = HOME.pitch, zoom = 1, vyaw = 0, vpitch = 0;
    var focusId = null, fy = 0, fp = 0, fz = 1, userAt = -99, t = 0, burstId = null, burstAt = -99, sel = null;
    var W = 0, H = 0, dpr = 1, cx = 0, cy = 0, Rb = 100, running = false, visible = !hasIO, last = 0;
    var dragging = false, lx = 0, ly = 0, lt = 0;
    var pxm = 0, pym = 0;   // лёгкий параллакс от курсора

    /* буферы точек по «освещённости» */
    var BUF = [], b;
    for (b = 0; b < 5; b++) BUF.push({ a: new Float32Array(LN * 3), n: 0 });
    var COL = ["rgba(96,88,224,.46)", "rgba(98,136,255,.66)", "rgba(84,196,255,.84)", "rgba(196,242,255,.97)", "rgba(120,108,245,.11)"];

    function size() {
      // размеры раскладки (getBoundingClientRect искажается 3D-анимацией появления); холст больше блока на 12% с каждой стороны —
      // чтобы при приближении шар и свечение атмосферы не обрезались краем блока
      var rw = Math.max(2, root.clientWidth), rh = Math.max(2, root.clientHeight);
      W = Math.round(rw * 1.24); H = Math.round(rh * 1.24);
      dpr = Math.min(window.devicePixelRatio || 1, mini ? 1.5 : 2);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2; cy = H / 2; Rb = Math.min(rw, rh) * (mini ? 0.44 : 0.4);
      if (!running) draw();
    }

    /* ---------- отрисовка кадра ---------- */
    var cyw, syw, cp, sp;
    var _x = 0, _y = 0, _z = 0;
    function rot(x, y, z) { var x1 = x * cyw - z * syw, z1 = x * syw + z * cyw; _x = x1; _y = y * cp - z1 * sp; _z = y * sp + z1 * cp; }

    function draw() {
      var R = Rb * zoom, j, s, g;
      cyw = Math.cos(yaw); syw = Math.sin(yaw); cp = Math.cos(pitch + pym * 0.1); sp = Math.sin(pitch + pym * 0.1);
      var ox = pxm * 6, oy = 0, X0 = cx + ox, Y0 = cy + oy;
      ctx.clearRect(0, 0, W, H);

      /* атмосфера, корпус, кромка */
      g = ctx.createRadialGradient(X0, Y0, R * 0.93, X0, Y0, R * 1.24);
      g.addColorStop(0, "rgba(112,130,255,.34)"); g.addColorStop(.4, "rgba(84,110,255,.11)"); g.addColorStop(1, "rgba(60,80,255,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(X0, Y0, R * 1.24, 0, TAU); ctx.fill();
      g = ctx.createRadialGradient(X0 - R * 0.32, Y0 - R * 0.36, R * 0.04, X0, Y0, R);
      g.addColorStop(0, "#1c2464"); g.addColorStop(.55, "#0c1238"); g.addColorStop(1, "#060820");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(X0, Y0, R, 0, TAU); ctx.fill();
      g = ctx.createRadialGradient(X0, Y0, R * 0.76, X0, Y0, R);
      g.addColorStop(0, "rgba(90,170,255,0)"); g.addColorStop(1, "rgba(130,205,255,.34)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(X0, Y0, R, 0, TAU); ctx.fill();

      /* координатная сетка */
      if (!mini) {
        ctx.lineWidth = 1; ctx.strokeStyle = "rgba(140,158,255,.11)"; ctx.beginPath();
        for (j = 0; j < GRID.length; j++) {
          var ln = GRID[j], open = false;
          for (k = 0; k < ln.length; k += 3) {
            rot(ln[k], ln[k + 1], ln[k + 2]);
            if (_z > 0) { var gx = X0 + R * _x, gy = Y0 - R * _y; if (open) ctx.lineTo(gx, gy); else { ctx.moveTo(gx, gy); open = true; } } else open = false;
          }
        }
        ctx.stroke();
      }

      /* точки суши — по «освещённости»; обратная сторона еле видна насквозь */
      for (b = 0; b < 5; b++) BUF[b].n = 0;
      for (j = 0; j < LN; j++) {
        var x = PX[j], y = PY[j], z = PZ[j], x1 = x * cyw - z * syw, z1 = x * syw + z * cyw, y2 = y * cp - z1 * sp, z2 = y * sp + z1 * cp, bk, sz;
        if (z2 < 0) { if (mini) continue; bk = 4; sz = 0.9; }
        else {
          var sh = -0.42 * x1 + 0.52 * y2 + 0.74 * z2;
          bk = sh < 0.06 ? 0 : sh < 0.42 ? 1 : sh < 0.74 ? 2 : 3; sz = 0.85 + 0.55 * z2;
        }
        var bf = BUF[bk], q = bf.n * 3; bf.a[q] = X0 + R * x1; bf.a[q + 1] = Y0 - R * y2; bf.a[q + 2] = sz; bf.n++;
      }
      var ds = clamp(R / 185, 0.9, 2.1);
      for (b = 0; b < 5; b++) {
        var bb = BUF[b], arr = bb.a, m = bb.n * 3; if (!bb.n) continue;
        ctx.fillStyle = COL[b]; ctx.beginPath();
        for (j = 0; j < m; j += 3) { var d = arr[j + 2] * ds; ctx.rect(arr[j] - d / 2, arr[j + 1] - d / 2, d, d); }
        ctx.fill();
      }

      /* положения серверов */
      for (j = 0; j < S.length; j++) { s = S[j]; rot(s.x, s.y, s.z); s.sx = X0 + R * _x; s.sy = Y0 - R * _y; s.sz = _z; }

      /* дуги: слабая линия + летящая «комета» */
      var ai, p, pts, seg;
      for (ai = 0; ai < arcs.length; ai++) {
        var arc = arcs[ai]; pts = arc.pts; var hot = sel && (arc.to.id === sel), open2 = false;
        ctx.lineWidth = hot ? 1.8 : 1.15; ctx.strokeStyle = hot ? "rgba(255,170,110,.7)" : "rgba(130,170,255,.34)"; ctx.beginPath();
        var proj = arc.proj || (arc.proj = new Float32Array((NA + 1) * 3));
        for (p = 0; p <= NA; p++) {
          rot(pts[p * 3], pts[p * 3 + 1], pts[p * 3 + 2]);
          var vis = _z > 0 || (_x * _x + _y * _y) > 1, ax = X0 + R * _x, ay = Y0 - R * _y;
          proj[p * 3] = ax; proj[p * 3 + 1] = ay; proj[p * 3 + 2] = vis ? 1 : 0;
          if (vis) { if (open2) ctx.lineTo(ax, ay); else { ctx.moveTo(ax, ay); open2 = true; } } else open2 = false;
        }
        ctx.stroke();
        if (!reduce) {
          var ph = (t * arc.sp + arc.off) % 1, head = ph * NA, TL = 12, rgb = hot ? C_HUB : C_SRV;
          for (seg = 0; seg < TL; seg++) {
            var i1 = Math.floor(head) - seg, i0 = i1 - 1; if (i0 < 0 || i1 > NA) continue;
            if (!proj[i0 * 3 + 2] || !proj[i1 * 3 + 2]) continue;
            var al = (1 - seg / TL); ctx.strokeStyle = "rgba(" + rgb + "," + (al * al * 0.95).toFixed(3) + ")"; ctx.lineWidth = 1.2 + al * 1.1;
            ctx.beginPath(); ctx.moveTo(proj[i0 * 3], proj[i0 * 3 + 1]); ctx.lineTo(proj[i1 * 3], proj[i1 * 3 + 1]); ctx.stroke();
          }
          var hi = Math.floor(head); if (hi >= 0 && hi <= NA && proj[hi * 3 + 2]) { ctx.drawImage(sprite(rgb), proj[hi * 3] - 7, proj[hi * 3 + 1] - 7, 14, 14); }
        }
      }

      /* маркеры: кольца по поверхности, свечение, ядро */
      for (j = 0; j < S.length; j++) {
        s = S[j]; if (s.sz < -0.08) continue;
        var isHub = s.main, front = s.sz > 0, rgb2 = isHub ? C_HUB : C_SRV, selNow = sel === s.id;
        if (front && !reduce) {
          var rings = isHub ? 2 : 1, rk;
          for (rk = 0; rk < rings; rk++) {
            var pp = ((t + s.off) / 3.2 + rk * 0.5) % 1, rho = pp * (mini ? 0.26 : 0.2), alp = Math.pow(1 - pp, 1.6) * 0.75;
            ring(s, rho, "rgba(" + rgb2 + "," + alp.toFixed(3) + ")", 1.3, X0, Y0, R);
          }
        }
        if (burstId === s.id || (burstId === "*" && isHub)) {
          var bp = (t - burstAt) / 1.6;
          if (bp >= 0 && bp < 1) { ring(s, ease(bp) * 0.42, "rgba(" + rgb2 + "," + ((1 - bp) * 0.9).toFixed(3) + ")", 2, X0, Y0, R); ring(s, ease(Math.max(0, bp - 0.18)) * 0.34, "rgba(255,255,255," + ((1 - bp) * 0.5).toFixed(3) + ")", 1.2, X0, Y0, R); }
        }
        var fa = clamp((s.sz + 0.08) / 0.3, 0, 1);
        ctx.globalAlpha = fa;
        var gr = (isHub ? 21 : 15) * (mini ? 0.6 : 1) * (selNow ? 1.35 : 1);
        ctx.drawImage(sprite(rgb2), s.sx - gr, s.sy - gr, gr * 2, gr * 2);
        ctx.fillStyle = isHub ? "#ffc9a0" : "#c8f8ff"; ctx.beginPath(); ctx.arc(s.sx, s.sy, (isHub ? 3.8 : 2.9) * (mini ? 0.7 : 1), 0, TAU); ctx.fill();
        if (!mini) { ctx.strokeStyle = "rgba(255,255,255,.85)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(s.sx, s.sy, isHub ? 6.4 : 5.2, 0, TAU); ctx.stroke(); }
        if (selNow) {
          ctx.strokeStyle = "rgba(" + rgb2 + ",.95)"; ctx.lineWidth = 1.3; ctx.setLineDash([4, 5]); ctx.lineDashOffset = -t * 14;
          ctx.beginPath(); ctx.arc(s.sx, s.sy, 12, 0, TAU); ctx.stroke(); ctx.setLineDash([]);
        }
        ctx.globalAlpha = 1;
      }

      /* подписи */
      if (labelsEl) {
        for (j = 0; j < S.length; j++) {
          s = S[j]; var la = clamp((s.sz - 0.1) / 0.28, 0, 1), el = s.lab;
          el.style.opacity = la.toFixed(2); el.style.transform = "translate3d(" + s.sx.toFixed(1) + "px," + s.sy.toFixed(1) + "px,0)";
          el.style.visibility = la < 0.02 ? "hidden" : "visible";
          el.classList.toggle("sel", sel === s.id);
        }
      }
    }

    /* кольцо на поверхности вокруг сервера: точки на сфере на угловом расстоянии rho */
    function ring(s, rho, style, lw, X0, Y0, R) {
      var ux = 0, uy = 1, uz = 0;
      if (Math.abs(s.y) > 0.96) { ux = 1; uy = 0; }
      var e1x = uy * s.z - uz * s.y, e1y = uz * s.x - ux * s.z, e1z = ux * s.y - uy * s.x, l = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z) || 1;
      e1x /= l; e1y /= l; e1z /= l;
      var e2x = s.y * e1z - s.z * e1y, e2y = s.z * e1x - s.x * e1z, e2z = s.x * e1y - s.y * e1x;
      var cr = Math.cos(rho), sr = Math.sin(rho), open = false, a, N = 36;
      ctx.strokeStyle = style; ctx.lineWidth = lw; ctx.beginPath();
      for (a = 0; a <= N; a++) {
        var an = a / N * TAU, ca = Math.cos(an) * sr, sa = Math.sin(an) * sr;
        rot(s.x * cr + e1x * ca + e2x * sa, s.y * cr + e1y * ca + e2y * sa, s.z * cr + e1z * ca + e2z * sa);
        if (_z > 0) { var qx = X0 + R * _x, qy = Y0 - R * _y; if (open) ctx.lineTo(qx, qy); else { ctx.moveTo(qx, qy); open = true; } } else open = false;
      }
      ctx.stroke();
    }

    /* ---------- физика камеры ---------- */
    function step(dt) {
      t += dt;
      var idle = t - userAt > 3.2;
      if (!dragging) {
        if (focusId) {
          var kk = 1 - Math.exp(-dt * 3.4);
          yaw += wrapA(fy - yaw) * kk; pitch += (fp - pitch) * kk; zoom += (fz - zoom) * kk; vyaw = vpitch = 0;
        } else {
          var kz = 1 - Math.exp(-dt * 2.4);
          yaw += vyaw * dt; pitch += vpitch * dt; var dm = Math.exp(-dt * 2.4); vyaw *= dm; vpitch *= dm;
          zoom += (1 - zoom) * kz;
          if (idle) {
            if (main) { yaw += (HOME.yaw + Math.sin(t * 0.22) * 0.30 - yaw) * (1 - Math.exp(-dt * 0.9)); pitch += (HOME.pitch - pitch) * (1 - Math.exp(-dt * 0.8)); }
            else { yaw -= (mini ? 0.32 : 0.15) * dt; pitch += (HOME.pitch - pitch) * (1 - Math.exp(-dt * 0.6)); }
          }
        }
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

    /* ---------- управление ---------- */
    var api = {
      el: root, servers: S,
      focus: function (id, o) {
        var s = byId[id]; if (!s) return;
        focusId = id; fy = s.lon * RAD; fp = clamp(s.lat * RAD - 0.02, -0.9, 1.2); fz = (o && o.zoom) || (hero ? 1.14 : 1.32); userAt = (o && o.soft) ? t - 2.5 : t;
        if (reduce) { yaw = fy; pitch = fp; zoom = fz; draw(); }
      },
      release: function () { focusId = null; userAt = t - 2; if (reduce) { yaw = HOME.yaw; pitch = HOME.pitch; zoom = 1; draw(); } },
      select: function (id) {
        if (sel === id) { sel = null; api.release(); } else { sel = id; api.focus(id); }
        if (api.onSelect) api.onSelect(sel);
        if (!running) draw();
      },
      setSel: function (id) { sel = id; if (!running) draw(); },
      burst: function (id) { burstId = id; burstAt = t; if (!running) draw(); },
      state: function () { return { yaw: yaw, pitch: pitch, zoom: zoom, R: Rb * zoom, cx: cx, cy: cy, W: W, H: H, land: LN }; }
    };

    if (!mini) {
      // подпись можно и «схватить» для поворота, и коснуться (короткий тап выбирает страну)
      var tapId = null, dx0 = 0, dy0 = 0, moved = false;
      root.addEventListener("pointerdown", function (e) {
        if (e.button > 0) return;
        var lab = main && e.target.closest ? e.target.closest(".gl-lab") : null;
        tapId = lab ? lab._sid : null; dx0 = e.clientX; dy0 = e.clientY; moved = false;
        dragging = true; lx = e.clientX; ly = e.clientY; lt = performance.now(); vyaw = vpitch = 0; focusId = null; userAt = t; root.classList.add("grab");
        try { root.setPointerCapture(e.pointerId); } catch (er) { /* ignore */ }
      });
      root.addEventListener("pointermove", function (e) {
        if (dragging) {
          var now = performance.now(), dt = Math.max(0.008, (now - lt) / 1000), dx = e.clientX - lx, dy = e.clientY - ly, R = Rb * zoom;
          yaw -= dx / R * 1.1; pitch += dy / R * 1.1; pitch = clamp(pitch, -0.95, 1.35);
          vyaw = clamp(0.7 * vyaw + 0.3 * (-dx / R * 1.1 / dt), -6, 6); vpitch = clamp(0.7 * vpitch + 0.3 * (dy / R * 1.1 / dt), -4, 4);
          if (Math.abs(e.clientX - dx0) + Math.abs(e.clientY - dy0) > 6) moved = true;
          lx = e.clientX; ly = e.clientY; lt = now; userAt = t; if (!running) draw();
        } else if (e.pointerType === "mouse") {
          var r = root.getBoundingClientRect(); pxm = (e.clientX - r.left) / Math.max(1, r.width) - 0.5; pym = (e.clientY - r.top) / Math.max(1, r.height) - 0.5;
        }
      });
      var up = function () {
        if (!dragging) return;
        dragging = false; root.classList.remove("grab"); userAt = t; if (performance.now() - lt > 90) { vyaw = vpitch = 0; }
        if (tapId && !moved) { var id = tapId; tapId = null; api.select(id); } tapId = null;
      };
      root.addEventListener("pointerup", up); root.addEventListener("pointercancel", function () { tapId = null; up(); }); root.addEventListener("lostpointercapture", function () { tapId = null; up(); });
      root.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse" && !dragging) { pxm = 0; pym = 0; } });
    }

    if (hasIO) new IntersectionObserver(function (es) { es.forEach(function (e) { visible = e.isIntersecting; if (visible) start(); else stop(); }); }, { threshold: 0.01 }).observe(root);
    doc.addEventListener("visibilitychange", function () { if (doc.hidden) stop(); else start(); });
    if ("ResizeObserver" in window) new ResizeObserver(size).observe(root); else window.addEventListener("resize", size);
    size(); t = mini ? 3 : 2;
    if (reduce) draw(); else { visible = visible || !hasIO; start(); }
    return api;
  }

  /* ---------- запуск ---------- */
  var inst = { hero: null, main: null, minis: [] };
  Array.prototype.forEach.call(doc.querySelectorAll("[data-globe]"), function (el) {
    var mode = el.getAttribute("data-globe"), g = Globe(el, mode);
    if (mode === "hero") inst.hero = g; else if (mode === "main") inst.main = g; else inst.minis.push(g);
  });
  window.YVGlobe = inst;

  /* демо-подключение в hero «летит» к серверу */
  window.addEventListener("yv:pick", function (e) { if (inst.hero && e.detail) inst.hero.focus(e.detail.id, { soft: true }); });
  window.addEventListener("yv:pulse", function (e) { if (inst.hero) inst.hero.burst(e.detail && e.detail.id || "*"); });
  window.addEventListener("yv:release", function () { if (inst.hero) inst.hero.release(); });

  /* список серверов ⇄ глобус */
  if (inst.main) {
    var g = inst.main, reset = doc.getElementById("glReset");
    function mark(id) {
      BASE.forEach(function (s) { var on = s.id === id; s.li.classList.toggle("on", on); if (s.btn) s.btn.setAttribute("aria-pressed", on ? "true" : "false"); });
      if (reset) reset.classList.toggle("dim", !id);
    }
    BASE.forEach(function (s) { if (s.btn) s.btn.addEventListener("click", function () { g.select(s.id); }); });
    g.onSelect = mark;
    if (reset) reset.addEventListener("click", function () { g.setSel(null); g.release(); mark(null); });
    mark(null);
  }
})();
