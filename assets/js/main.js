/* YarVpn — интерфейс: навигация, плавное появление, 3D-наклон стекла, «путешествие» неба от прокрутки,
   демо подключения и диалога с ботом, FAQ. Все тексты демо — из проекта (сайт и бот). */
(function () {
  "use strict";

  var doc = document, root = doc.documentElement, body = doc.body;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;
  var fine = window.matchMedia && window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  var YV = window.YV = { px: 0, py: 0 };

  /* ---------- общий загрузчик QR (нужен демо-чату и кабинету) ---------- */
  var qrWaiters = null;
  YV.loadQr = function (cb) {
    if (window.qrcode) { cb(); return; }
    if (qrWaiters) { qrWaiters.push(cb); return; }
    qrWaiters = [cb];
    var s = doc.createElement("script"); s.src = "assets/js/qr.js?v=4";
    s.onload = function () { var w = qrWaiters; qrWaiters = null; w.forEach(function (f) { f(); }); };
    doc.head.appendChild(s);
  };

  function ready() { root.className += " js-ready"; }
  if (doc.fonts && doc.fonts.ready) { doc.fonts.ready.then(function () { setTimeout(ready, 60); }); setTimeout(ready, 1200); } else { ready(); }

  /* ---------- заголовки h2: слова выезжают по очереди (текст в DOM остаётся тем же) ---------- */
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

  /* ---------- навигация ---------- */
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

  /* ---------- появление блоков ---------- */
  var rvs = $$(".rv");
  if (hasIO) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    rvs.forEach(function (el) { io.observe(el); });
  } else { root.className += " rv-all"; }

  /* ---------- счётчики ---------- */
  function countUp(el) {
    var to = parseInt(el.getAttribute("data-n"), 10) || 0;
    if (reduce) { el.textContent = to; return; }
    var t0 = null, dur = 1500;
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

  /* ---------- блик стекла за курсором ---------- */
  $$(".glass").forEach(function (el) {
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

  /* ================= небо: время суток, земля и солнце «едут» вместе с прокруткой ================= */
  var sections = [
    { id: "top",     phase: 0.00, land: 1.00, sun: [0.27, 0.66] },
    { id: "network", phase: 0.85, land: 0.62, sun: [0.30, 0.46] },
    { id: "why",     phase: 1.15, land: 0.42, sun: [0.34, 0.36] },
    { id: "how",     phase: 1.45, land: 0.36, sun: [0.52, 0.30] },
    { id: "pricing", phase: 1.85, land: 0.34, sun: [0.68, 0.26] },
    { id: "cabinet", phase: 2.25, land: 0.34, sun: [0.50, 0.22] },
    { id: "bonus",   phase: 2.55, land: 0.34, sun: [0.36, 0.18] },
    { id: "faq",     phase: 2.85, land: 0.34, sun: [0.60, 0.16] },
    { id: "cta",     phase: 0.80, land: 1.00, sun: [0.50, 0.40] }
  ];
  var secEls = sections.map(function (s) { return s.id === "cta" ? $(".cta") : $("#" + s.id); });
  var cur = { phase: 0, land: 1, sx: 0.27, sy: 0.66, scroll: 0, mx: 0, my: 0 };
  var tone = "light", flare = 0;
  function centers() {
    var y0 = window.pageYOffset;
    return secEls.map(function (el) { if (!el) return 0; var r = el.getBoundingClientRect(); return y0 + r.top + r.height / 2; });
  }
  var cts = [], ctsAt = 0;
  function targetAt(vy) {
    var n = sections.length, i = 0;
    while (i < n - 1 && vy > cts[i + 1]) i++;
    var a = sections[i], b = sections[Math.min(n - 1, i + 1)], span = Math.max(1, cts[Math.min(n - 1, i + 1)] - cts[i]);
    var f = Math.max(0, Math.min(1, (vy - cts[i]) / span)); f = f * f * (3 - 2 * f);
    if (i === 0 && vy < cts[0]) f = 0;
    return { phase: a.phase + (b.phase - a.phase) * f, land: a.land + (b.land - a.land) * f, sx: a.sun[0] + (b.sun[0] - a.sun[0]) * f, sy: a.sun[1] + (b.sun[1] - a.sun[1]) * f };
  }
  function setTone(t) { if (t === tone) return; tone = t; body.classList.toggle("tone-dark", t === "dark"); body.classList.toggle("tone-light", t === "light"); }
  var lastT = 0;
  function skyLoop(ts) {
    var dt = Math.min((ts - lastT) / 1000 || 0.016, 0.05); lastT = ts;
    if (ts - ctsAt > 1500 || !cts.length) { cts = centers(); ctsAt = ts; }
    var y = window.pageYOffset, vy = y + window.innerHeight * 0.5;
    var tg = targetAt(vy), k = 1 - Math.exp(-dt * 3.4);      // критически «мягкое» сглаживание: небо плывёт, а не прыгает
    cur.phase += (tg.phase - cur.phase) * k; cur.land += (tg.land - cur.land) * k; cur.sx += (tg.sx - cur.sx) * k; cur.sy += (tg.sy - cur.sy) * k;
    cur.scroll += (y / 1000 - cur.scroll) * (1 - Math.exp(-dt * 2.2));
    cur.mx += (YV.px - cur.mx) * (1 - Math.exp(-dt * 2.5)); cur.my += (YV.py - cur.my) * (1 - Math.exp(-dt * 2.5));
    var sk = window.YVSky;
    if (sk) {
      sk.phase = cur.phase; sk.land = cur.land; sk.sun = [cur.sx, cur.sy]; sk.scroll = cur.scroll; sk.mouse = [cur.mx, cur.my];
      if (sk.flareTarget) { flare = Math.max(flare, sk.flareTarget); sk.flareTarget = 0; }
      flare = Math.max(0, flare - dt * 0.55); sk.flare = flare;
    }
    setTone(cur.phase > 0.42 ? "dark" : "light");
    requestAnimationFrame(skyLoop);
  }
  if (!reduce) requestAnimationFrame(skyLoop);
  else { cts = centers(); var t0 = targetAt(window.innerHeight * 0.5); if (window.YVSky) { window.YVSky.phase = t0.phase; window.YVSky.land = t0.land; } }
  window.addEventListener("resize", function () { cts = centers(); ctsAt = performance.now(); });
  window.addEventListener("load", function () { cts = centers(); ctsAt = performance.now(); });

  function onScroll() {
    if (nav) nav.classList.toggle("stuck", window.pageYOffset > 20);
    if (prog) { var max = Math.max(1, root.scrollHeight - window.innerHeight); prog.style.setProperty("--p", Math.min(1, window.pageYOffset / max).toFixed(4)); }
    kick();
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ================= 3D-наклон стекла (один общий цикл, спит, когда ничего не двигается) ================= */
  var tilts = [], looping = false;
  function addTilt(el, host, max, opt) {
    if (!el || !host) return;
    var t = { el: el, host: host, max: max, rx: 0, ry: 0, trx: 0, tyy: 0, hover: false, active: false, opt: opt || {} };
    tilts.push(t);
    if (fine) {
      host.addEventListener("pointerenter", function (e) { if (e.pointerType !== "touch") { t.hover = true; t.active = true; kick(); } });
      host.addEventListener("pointermove", function (e) {
        if (e.pointerType === "touch") return;
        var r = host.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        t.tyy = px * max * 2; t.trx = -py * max * 2; t.active = true; kick();
      });
      host.addEventListener("pointerleave", function () { t.hover = false; t.trx = 0; t.tyy = 0; kick(); });
    }
  }
  function kick() { if (!looping && !reduce) { looping = true; requestAnimationFrame(loop); } }
  function loop() {
    var moving = false;
    for (var i = 0; i < tilts.length; i++) {
      var t = tilts[i], o = t.opt;
      if (!t.active) continue;
      t.rx += (t.trx - t.rx) * 0.08; t.ry += (t.tyy - t.ry) * 0.08;
      var d = Math.abs(t.trx - t.rx) + Math.abs(t.tyy - t.ry);
      if (d > 0.01) moving = true;
      if (!t.hover && d <= 0.01 && t.trx === 0 && t.tyy === 0) { t.active = false; t.el.style.transform = ""; continue; }
      t.el.style.transform = (o.persp ? "perspective(" + o.persp + "px) " : "") + "rotateX(" + t.rx.toFixed(2) + "deg) rotateY(" + t.ry.toFixed(2) + "deg)";
    }
    if (moving) requestAnimationFrame(loop); else looping = false;
  }
  addTilt($("#phone"), $(".phone-wrap"), 6);
  addTilt($("#heroCard"), $("#heroCard"), 5, { persp: 900 });
  $$(".tilt").forEach(function (c) { addTilt(c, c, c.classList.contains("plan") ? 5 : 4, { persp: 1100 }); });
  onScroll();

  /* курсор → небо и рука, магнитные кнопки */
  if (fine) {
    window.addEventListener("pointermove", function (e) { YV.px = e.clientX / window.innerWidth - 0.5; YV.py = e.clientY / window.innerHeight - 0.5; }, { passive: true });
    if (!reduce) $$(".btn-lg,.trial .btn,.plan .btn").forEach(function (b) {
      b.addEventListener("pointermove", function (e) {
        var r = b.getBoundingClientRect();
        b.style.translate = ((e.clientX - r.left - r.width / 2) * 0.16).toFixed(1) + "px " + ((e.clientY - r.top - r.height / 2) * 0.26).toFixed(1) + "px";
      });
      b.addEventListener("pointerleave", function () { b.style.translate = ""; });
    });
  }

  /* ================= демо подключения в первом экране (данные — пробный период) ================= */
  (function connectDemo() {
    var conn = $("#conn"), text = $("#connText");
    if (!conn || !text) return;
    var seq = [
      { s: 0, t: "Нажми, чтобы подключиться", ms: 2400 },
      { s: 1, t: "Подключаемся…", ms: 1800 },
      { s: 2, t: "Настраиваем защищённый канал…", ms: 1800 },
      { s: 3, t: "Подключено — можно пользоваться", ms: 5200 }
    ];
    var i = 0, timer = 0, running = false;
    function set(st) {
      conn.setAttribute("data-s", st.s);
      text.classList.add("out");
      setTimeout(function () { text.textContent = st.t; text.classList.remove("out"); }, 300);
    }
    function next() { var st = seq[i % seq.length]; set(st); i++; timer = setTimeout(next, st.ms); }
    function start() { if (running || reduce) return; running = true; next(); }
    function stop() { running = false; clearTimeout(timer); }
    if (reduce) { set(seq[3]); return; }
    if (hasIO) new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) start(); else stop(); }); }, { threshold: 0.2 }).observe($("#heroCard"));
    else start();
  })();

  /* ================= шаги + диалог с ботом (тексты и кнопки — из бота) ================= */
  (function stepsDemo() {
    var box = $("#chat"), steps = $$("#steps .step");
    if (!box || !steps.length) return;
    var timers = [], cur = 0, auto = true, resumeAt = 0, inView = false;
    var BOT = "https://t.me/yarVpnRubot";
    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
    function clearAll() { timers.forEach(clearTimeout); timers = []; }
    function reset() { box.innerHTML = ""; }
    function bot(html) { var m = doc.createElement("div"); m.className = "msg"; m.innerHTML = html; box.appendChild(m); trim(); return m; }
    function me(text) { var m = doc.createElement("div"); m.className = "msg me"; m.textContent = text; box.appendChild(m); trim(); return m; }
    function kb(rows) {
      var k = doc.createElement("div"); k.className = "kbd";
      rows.forEach(function (r) { var d = doc.createElement("div"); d.className = "kbd-r"; r.forEach(function (t) { var b = doc.createElement("div"); b.className = "kbd-b"; b.textContent = t; d.appendChild(b); }); k.appendChild(d); });
      box.appendChild(k); trim(); return k;
    }
    function typing() { var t = doc.createElement("div"); t.className = "msg"; t.style.cssText = "display:flex;gap:4px;padding:14px 16px;width:60px"; t.innerHTML = "<i style='width:6px;height:6px;border-radius:50%;background:#8a9bc4;animation:dots 1s infinite'></i><i style='width:6px;height:6px;border-radius:50%;background:#8a9bc4;animation:dots 1s .15s infinite'></i><i style='width:6px;height:6px;border-radius:50%;background:#8a9bc4;animation:dots 1s .3s infinite'></i>"; box.appendChild(t); trim(); return t; }
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
        say("Активируя пробную подписку вы получаете:<span class='ln'>Срок действия: <b>3 дня</b></span><span class='ln'>Устройства: <b>1</b></span><span class='ln'>Трафик: <b>10 ГБ</b></span>", function () {
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
            try { var c = window.qrcode(0, "M"); c.addData(BOT); c.make(); q.innerHTML = c.createSvgTag({ scalable: true, margin: 0 }).replace(/fill="black"/g, 'fill="#0b1a3c"').replace(/fill="white"/g, 'fill="#ffffff"'); } catch (e) { /* ignore */ }
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
