/* YarVpn — общий интерфейс: шапка, меню, появление блоков, угли на фоне, FAQ, демо-чат бота. */
(function () {
  "use strict";

  var doc = document;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  /* ---------- шапка + активный пункт меню ---------- */
  var hdr = $("#hdr");
  function onScroll() { if (hdr) hdr.classList.toggle("stuck", window.pageYOffset > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var navLinks = $$("#nav a");
  if (hasIO && navLinks.length) {
    var map = {};
    navLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var navIO = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.remove("on"); });
        var a = map[e.target.id]; if (a) a.classList.add("on");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (sec) { navIO.observe(sec); });
  }

  /* ---------- мобильное меню ---------- */
  var burger = $("#burger"), menu = $("#menu");
  function setMenu(open) {
    if (!burger || !menu) return;
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    doc.body.classList.toggle("lock", open);
  }
  if (burger) burger.addEventListener("click", function () { setMenu(burger.getAttribute("aria-expanded") !== "true"); });
  $$("#menu a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  doc.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 1020) setMenu(false); });

  /* ---------- появление блоков ---------- */
  var rvs = $$(".rv");
  if (hasIO) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    rvs.forEach(function (el) { io.observe(el); });
  } else {
    doc.documentElement.className += " rv-all";
  }
  // Заголовок hero — строки «выезжают» после загрузки шрифтов
  function revealHero() { $$(".h1 .ln").forEach(function (l) { l.classList.add("in"); }); }
  if (doc.fonts && doc.fonts.ready) { doc.fonts.ready.then(function () { setTimeout(revealHero, 60); }); setTimeout(revealHero, 1200); }
  else { revealHero(); }

  /* ---------- счётчики цен ---------- */
  function countUp(el) {
    var to = parseInt(el.getAttribute("data-n"), 10) || 0;
    if (reduce) { el.textContent = to; return; }
    var t0 = null, dur = 1100;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(to * e);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (hasIO) {
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    $$(".js-price").forEach(function (el) { el.textContent = "0"; cio.observe(el); });
  }

  /* ---------- подсветка за курсором ---------- */
  $$(".feat, .panel").forEach(function (el) {
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty("--mx", (e.clientX - r.left) + "px");
      el.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  /* ---------- FAQ ---------- */
  $$(".qa-q").forEach(function (b) {
    b.addEventListener("click", function () {
      var qa = b.closest(".qa"), open = !qa.classList.contains("open");
      qa.classList.toggle("open", open);
      b.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ================= угли на фоне ================= */
  (function embers() {
    var cv = $("#embers"); if (!cv || !cv.getContext) return;
    var ctx = cv.getContext("2d");
    var W = 0, H = 0, dpr = 1, P = [], sprites = [], last = 0, running = false, sy = 0;
    var COLORS = ["rgba(255,150,70,", "rgba(255,106,31,", "rgba(255,190,110,", "rgba(225,72,22,"];

    function sprite(c) {
      var s = 64, k = doc.createElement("canvas"); k.width = k.height = s;
      var g = k.getContext("2d"), gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      gr.addColorStop(0, "rgba(255,244,225,1)"); gr.addColorStop(.16, c + "1)"); gr.addColorStop(.48, c + ".26)"); gr.addColorStop(1, c + "0)");
      g.fillStyle = gr; g.fillRect(0, 0, s, s); return k;
    }
    COLORS.forEach(function (c) { sprites.push(sprite(c)); });

    function spawn(p, initial) {
      var depth = Math.random();
      p.d = depth;
      p.x = Math.random() * W;
      p.y = initial ? Math.random() * H : H + 20 + Math.random() * 60;
      p.s = (1.4 + Math.random() * 3.6) * (0.55 + depth * 0.9);
      p.v = 14 + Math.random() * 40 + depth * 26;
      p.a = 0.35 + Math.random() * 0.65;
      p.f = 0.4 + Math.random() * 1.4;
      p.ph = Math.random() * 6.28;
      p.sw = 8 + Math.random() * 26;
      p.k = Math.random() < .55 ? 1 : (Math.random() < .5 ? 0 : (Math.random() < .6 ? 2 : 3));
      p.big = Math.random() < .07;
      if (p.big) { p.s *= 9; p.a *= .16; p.v *= .45; }
      return p;
    }
    function resize() {
      dpr = 1;   // мягкие светящиеся точки не требуют ретина-разрешения — экономим GPU
      W = window.innerWidth; H = window.innerHeight;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.max(24, Math.min(76, Math.round(W * H / 20000)));
      if (W < 700) n = Math.min(n, 36);
      while (P.length < n) P.push(spawn({}, true));
      P.length = n;
    }
    function frame(ts) {
      if (!running) return;
      var dt = Math.min((ts - last) / 1000, 0.05); last = ts;
      draw(dt, ts / 1000);
      requestAnimationFrame(frame);
    }
    function draw(dt, t) {
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      var off = sy * 0.18;
      for (var i = 0; i < P.length; i++) {
        var p = P[i];
        p.y -= p.v * dt;
        if (p.y < -80) { spawn(p, false); }
        var yy = p.y + off * p.d;
        var life = 1 - Math.max(0, Math.min(1, (p.y + 60) / (H + 120)));   // 0 внизу → 1 вверху
        var env = Math.sin(Math.PI * Math.min(1, life * 1.05));
        var flick = 0.72 + 0.28 * Math.sin(t * p.f * 3 + p.ph);
        var al = p.a * env * flick;
        if (al < 0.02) continue;
        var xx = p.x + Math.sin(t * p.f + p.ph) * p.sw;
        var r = p.s * (p.big ? 1 : (0.75 + 0.25 * flick)) * 3.2;
        ctx.globalAlpha = Math.min(1, al);
        ctx.drawImage(sprites[p.k], xx - r, yy - r, r * 2, r * 2);
      }
      ctx.globalAlpha = 1;
    }
    function start() { if (running || reduce) return; running = true; last = performance.now(); requestAnimationFrame(frame); }
    function stop() { running = false; }
    window.addEventListener("resize", function () { resize(); if (reduce) draw(0, 0); });
    window.addEventListener("scroll", function () { sy = window.pageYOffset; }, { passive: true });
    doc.addEventListener("visibilitychange", function () { if (doc.hidden) stop(); else start(); });
    resize();
    if (reduce) { draw(0, 0); } else { start(); }
  })();

  /* ================= демо-чат с ботом ================= */
  (function chat() {
    var box = $("#chat"); if (!box) return;
    var timers = [], alive = false;
    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function clearAll() { timers.forEach(clearTimeout); timers = []; }

    function botMsg(html) { var m = doc.createElement("div"); m.className = "msg bot"; m.innerHTML = html; box.appendChild(m); trim(); return m; }
    function kb(rows) {
      var k = doc.createElement("div"); k.className = "kb";
      rows.forEach(function (r) {
        var d = doc.createElement("div"); d.className = "kb-row";
        r.forEach(function (t) { var b = doc.createElement("div"); b.className = "kb-btn"; b.textContent = t; d.appendChild(b); });
        k.appendChild(d);
      });
      box.appendChild(k); trim(); return k;
    }
    function typing() { var t = doc.createElement("div"); t.className = "typing"; t.innerHTML = "<i></i><i></i><i></i>"; box.appendChild(t); trim(); return t; }
    function reset() { box.innerHTML = "<span class=\"chat-day\">Сегодня</span>"; }
    function trim() { while (box.scrollHeight > box.clientHeight + 4 && box.children.length > 2) box.removeChild(box.children[1]); }
    function tap(k, row, col) { var b = k.children[row].children[col]; b.classList.add("tap"); }

    function run() {
      clearAll(); reset();
      var t = 500;
      later(function () {
        botMsg("<b>YarVpn</b><br>Быстрый и надёжный VPN. Выбирай, что нужно:");
        var k = kb([["Купить / продлить подписку"], ["Подключиться", "Профиль"], ["Пробный период"], ["Реферальная программа"]]);
        later(function () { tap(k, 2, 0); }, 1700);
        later(function () {
          reset();
          botMsg("Активируя пробную подписку вы получаете:<br><br>Срок: <b>3 дня</b><br>Устройства: <b>1</b><br>Трафик: <b>10 ГБ</b><br><br>Доступ ко всем серверам, как и в платной подписке.");
          var k2 = kb([["Активировать"], ["Назад"]]);
          later(function () { tap(k2, 0, 0); }, 2100);
          later(function () {
            var ty = typing();
            later(function () {
              ty.remove();
              botMsg("<b>Пробный период активирован!</b><br>Добавь подписку в приложение:<span class=\"lnk\">https://sub.yarvpn…/x7Kq2m</span>");
              kb([["Инструкция", "QR-код"]]);
              later(run, 5200);
            }, 1300);
          }, 2900);
        }, 2500);
      }, t);
    }
    function begin() { if (alive) return; alive = true; run(); }
    function end() { alive = false; clearAll(); }
    if (reduce || !("IntersectionObserver" in window)) { botMsg("<b>YarVpn</b><br>Быстрый и надёжный VPN. Выбирай, что нужно:"); kb([["Подключиться", "Профиль"], ["Пробный период"]]); return; }
    new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) begin(); else end(); }); }, { threshold: 0.35 }).observe(box.closest(".phone"));
  })();
})();
