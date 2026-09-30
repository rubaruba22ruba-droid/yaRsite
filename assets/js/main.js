/* YarVpn — интерфейс: навигация, появление блоков, 3D-наклон, демо подключения (глобус «летит» к серверу) и диалога с ботом, FAQ.
   Все тексты демо — из проекта (сайт и бот); серверы — из списка #srvList. Цифр, которых нет в проекте, здесь нет. */
(function () {
  "use strict";

  var doc = document, root = doc.documentElement;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;
  var fine = window.matchMedia && window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  var YV = window.YV = { px: 0, py: 0 };   // общее состояние: положение курсора (−0.5…0.5)

  /* ---------- общий загрузчик QR (нужен демо-чату и кабинету) ---------- */
  var qrWaiters = null;
  YV.loadQr = function (cb) {
    if (window.qrcode) { cb(); return; }
    if (qrWaiters) { qrWaiters.push(cb); return; }
    qrWaiters = [cb];
    var s = doc.createElement("script"); s.src = "assets/js/qr.js?v=3";
    s.onload = function () { var w = qrWaiters; qrWaiters = null; w.forEach(function (f) { f(); }); };
    doc.head.appendChild(s);
  };

  /* ---------- запуск: после шрифтов включаем вход-анимации ---------- */
  function ready() { root.className += " js-ready"; }
  if (doc.fonts && doc.fonts.ready) { doc.fonts.ready.then(function () { setTimeout(ready, 60); }); setTimeout(ready, 1200); } else { ready(); }

  /* ---------- заголовки h2: разбиваем на слова для 3D-появления (текст в DOM остаётся тем же) ---------- */
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

  /* ---------- «печатная» подпись над заголовками (моноширинный шрифт — ширина не прыгает) ---------- */
  function scramble(el) {
    if (reduce) return;
    var final = el.textContent, chars = "01<>/_*#+=:", n = final.length, t0 = performance.now(), dur = 700;
    (function tick(ts) {
      var p = Math.min(1, (ts - t0) / dur), k = Math.floor(p * n), out = "", i;
      for (i = 0; i < n; i++) { var c = final.charAt(i); out += (i < k || c === " ") ? c : chars.charAt((Math.random() * chars.length) | 0); }
      el.textContent = p < 1 ? out : final;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  /* ---------- навигация, полоса прокрутки ---------- */
  var nav = $("#nav"), prog = $("#progress");
  function onScroll() {
    if (nav) nav.classList.toggle("stuck", window.pageYOffset > 12);
    if (prog) { var max = Math.max(1, root.scrollHeight - window.innerHeight); prog.style.setProperty("--p", Math.min(1, window.pageYOffset / max).toFixed(4)); }
    kick();
  }
  window.addEventListener("scroll", onScroll, { passive: true });

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
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("in"); io.unobserve(e.target);
        if (e.target.hasAttribute("data-scr")) scramble(e.target);
      });
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
    sy = window.pageYOffset;
    for (var i = 0; i < tilts.length; i++) {
      var t = tilts[i], o = t.opt;
      if (!t.active && !o.scroll) continue;
      t.rx += (t.trx - t.rx) * 0.09; t.ry += (t.tyy - t.ry) * 0.09;
      var d = Math.abs(t.trx - t.rx) + Math.abs(t.tyy - t.ry);
      if (d > 0.01) moving = true;
      if (!o.scroll && !t.hover && d <= 0.01 && t.trx === 0 && t.tyy === 0) { t.active = false; t.el.style.transform = ""; continue; }
      var ty = o.scroll ? sy * o.scroll : 0;
      t.el.style.transform = (o.persp ? "perspective(" + o.persp + "px) " : "") + (ty ? "translate3d(0," + ty.toFixed(1) + "px,0) " : "") + "rotateX(" + t.rx.toFixed(2) + "deg) rotateY(" + t.ry.toFixed(2) + "deg)";
    }
    if (moving) requestAnimationFrame(loop); else looping = false;
  }
  addTilt($("#stageIn"), $(".hero"), 8, { scroll: 0.05 });
  addTilt($("#phone"), $(".phone-wrap"), 6);
  $$(".tilt").forEach(function (c) { addTilt(c, c, c.classList.contains("plan") ? 5 : 4.5, { persp: 1100 }); });
  onScroll();

  /* курсор: мягкое пятно света + магнитные кнопки */
  if (fine) {
    var spot = $("#spot"), spx = 0, spy = 0, pend = false;
    window.addEventListener("pointermove", function (e) {
      YV.px = e.clientX / window.innerWidth - 0.5; YV.py = e.clientY / window.innerHeight - 0.5;
      if (!spot) return;
      spx = e.clientX; spy = e.clientY;
      if (!pend) { pend = true; requestAnimationFrame(function () { spot.style.transform = "translate3d(" + spx + "px," + spy + "px,0)"; spot.classList.add("on"); pend = false; }); }
    }, { passive: true });
    doc.documentElement.addEventListener("pointerleave", function () { if (spot) spot.classList.remove("on"); });
    if (!reduce) $$(".btn-lg,.trial .btn,.plan .btn").forEach(function (b) {
      b.addEventListener("pointermove", function (e) {
        var r = b.getBoundingClientRect();
        b.style.translate = ((e.clientX - r.left - r.width / 2) * 0.16).toFixed(1) + "px " + ((e.clientY - r.top - r.height / 2) * 0.26).toFixed(1) + "px";
      });
      b.addEventListener("pointerleave", function () { b.style.translate = ""; });
    });
  }

  /* ================= демо подключения в hero: кольцо-статус + глобус летит к серверу ================= */
  (function connectDemo() {
    var conn = $("#conn"), text = $("#connText"), dot = $("#srvDot"), kbBtn = $("#kbConnect"), nameEl = $("#srvName");
    if (!conn || !text) return;
    var list = $$("#srvList .srv").map(function (li) { return { id: li.getAttribute("data-id"), name: li.getAttribute("data-country") }; });
    var seq = [
      { s: 0, t: "Нажми, чтобы подключиться", ms: 2200 },
      { s: 1, t: "Выбираем ближайший сервер…", ms: 1800 },
      { s: 2, t: "Переключаемся на быстрый канал…", ms: 1800 },
      { s: 3, t: "Подключено — можно пользоваться", ms: 5200 }
    ];
    var i = 0, si = 0, timer = 0, running = false;
    function emit(name, detail) { try { window.dispatchEvent(new CustomEvent(name, { detail: detail })); } catch (e) { /* старые браузеры */ } }
    function cur() { return list.length ? list[si % list.length] : null; }
    function set(st) {
      conn.setAttribute("data-s", st.s);
      text.classList.add("out");
      setTimeout(function () { text.textContent = st.t; text.classList.remove("out"); }, 300);
      if (dot) dot.style.opacity = st.s === 3 ? 1 : 0.35;
      if (st.s === 0) { emit("yv:release"); var c0 = cur(); if (c0 && nameEl) nameEl.textContent = c0.name; }
      if (st.s === 1) { if (kbBtn) { kbBtn.classList.add("tap"); setTimeout(function () { kbBtn.classList.remove("tap"); }, 700); } var c1 = cur(); if (c1) emit("yv:pick", { id: c1.id }); }
      if (st.s === 3) { var c3 = cur(); emit("yv:pulse", { id: c3 ? c3.id : "*" }); si++; }
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
    function typing() { var t = doc.createElement("div"); t.className = "msg"; t.style.cssText = "display:flex;gap:4px;padding:14px 16px;width:60px"; t.innerHTML = "<i style='width:6px;height:6px;border-radius:50%;background:#8a92bb;animation:dots 1s infinite'></i><i style='width:6px;height:6px;border-radius:50%;background:#8a92bb;animation:dots 1s .15s infinite'></i><i style='width:6px;height:6px;border-radius:50%;background:#8a92bb;animation:dots 1s .3s infinite'></i>"; box.appendChild(t); trim(); return t; }
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
            try { var c = window.qrcode(0, "M"); c.addData(BOT); c.make(); q.innerHTML = c.createSvgTag({ scalable: true, margin: 0 }).replace(/fill="black"/g, 'fill="#07091a"').replace(/fill="white"/g, 'fill="#f3f5ff"'); } catch (e) { /* ignore */ }
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
