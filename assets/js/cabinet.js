/* YarVpn — личный кабинет: вход через Telegram-бота (без паролей) и показ данных аккаунта.

   Как это работает:
     1) сайт просит у API бота одноразовый токен → бот отдаёт ссылку t.me/<бот>?start=web_<токен>
     2) человек открывает бота и нажимает «Да, это я» (бот при этом показывает устройство и IP запроса)
     3) сайт опрашивает статус; как только бот подтвердил — получает сессию (один раз) и грузит аккаунт
   Адрес API задаётся в <meta name="yarvpn-api"> в index.html (HTTPS обязателен — сайт на HTTPS). */
(function () {
  "use strict";

  var doc = document;
  function $(id) { return doc.getElementById(id); }
  function on(el, ev, fn) { if (el) el.addEventListener(ev, fn); }

  var metaApi = doc.querySelector('meta[name="yarvpn-api"]');
  var API = ((metaApi && metaApi.getAttribute("content")) || "").replace(/\/+$/, "");
  var BOT = "https://t.me/yarVpnRubot";
  var LS = "yarvpn_session";
  var memSession = null;

  /* ---------- хранилище сессии ---------- */
  function getSession() { try { return localStorage.getItem(LS) || memSession; } catch (e) { return memSession; } }
  function saveSession(s) { memSession = s; try { localStorage.setItem(LS, s); } catch (e) { /* режим инкогнито */ } }
  function clearSession() { memSession = null; try { localStorage.removeItem(LS); } catch (e) { /* ignore */ } }

  /* ---------- сеть ---------- */
  function api(path, o) {
    o = o || {};
    var h = {};
    if (o.auth) h.Authorization = "Bearer " + o.auth;
    return fetch(API + path, { method: o.method || "GET", headers: h, cache: "no-store" }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (j) { return { status: r.status, data: j || {} }; });
    });
  }

  /* ---------- элементы ---------- */
  var cabOut = $("cabOut"), cabIn = $("cabIn"), idle = $("loginIdle"), wait = $("loginWait"), noteEl = $("cabNote");
  var loginBtn = $("loginBtn"), meChip = $("meChip"), hdrCab = $("hdrCab");
  if (!cabOut || !cabIn) return;

  function note(text, kind, retry) {
    noteEl.className = "note" + (kind ? " " + kind : "");
    noteEl.textContent = text || "";
    if (text && retry) {
      var b = doc.createElement("button"); b.type = "button"; b.className = "linkbtn"; b.style.marginLeft = "10px"; b.textContent = "Повторить";
      b.addEventListener("click", retry); noteEl.appendChild(b);
    }
    noteEl.hidden = !text;
  }
  function showOut() {
    cabOut.hidden = false; cabIn.hidden = true; idle.hidden = false; wait.hidden = true;
    loginBtn.disabled = false; setChip(null);
  }
  function showWait() { idle.hidden = true; wait.hidden = false; }
  function showIn() { cabOut.hidden = true; cabIn.hidden = false; }
  function setChip(d) {
    if (!meChip) return;
    if (!d) { meChip.classList.remove("on"); if (hdrCab) hdrCab.hidden = false; return; }
    var name = d.first_name || d.username || ("ID " + d.id);
    $("meAva").textContent = String(name).trim().charAt(0).toUpperCase() || "Я";
    $("meName").textContent = name;
    meChip.classList.add("on"); if (hdrCab) hdrCab.hidden = true;
  }

  /* ---------- форматирование ---------- */
  function fmtMoney(v) { return Number(v || 0).toLocaleString("ru-RU", { minimumFractionDigits: 0, maximumFractionDigits: 2 }); }
  function fmtGb(v) { v = Number(v || 0); return (v >= 100 ? v.toFixed(0) : v.toFixed(1)).replace(/\.0$/, ""); }
  function fmtDate(ts) { try { return new Date(ts * 1000).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return ""; } }
  function plural(n, a, b, c) { n = Math.abs(n) % 100; var m = n % 10; if (n > 10 && n < 20) return c; if (m > 1 && m < 5) return b; if (m === 1) return a; return c; }
  function countTo(el, to, fmt) {
    var t0 = null, dur = 1000;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1), e = 1 - Math.pow(1 - p, 4);
      el.firstChild.nodeValue = fmt(to * e);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- вывод аккаунта ---------- */
  function renderAccount(d) {
    showIn(); note("");
    setChip(d);
    var name = d.first_name || d.username || ("ID " + d.id);
    $("cabAva").textContent = String(name).trim().charAt(0).toUpperCase() || "Я";
    $("cabName").textContent = name;
    $("cabUser").textContent = d.username ? "@" + d.username + " · ID " + d.id : "ID " + d.id;

    var bal = $("tBal"); bal.innerHTML = "<span>0</span><small>₽</small>";
    countTo(bal.firstChild, Number(d.balance) || 0, function (v) { return fmtMoney(Math.round(v * 100) / 100); });

    var sub = d.subscription, act = $("tSubAct"), meter = $("tMeter"), fill = $("tMeterI");
    act.innerHTML = ""; meter.hidden = true; fill.style.width = "0%";
    var linkBox = $("tLinkBox");
    function addBtn(label, href, cls) {
      var a = doc.createElement("a"); a.className = "btn btn-sm " + (cls || "btn-ghost"); a.href = href; a.target = "_blank"; a.rel = "noopener"; a.textContent = label; act.appendChild(a);
    }
    if (sub) {
      $("tSub").innerHTML = sub.left_days + "<small>" + plural(sub.left_days, "день", "дня", "дней") + "</small>";
      $("tSubS").textContent = "Активна до " + fmtDate(sub.expires_at);
      addBtn("Продлить в боте", BOT, "btn-primary");
      $("tDev").textContent = sub.devices || "—";
      var total = Number(sub.total_gb) || 0, used = sub.used_gb == null ? null : Number(sub.used_gb);
      if (total > 0 && used != null) {
        $("tTr").innerHTML = fmtGb(used) + "<small>из " + fmtGb(total) + " ГБ</small>";
        $("tTrS").textContent = "Осталось " + fmtGb(Math.max(0, total - used)) + " ГБ";
        meter.hidden = false;
        requestAnimationFrame(function () { requestAnimationFrame(function () { fill.style.width = Math.min(100, used / total * 100) + "%"; }); });
      } else if (total > 0) {
        $("tTr").innerHTML = fmtGb(total) + "<small>ГБ</small>"; $("tTrS").textContent = "Лимит трафика на срок подписки";
      } else { $("tTr").textContent = "—"; $("tTrS").textContent = ""; }
      if (sub.url) { $("tLink").textContent = sub.url; linkBox.hidden = false; } else { linkBox.hidden = true; }
    } else {
      $("tSub").textContent = "Нет"; $("tSubS").textContent = "Оформи тариф или активируй пробный период в боте.";
      addBtn("Открыть бота", BOT, "btn-primary");
      $("tDev").textContent = "—"; $("tTr").textContent = "—"; $("tTrS").textContent = "";
      linkBox.hidden = true;
    }
    $("tTrial").textContent = d.trial_used ? "Использован" : "Доступен";
    $("tTrialS").textContent = d.trial_used ? "Повторно не выдаётся" : "3 дня и 10 ГБ — в боте, кнопка «Пробный период»";

    $("tRef").textContent = d.referrals || 0;
    var parts = [];
    parts.push("подключили VPN: " + (d.referrals_activated || 0));
    if (d.referrals_paid != null) parts.push("разовые выплаты: " + d.referrals_paid + "/" + (d.referrals_paid_limit || 15));
    if (d.referrals_commission) parts.push("на комиссии: " + d.referrals_commission);
    $("tRefS").textContent = "приглашено друзей · " + parts.join(" · ");
    $("tRefLink").textContent = d.ref_link || "—";
    cabRefLink = d.ref_link || ""; cabSubLink = (sub && sub.url) || "";
  }
  var cabRefLink = "", cabSubLink = "";

  function loadAccount() {
    var s = getSession(); if (!s) { showOut(); return; }
    showIn(); $("cabGrid").style.opacity = ".45";
    api("/account", { auth: s }).then(function (res) {
      $("cabGrid").style.opacity = "";
      if (res.status === 401) { clearSession(); showOut(); note("Сессия истекла — войди ещё раз.", "info"); return; }
      if (res.status !== 200 || res.data.ok === false) throw new Error("http " + res.status);
      renderAccount(res.data);
    }).catch(function () {
      $("cabGrid").style.opacity = "";
      showOut(); note("Не удалось загрузить кабинет. Проверь соединение.", "", loadAccount);
    });
  }

  /* ---------- вход ---------- */
  var st = { token: null, timer: null, tick: null, until: 0, total: 300 };
  function stopLogin(msg, kind) {
    clearTimeout(st.timer); clearInterval(st.tick); st.token = null;
    showOut(); note(msg || "", kind);
  }
  function fmtTime(s) { s = Math.max(0, s); return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }
  function tickTimer() {
    var left = Math.round((st.until - Date.now()) / 1000);
    $("timerText").textContent = fmtTime(left);
    $("timerBar").style.transform = "scaleX(" + Math.max(0, Math.min(1, left / st.total)) + ")";
    if (left <= 0) stopLogin("Время подтверждения вышло — попробуй ещё раз.", "info");
  }
  function poll() {
    if (!st.token) return;
    var tk = st.token;
    api("/login/status/" + encodeURIComponent(tk)).then(function (res) {
      if (st.token !== tk) return;
      var d = res.data || {};
      if (d.status === "confirmed" && d.session) { saveSession(d.session); stopLogin(); loadAccount(); return; }
      if (d.status === "denied") { stopLogin("Вход отклонён в Telegram. Если это были не вы — ничего делать не нужно.", "info"); return; }
      if (d.status === "expired" || res.status === 404) { stopLogin("Ссылка устарела — попробуй ещё раз.", "info"); return; }
      st.timer = setTimeout(poll, 1600);
    }).catch(function () { st.timer = setTimeout(poll, 3500); });
  }
  function makeQr(link) {
    var box = $("qrBox"), wrap = $("loginQr");
    if (window.innerWidth < 720) { wrap.hidden = true; return; }   // на телефоне QR не нужен — кнопка откроет бота
    function draw() {
      try {
        var q = window.qrcode(0, "M"); q.addData(link); q.make();
        box.innerHTML = q.createSvgTag({ scalable: true, margin: 0 }).replace(/fill="black"/g, 'fill="#1c0a02"').replace(/fill="white"/g, 'fill="#f6eee5"');
        wrap.hidden = false;
      } catch (e) { wrap.hidden = true; }
    }
    if (window.qrcode) { draw(); return; }
    var sc = doc.createElement("script"); sc.src = "assets/js/qr.js?v=1"; sc.onload = draw; doc.head.appendChild(sc);
  }
  function startLogin() {
    note("");
    if (!API) { note("Личный кабинет временно недоступен."); return; }
    loginBtn.disabled = true;
    api("/login/start", { method: "POST" }).then(function (res) {
      if (res.status === 429) { loginBtn.disabled = false; note("Слишком много попыток входа. Подожди пару минут.", "info"); return; }
      if (res.status !== 200 || !res.data.token || !res.data.link) throw new Error("bad");
      st.token = res.data.token; st.total = res.data.expires_in || 300; st.until = Date.now() + st.total * 1000;
      $("loginLink").href = res.data.link;
      showWait(); makeQr(res.data.link); tickTimer();
      st.tick = setInterval(tickTimer, 1000); st.timer = setTimeout(poll, 1200);
    }).catch(function () { loginBtn.disabled = false; note("Не удалось связаться с сервером. Попробуй позже."); });
  }
  function logout() {
    var s = getSession(); clearSession(); showOut();
    if (s && API) { try { api("/logout", { method: "POST", auth: s }); } catch (e) { /* ignore */ } }
  }

  /* ---------- копирование ---------- */
  function copy(text, btn) {
    if (!text) return;
    function done() { var sp = btn.querySelector("span"), old = sp.textContent; sp.textContent = "Скопировано"; setTimeout(function () { sp.textContent = old; }, 1600); }
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(done, fallback); } else fallback();
    function fallback() {
      var t = doc.createElement("textarea"); t.value = text; t.style.position = "fixed"; t.style.opacity = "0"; doc.body.appendChild(t); t.select();
      try { doc.execCommand("copy"); done(); } catch (e) { /* ignore */ } doc.body.removeChild(t);
    }
  }

  on(loginBtn, "click", startLogin);
  on($("loginCancel"), "click", function () { stopLogin(); });
  on($("logoutBtn"), "click", logout);
  on($("cabRefresh"), "click", loadAccount);
  on($("copyLink"), "click", function () { copy(cabSubLink, this); });
  on($("copyRef"), "click", function () { copy(cabRefLink, this); });
  // вернулись во вкладку, пока ждём подтверждение — проверим сразу
  on(doc, "visibilitychange", function () { if (!doc.hidden && st.token) { clearTimeout(st.timer); poll(); } });
  // вход/выход в другой вкладке
  on(window, "storage", function (e) {
    if (e.key !== LS) return;
    if (e.newValue) { stopLogin(); loadAccount(); } else { showOut(); }
  });

  showOut();
  if (getSession() && API) loadAccount();
})();
