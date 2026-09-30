/* YarVpn — интерфейс: навигация, появление блоков, FAQ и глобус в первом экране. */
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
    var s = doc.createElement("script"); s.src = "assets/js/qr.js?v=6";
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

  var earth = null;

  window.addEventListener("scroll", function () {
    if (nav) nav.classList.toggle("stuck", window.pageYOffset > 20);
    if (prog) { var max = Math.max(1, root.scrollHeight - window.innerHeight); prog.style.setProperty("--p", Math.min(1, window.pageYOffset / max).toFixed(4)); }
    if (earth && !reduce) earth.setScroll(window.pageYOffset * 0.0011);
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
