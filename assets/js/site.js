/* YarVpn — интерфейс: меню, появление блоков, FAQ, полоса прокрутки, глобус и вход через Telegram одной кнопкой (без сервера и API). */
(function () {
  "use strict";
  var doc = document, root = doc.documentElement, body = doc.body;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasIO = "IntersectionObserver" in window;

  function ready() { root.className += " js-ready"; }
  if (doc.fonts && doc.fonts.ready) { doc.fonts.ready.then(function () { setTimeout(ready, 40); }); setTimeout(ready, 1000); } else { ready(); }

  /* ---------- меню ---------- */
  var burger = $("#burger"), menu = $("#menu");
  function setMenu(open) {
    if (!burger || !menu) return;
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    menu.classList.toggle("open", open); menu.setAttribute("aria-hidden", open ? "false" : "true");
    body.classList.toggle("lock", open);
    var bars = $$("i", burger);
    if (bars.length === 3) {
      bars[0].style.transform = open ? "translateY(8px) rotate(45deg)" : "";
      bars[1].style.opacity = open ? "0" : "";
      bars[2].style.transform = open ? "translateY(-8px) rotate(-45deg)" : "";
    }
  }
  if (burger) burger.addEventListener("click", function () { setMenu(burger.getAttribute("aria-expanded") !== "true"); });
  $$("#menu nav a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  doc.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 1020) setMenu(false); });

  /* ---------- активный пункт, шапка, полоса прокрутки ---------- */
  var nav = $("#nav"), bar = $("#scrollbar"), links = $$("#navLinks a"), map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  if (hasIO) {
    var nio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { var a = map[e.target.id]; links.forEach(function (l) { l.classList.toggle("on", l === a); }); } });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { nio.observe(s); });
  }
  var earth = null;
  function onScroll() {
    var y = window.pageYOffset;
    if (nav) nav.classList.toggle("stuck", y > 20);
    if (bar) bar.style.setProperty("--p", Math.min(1, y / Math.max(1, root.scrollHeight - window.innerHeight)).toFixed(4));
    if (earth && !reduce) earth.setScroll(y * 0.0008);
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- появление блоков ---------- */
  if (hasIO) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    $$(".rv").forEach(function (el) { io.observe(el); });
  } else { root.className += " rv-all"; }

  /* ---------- цены «набегают» ---------- */
  function countUp(el) {
    var to = parseInt(el.getAttribute("data-n"), 10) || 0;
    if (reduce) { el.textContent = to; return; }
    var t0 = null;
    (function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / 1100, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 4)));
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }
  if (hasIO) {
    var cio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } }); }, { threshold: 0.7 });
    $$(".js-price").forEach(function (el) { el.textContent = "0"; cio.observe(el); });
  }

  /* ---------- FAQ ---------- */
  $$(".qa-q").forEach(function (b) {
    b.addEventListener("click", function () {
      var qa = b.closest(".qa"), open = !qa.classList.contains("open");
      qa.classList.toggle("open", open); b.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  var yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- глобус ---------- */
  function startEarth() {
    var cv = $("#earth");
    if (!cv || !window.YVEarth) return;
    try { earth = window.YVEarth.init(cv, $("#glLabels"), { reduce: reduce }); } catch (e) { earth = null; }
    if (!earth) cv.style.display = "none";
  }
  if (window.YVEarth) startEarth(); else window.addEventListener("load", startEarth);

  /* ---------- вход через Telegram ---------- */
  // Вход по кнопке: открывается окно Telegram, вы подтверждаете — сайт получает имя и фото. Ни сервера, ни API не нужно.
  // Один раз в @BotFather: /setdomain → @yarVpnRubot → yarvpn.best (иначе Telegram не покажет окно входа).
  var BOT_ID = 8519295857, BOT_URL = "https://t.me/yarVpnRubot", LS = "yarvpn_user";
  var loginBtn = $("#loginBtn"), note = $("#loginNote"), outBox = $("#loginOut"), inBox = $("#loginIn"), chip = $("#meChip"), top = $("#loginTop"), mob = $("#loginMenu");
  var widgetState = 0;   // 0 — не грузили, 1 — грузится, 2 — готов, 3 — не загрузился

  function loadWidget() {
    if (widgetState) return;
    widgetState = 1;
    var s = doc.createElement("script"); s.src = "https://telegram.org/js/telegram-widget.js?22"; s.async = true;
    s.onload = function () { widgetState = 2; };
    s.onerror = function () { widgetState = 3; };
    doc.head.appendChild(s);
  }
  function say(t) { if (!note) return; note.textContent = t || ""; note.hidden = !t; }
  function getUser() { try { var v = localStorage.getItem(LS); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function saveUser(u) { try { localStorage.setItem(LS, JSON.stringify(u)); } catch (e) { /* приватный режим */ } }
  function dropUser() { try { localStorage.removeItem(LS); } catch (e) { /* ignore */ } }

  function render(u) {
    if (!u) {
      if (outBox) outBox.hidden = false; if (inBox) inBox.hidden = true;
      if (chip) chip.classList.remove("on"); if (top) top.hidden = false;
      return;
    }
    var name = u.first_name || u.username || ("ID " + u.id);
    if (outBox) outBox.hidden = true; if (inBox) inBox.hidden = false;
    var ava = $("#whoAva");
    if (ava) {
      if (u.photo_url && /^https:\/\//.test(u.photo_url)) { var im = doc.createElement("img"); im.src = u.photo_url; im.alt = ""; im.width = 72; im.height = 72; im.referrerPolicy = "no-referrer"; im.id = "whoAva"; ava.replaceWith(im); }
      else ava.textContent = String(name).trim().charAt(0).toUpperCase() || "Y";
    }
    $("#whoName").textContent = [u.first_name, u.last_name].filter(Boolean).join(" ") || name;
    $("#whoUser").textContent = u.username ? "@" + u.username : "ID " + u.id;
    if (chip) { $("#meName").textContent = name; chip.classList.add("on"); }
    if (top) top.hidden = true;
  }

  function login() {
    say("");
    if (!window.Telegram || !window.Telegram.Login) {
      loadWidget();
      say(widgetState === 3 ? "Не удалось открыть окно Telegram. Откройте бота: t.me/yarVpnRubot" : "Окно входа загружается — нажмите кнопку ещё раз через секунду.");
      return;
    }
    window.Telegram.Login.auth({ bot_id: BOT_ID, request_access: "write", lang: "ru" }, function (u) {
      if (!u) { say("Вход отменён."); return; }
      saveUser({ id: u.id, first_name: u.first_name, last_name: u.last_name, username: u.username, photo_url: u.photo_url });
      render(getUser()); setMenu(false);
      var sec = $("#login"); if (sec && sec.scrollIntoView) sec.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    });
  }
  [loginBtn, top, mob].forEach(function (b) {
    if (!b) return;
    b.addEventListener("pointerenter", loadWidget); b.addEventListener("touchstart", loadWidget, { passive: true }); b.addEventListener("focus", loadWidget);
    b.addEventListener("click", function () { if (b !== loginBtn) { var sec = $("#login"); if (sec && !window.Telegram) sec.scrollIntoView({ behavior: "auto" }); } login(); });
  });
  var out = $("#logoutBtn"); if (out) out.addEventListener("click", function () { dropUser(); render(null); });
  if (hasIO && $("#login")) new IntersectionObserver(function (es, o) { if (es[0].isIntersecting) { loadWidget(); o.disconnect(); } }, { rootMargin: "800px 0px" }).observe($("#login"));
  window.addEventListener("storage", function (e) { if (e.key === LS) render(getUser()); });
  render(getUser());
})();
