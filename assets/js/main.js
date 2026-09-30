/* YarVpn — интерфейс: навигация, появление блоков, 3D-наклон, демо подключения и диалога с ботом, FAQ.
   Все тексты демо — из проекта (сайт и бот). Цифр, которых нет в проекте, здесь нет. */
(function () {
  "use strict";

  var doc = document, root = doc.documentElement;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;
  var fine = window.matchMedia && window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  var YV = window.YV = { px: 0, py: 0 };   // общее состояние: положение курсора (−0.5…0.5) для 3D-фона

  /* ---------- общий загрузчик QR (нужен демо-чату и кабинету) ---------- */
  var qrWaiters = null;
  YV.loadQr = function (cb) {
    if (window.qrcode) { cb(); return; }
    if (qrWaiters) { qrWaiters.push(cb); return; }
    qrWaiters = [cb];
    var s = doc.createElement("script"); s.src = "assets/js/qr.js?v=2";
    s.onload = function () { var w = qrWaiters; qrWaiters = null; w.forEach(function (f) { f(); }); };
    doc.head.appendChild(s);
  };

  /* ---------- запуск: после шрифтов включаем вход-анимации ---------- */
  function ready() { root.className += " js-ready"; }
  if (doc.fonts && doc.fonts.ready) { doc.fonts.ready.then(function () { setTimeout(ready, 60); }); setTimeout(ready, 1200); } else { ready(); }

  /* ---------- навигация ---------- */
  var nav = $("#nav");
  function onScroll() { if (nav) nav.classList.toggle("stuck", window.pageYOffset > 12); kick(); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var links = $$("#navLinks a"), ind = $("#navInd"), linkMap = {};
  links.forEach(function (a) { linkMap[a.getAttribute("href").slice(1)] = a; });
  function moveInd(a) {
    if (!ind) return;
    links.forEach(function (l) { l.classList.toggle("on", l === a); });
    if (!a) { ind.style.opacity = 0; return; }
    ind.style.opacity = 1; ind.style.width = a.offsetWidth + "px"; ind.style.transform = "translateX(" + a.offsetLeft + "px)";
  }
  if (hasIO) {
    var navIO = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) moveInd(linkMap[e.target.id] || null); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { navIO.observe(s); });
  }
  window.addEventListener("resize", function () { var on = $("#navLinks a.on"); if (on) moveInd(on); });

  var burger = $("#burger"), sheet = $("#sheet");
  function setSheet(open) {
    if (!burger || !sheet) return;
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    sheet.classList.toggle("open", open); sheet.setAttribute("aria-hidden", open ? "false" : "true");
    doc.body.classList.toggle("lock", open);
  }
  if (burger) burger.addEventListener("click", function () { setSheet(burger.getAttribute("aria-expanded") !== "true"); });
  $$("#sheet a").forEach(function (a) { a.addEventListener("click", function () { setSheet(false); }); });
  doc.addEventListener("keydown", function (e) { if (e.key === "Escape") setSheet(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 1020) setSheet(false); });

  /* ---------- появление блоков ---------- */
  var rvs = $$(".rv");
  if (hasIO) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    rvs.forEach(function (el) { io.observe(el); });
  } else { root.className += " rv-all"; }

  /* ---------- счётчики ---------- */
  function countUp(el) {
    var to = parseInt(el.getAttribute("data-n"), 10) || 0;
    if (reduce) { el.textContent = to; return; }
    var t0 = null, dur = 1300;
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

  /* ---------- подсветка карточек за курсором ---------- */
  $$(".card").forEach(function (el) {
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      el.style.setProperty("--mx", (e.clientX - r.left) + "px"); el.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });

  /* ---------- FAQ ---------- */
  $$(".qa-q").forEach(function (b) {
    b.addEventListener("click", function () {
      var qa = b.closest(".qa"), open = !qa.classList.contains("open");
      qa.classList.toggle("open", open); b.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ================= 3D-наклон (один общий цикл, спит, когда ничего не двигается) ================= */
  var tilts = [], looping = false, sy = 0;
  function addTilt(el, host, max, opt) {
    if (!el || !host) return;
    var t = { el: el, host: host, max: max, rx: 0, ry: 0, trx: 0, tr_y: 0, opt: opt || {} };
    tilts.push(t);
    if (fine) {
      host.addEventListener("pointermove", function (e) {
        if (e.pointerType === "touch") return;
        var r = host.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        t.tr_y = px * max * 2; t.trx = -py * max * 2; kick();
      });
      host.addEventListener("pointerleave", function () { t.trx = 0; t.tr_y = 0; kick(); });
    }
  }
  function kick() { if (!looping && !reduce) { looping = true; requestAnimationFrame(loop); } }
  function loop() {
    var moving = false;
    sy = window.pageYOffset;
    for (var i = 0; i < tilts.length; i++) {
      var t = tilts[i], k = 0.085;
      t.rx += (t.trx - t.rx) * k; t.ry += (t.tr_y - t.ry) * k;
      if (Math.abs(t.trx - t.rx) > 0.01 || Math.abs(t.tr_y - t.ry) > 0.01) moving = true;
      var ty = t.opt.scroll ? (sy * t.opt.scroll) : 0;
      t.el.style.transform = (ty ? "translate3d(0," + ty.toFixed(1) + "px,0) " : "") + "rotateX(" + t.rx.toFixed(2) + "deg) rotateY(" + t.ry.toFixed(2) + "deg)";
    }
    if (moving) requestAnimationFrame(loop); else looping = false;
  }
  var hero = $(".hero"), stageIn = $("#stageIn"), netEl = $("#net"), mapEl = $("#map"), phoneWrap = $(".phone-wrap"), phoneEl = $("#phone");
  addTilt(stageIn, hero, 7, { scroll: 0.05 });
  addTilt(mapEl, netEl, 3.4);
  addTilt(phoneEl, phoneWrap, 6);
  $$(".plan").forEach(function (p) { addTilt(p, p, 4.5); });
  // курсор для 3D-фона (решётка чуть «следит» за мышью)
  if (fine) window.addEventListener("pointermove", function (e) { YV.px = e.clientX / window.innerWidth - 0.5; YV.py = e.clientY / window.innerHeight - 0.5; }, { passive: true });

  /* ================= демо подключения в hero ================= */
  (function connectDemo() {
    var conn = $("#conn"), text = $("#connText"), dot = $("#srvDot"), kbBtn = $("#kbConnect");
    if (!conn || !text) return;
    var seq = [
      { s: 0, t: "Нажми, чтобы подключиться", ms: 2200 },
      { s: 1, t: "Выбираем ближайший сервер…", ms: 1800 },
      { s: 2, t: "Переключаемся на быстрый канал…", ms: 1800 },
      { s: 3, t: "Подключено — можно пользоваться", ms: 5200 }
    ];
    var i = 0, timer = 0, running = false;
    function set(st) {
      conn.setAttribute("data-s", st.s);
      text.classList.add("out");
      setTimeout(function () { text.textContent = st.t; text.classList.remove("out"); }, 300);
      if (dot) dot.style.opacity = st.s === 3 ? 1 : 0.35;
      if (st.s === 1 && kbBtn) { kbBtn.classList.add("tap"); setTimeout(function () { kbBtn.classList.remove("tap"); }, 700); }
      if (st.s === 3) window.dispatchEvent(new Event("yv:pulse"));
    }
    function next() { var st = seq[i % seq.length]; set(st); i++; timer = setTimeout(next, st.ms); }
    function start() { if (running || reduce) return; running = true; next(); }
    function stop() { running = false; clearTimeout(timer); }
    if (reduce) { set(seq[3]); return; }
    if (hasIO) new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) start(); else stop(); }); }, { threshold: 0.2 }).observe($("#stage"));
    else start();
  })();

  /* ================= шаги + диалог с ботом (тексты и кнопки — из бота) ================= */
  (function stepsDemo() {
    var box = $("#chat"), steps = $$("#steps .step");
    if (!box || !steps.length) return;
    var timers = [], cur = 0, auto = true, resumeAt = 0, inView = false, cycle = 0;
    var BOT = "https://t.me/yarVpnRubot";
    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function clearAll() { timers.forEach(clearTimeout); timers = []; }
    function reset() { box.innerHTML = ""; }
    function bot(html) { var m = doc.createElement("div"); m.className = "msg"; m.innerHTML = html; box.appendChild(m); trim(); return m; }
    function me(text) { var m = doc.createElement("div"); m.className = "msg"; m.style.cssText = "align-self:flex-end;background:var(--accent);color:#1a0a00;font-weight:500;border-bottom-left-radius:18px;border-bottom-right-radius:6px"; m.textContent = text; box.appendChild(m); trim(); return m; }
    function kb(rows) {
      var k = doc.createElement("div"); k.className = "kbd";
      rows.forEach(function (r) { var d = doc.createElement("div"); d.className = "kbd-r"; r.forEach(function (t) { var b = doc.createElement("div"); b.className = "kbd-b"; b.textContent = t; d.appendChild(b); }); k.appendChild(d); });
      box.appendChild(k); trim(); return k;
    }
    function typing() { var t = doc.createElement("div"); t.className = "msg"; t.style.cssText = "display:flex;gap:4px;padding:14px 16px;width:60px"; t.innerHTML = "<i style='width:6px;height:6px;border-radius:50%;background:#71717a;animation:dots 1s infinite'></i><i style='width:6px;height:6px;border-radius:50%;background:#71717a;animation:dots 1s .15s infinite'></i><i style='width:6px;height:6px;border-radius:50%;background:#71717a;animation:dots 1s .3s infinite'></i>"; box.appendChild(t); trim(); return t; }
    function trim() { while (box.scrollHeight > box.clientHeight + 4 && box.children.length > 1) box.removeChild(box.firstChild); }
    function tap(k, r, c) { var b = k.children[r] && k.children[r].children[c]; if (b) b.classList.add("tap"); }
    function say(html, then, delay) { var ty = typing(); later(function () { ty.remove(); var m = bot(html); if (then) then(m); }, delay || 900); }

    function scene(n) {
      clearAll(); reset();
      if (n === 0) {
        later(function () { me("/start"); say("<b>YarVpn</b><br>Быстрый и надёжный VPN. Выбирай, что нужно:", function () {
          var k = kb([["Купить / продлить подписку"], ["Подключиться", "Профиль"], ["Пробный период"], ["Ежедневная рулетка"], ["Реферальная программа"]]);
          later(function () { tap(k, 2, 0); }, 1700);
        }); }, 250);
      } else if (n === 1) {
        say("Активируя пробную подписку вы получаете:<span class='ln'>Срок действия: <b>3 дня</b></span><span class='ln'>Устройства: <b>1</b></span><span class='ln'>Трафик: <b>10 ГБ</b></span><span class='ln' style='margin-top:8px'>Пробный период даёт доступ ко всем серверам, как и платная подписка.</span>", function () {
          var k = kb([["Активировать пробный период"], ["Назад"]]);
          later(function () { tap(k, 0, 0); }, 1800);
        }, 500);
      } else if (n === 2) {
        say("Выберите способ оплаты:", function () {
          var k = kb([["TON (TonKeeper)"], ["Telegram Stars"], ["Оплатить с баланса"]]);
          later(function () { tap(k, 2, 0); }, 1700);
        }, 500);
      } else {
        say("<b>Ссылка подписки:</b><span class='lnk'></span><span class='qr' id='chatQr'></span><span class='ln' style='margin-top:6px'><b>Как подключиться:</b><br>1. Установите приложение<br>2. Отсканируйте QR-код ИЛИ добавьте подписку по URL<br>3. Включите VPN</span>", function () {
          YV.loadQr(function () {
            var q = $("#chatQr"); if (!q) return;
            try { var c = window.qrcode(0, "M"); c.addData(BOT); c.make(); q.innerHTML = c.createSvgTag({ scalable: true, margin: 0 }).replace(/fill="black"/g, 'fill="#0a0a0b"').replace(/fill="white"/g, 'fill="#f5f5f7"'); } catch (e) { /* ignore */ }
          });
        }, 500);
      }
    }
    function setStep(n, fromUser) {
      cur = n;
      steps.forEach(function (s, i) {
        s.classList.toggle("on", i === n);
        var bar = s.querySelector(".step-bar");
        if (bar) { bar.style.transition = "none"; bar.style.transform = "scaleX(0)"; if (i === n) { void bar.offsetWidth; if (auto && !fromUser) { bar.style.transition = "transform 6s linear"; bar.style.transform = "scaleX(1)"; } } }
      });
      scene(n);
      clearTimeout(advance); if (auto && inView && !fromUser) advance = setTimeout(nextStep, 6200);
    }
    var advance = 0;
    function nextStep() { if (Date.now() < resumeAt) { advance = setTimeout(nextStep, 1500); return; } setStep((cur + 1) % steps.length, false); }
    steps.forEach(function (s, i) {
      s.setAttribute("tabindex", "0"); s.setAttribute("role", "button");
      function pick() { resumeAt = Date.now() + 14000; setStep(i, true); }
      s.addEventListener("click", pick);
      s.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
    });
    var wrap = $(".phone-wrap");
    function begin() { inView = true; setStep(cur, false); }
    function end() { inView = false; clearAll(); clearTimeout(advance); }
    if (reduce || !hasIO) { scene(0); return; }
    new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting && !inView) begin(); else if (!e.isIntersecting && inView) end(); }); }, { threshold: 0.3 }).observe(wrap);
  })();
})();
