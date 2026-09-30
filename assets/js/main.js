/* YarVpn — интерфейс: навигация, появление блоков, FAQ, фон-небо от прокрутки и глобус в первом экране. */
(function () {
  "use strict";
  var doc = document, root = doc.documentElement, body = doc.body;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;
  var YV = window.YV = {};

  /* QR для кабинета (грузится только когда нужен) */
  var qrWaiters = null;
  YV.loadQr = function (cb) {
    if (window.qrcode) { cb(); return; }
    if (qrWaiters) { qrWaiters.push(cb); return; }
    qrWaiters = [cb];
    var s = doc.createElement("script"); s.src = "assets/js/qr.js?v=5";
    s.onload = function () { var w = qrWaiters; qrWaiters = null; w.forEach(function (f) { f(); }); };
    doc.head.appendChild(s);
  };

  function ready() { root.className += " js-ready"; }
  if (doc.fonts && doc.fonts.ready) { doc.fonts.ready.then(function () { setTimeout(ready, 60); }); setTimeout(ready, 1200); } else { ready(); }

  /* заголовки: слова выезжают по очереди */
  $$(".h2").forEach(function (h) {
    var w = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = doc.createDocumentFragment();
          n.nodeValue.split(/(\s+)/).forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(doc.createTextNode(p)); return; }
            var a = doc.createElement("span"), b = doc.createElement("span"); a.className = "wd"; a.style.setProperty("--w", w++); b.textContent = p; a.appendChild(b); frag.appendChild(a);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
      });
    })(h);
  });

  /* навигация */
  var nav = $("#nav"), prog = $("#progress");
  var links = $$("#navLinks a"), linkMap = {};
  links.forEach(function (a) { linkMap[a.getAttribute("href").slice(1)] = a; });
  if (hasIO) {
    var navIO = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { var a = linkMap[e.target.id]; links.forEach(function (l) { l.classList.toggle("on", l === a); }); } });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { navIO.observe(s); });
  }
  var burger = $("#burger"), sheet = $("#sheet");
  function setSheet(open) {
    if (!burger || !sheet) return;
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    sheet.classList.toggle("open", open); sheet.setAttribute("aria-hidden", open ? "false" : "true");
    body.classList.toggle("lock", open);
  }
  if (burger) burger.addEventListener("click", function () { setSheet(burger.getAttribute("aria-expanded") !== "true"); });
  $$("#sheet a").forEach(function (a) { a.addEventListener("click", function () { setSheet(false); }); });
  doc.addEventListener("keydown", function (e) { if (e.key === "Escape") setSheet(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 1020) setSheet(false); });

  /* появление блоков */
  if (hasIO) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    $$(".rv").forEach(function (el) { io.observe(el); });
  } else { root.className += " rv-all"; }

  /* цены «набегают» */
  function countUp(el) {
    var to = parseInt(el.getAttribute("data-n"), 10) || 0;
    if (reduce) { el.textContent = to; return; }
    var t0 = null, dur = 1200;
    (function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(to * e);
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  if (hasIO) {
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.7 });
    $$(".js-price").forEach(function (el) { el.textContent = "0"; cio.observe(el); });
  }

  /* FAQ */
  $$(".qa-q").forEach(function (b) {
    b.addEventListener("click", function () {
      var qa = b.closest(".qa"), open = !qa.classList.contains("open");
      qa.classList.toggle("open", open); b.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- небо: спокойный сумрак со звёздами, плавно темнеет к концу страницы ---------- */
  var sections = [
    { id: "top",     phase: 2.55, land: 0.0,  sun: [0.30, 0.80] },
    { id: "how",     phase: 2.70, land: 0.0, sun: [0.40, 0.60] },
    { id: "pricing", phase: 2.80, land: 0.0, sun: [0.55, 0.50] },
    { id: "cabinet", phase: 2.88, land: 0.0, sun: [0.50, 0.45] },
    { id: "bonus",   phase: 2.92, land: 0.0, sun: [0.42, 0.40] },
    { id: "faq",     phase: 2.96, land: 0.0, sun: [0.60, 0.36] }
  ];
  var secEls = sections.map(function (s) { return $("#" + s.id); });
  var cur = { phase: sections[0].phase, land: 0, sx: 0.3, sy: 0.8, scroll: 0 }, cts = [], ctsAt = 0;
  function centers() { var y0 = window.pageYOffset; return secEls.map(function (el) { if (!el) return 0; var r = el.getBoundingClientRect(); return y0 + r.top + r.height / 2; }); }
  function targetAt(vy) {
    var n = sections.length, i = 0;
    while (i < n - 1 && vy > cts[i + 1]) i++;
    var a = sections[i], b = sections[Math.min(n - 1, i + 1)], span = Math.max(1, cts[Math.min(n - 1, i + 1)] - cts[i]);
    var f = Math.max(0, Math.min(1, (vy - cts[i]) / span)); f = f * f * (3 - 2 * f); if (vy < cts[0]) f = 0;
    return { phase: a.phase + (b.phase - a.phase) * f, land: a.land + (b.land - a.land) * f, sx: a.sun[0] + (b.sun[0] - a.sun[0]) * f, sy: a.sun[1] + (b.sun[1] - a.sun[1]) * f };
  }
  var lastT = 0, earth = null;
  function loop(ts) {
    var dt = Math.min((ts - lastT) / 1000 || 0.016, 0.05); lastT = ts;
    if (ts - ctsAt > 1500 || !cts.length) { cts = centers(); ctsAt = ts; }
    var y = window.pageYOffset, tg = targetAt(y + window.innerHeight * 0.5), k = 1 - Math.exp(-dt * 3);
    cur.phase += (tg.phase - cur.phase) * k; cur.land += (tg.land - cur.land) * k; cur.sx += (tg.sx - cur.sx) * k; cur.sy += (tg.sy - cur.sy) * k;
    cur.scroll += (y / 1000 - cur.scroll) * (1 - Math.exp(-dt * 2));
    var sk = window.YVSky;
    if (sk) { sk.phase = cur.phase; sk.land = cur.land; sk.sun = [cur.sx, cur.sy]; sk.scroll = cur.scroll; sk.flare = 0; }
    if (earth) earth.setScroll(y * 0.0011);
    requestAnimationFrame(loop);
  }
  if (!reduce) requestAnimationFrame(loop);
  else { cts = centers(); var t0 = targetAt(window.innerHeight * 0.5); if (window.YVSky) { window.YVSky.phase = t0.phase; window.YVSky.land = t0.land; } }
  window.addEventListener("resize", function () { cts = centers(); ctsAt = performance.now(); });
  window.addEventListener("load", function () { cts = centers(); ctsAt = performance.now(); });

  window.addEventListener("scroll", function () {
    if (nav) nav.classList.toggle("stuck", window.pageYOffset > 20);
    if (prog) { var max = Math.max(1, root.scrollHeight - window.innerHeight); prog.style.setProperty("--p", Math.min(1, window.pageYOffset / max).toFixed(4)); }
  }, { passive: true });
  if (nav) nav.classList.toggle("stuck", window.pageYOffset > 20);

  /* ---------- глобус ---------- */
  function startEarth() {
    var cv = $("#earth");
    if (!cv || !window.YVEarth) return;
    try { earth = window.YVEarth.init(cv, { reduce: reduce }); } catch (e) { earth = null; }
    if (!earth) { var w = $("#earthWrap"); if (w) w.style.display = "none"; }
  }
  if (window.YVEarth) startEarth(); else window.addEventListener("load", startEarth);
})();
