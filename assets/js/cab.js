/* YarVpn — личный кабинет: вход по логину (Telegram ID) и паролю (из «Профиля» бота или свой — любой, 4–16 знаков), данные аккаунта, пополнение баланса (Crypto Pay и TON).
   Работает БЕЗ воркеров и прокси: страницу кабинета отдаёт сам бот, поэтому сайт и API — на одном адресе.
   Если страница лежит на обычном хостинге (GitHub Pages), она сама переходит в кабинет на сервере бота (адрес — в api.json, поле "cabinet"). */
(function () {
  "use strict";
  var doc = document;
  function $(id) { return doc.getElementById(id); }
  function on(el, ev, fn) { if (el) el.addEventListener(ev, fn); }

  var LS = "yv_cab_session";
  var API = "";                 // "" — тот же адрес, откуда открыта страница
  var session = "";
  var BOT = "https://t.me/yarVpnRubot";
  var polling = null;

  function getSession() { try { return localStorage.getItem(LS) || session; } catch (e) { return session; } }
  function saveSession(s) { session = s; try { localStorage.setItem(LS, s); } catch (e) { /* приватный режим */ } }
  function clearSession() { session = ""; try { localStorage.removeItem(LS); } catch (e) { /* ignore */ } }

  function note(text, kind) {
    var n = $("cNote"); if (!n) return;
    n.className = "note" + (kind ? " " + kind : ""); n.textContent = text || ""; n.hidden = !text;
  }
  function show(id, yes) { var e = $(id); if (e) e.hidden = !yes; }

  function api(path, opt) {
    opt = opt || {};
    var h = { "Content-Type": "application/json" };
    var s = getSession(); if (s && opt.auth !== false) h.Authorization = "Bearer " + s;
    return fetch(API + path, { method: opt.method || "GET", headers: h, body: opt.body ? JSON.stringify(opt.body) : undefined, cache: "no-store" })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { status: r.status, data: j || {} }; }); });
  }

  /* ---------- где живёт API ----------
     Кабинет всегда открывается на сайте (yarvpn.best). Данные берутся у бота по HTTPS-адресу cab.yarvpn.best:25273 (запасной — api.yarvpn.best:25273; список в api.json, поле "api"); сертификат бот получает и продлевает сам.
     Если страницу отдал сам бот (тот же адрес) — работаем с ним напрямую. Переход на другой адрес — только если в api.json задано поле "cabinet". */
  var DEFAULT_API = ["https://cab.yarvpn.best:25273", "https://api.yarvpn.best:25273"];
  function probeSameOrigin() {
    return fetch("/health", { cache: "no-store" }).then(function (r) { return r.ok ? r.text() : ""; }).then(function (t) { return t.trim() === "ok"; }).catch(function () { return false; });
  }
  function loadCfg() {
    return fetch("../api.json", { cache: "no-store" }).then(function (r) { return r.ok ? r.json() : {}; }).catch(function () { return {}; });
  }
  function pingApi(base) {
    var ctl = typeof AbortController === "function" ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 7000);
    return fetch(base + "/api/web/ping", { cache: "no-store", signal: ctl ? ctl.signal : undefined })
      .then(function (r) { return r.ok ? r.json() : {}; }).then(function (j) { clearTimeout(timer); return !!(j && j.ok); })
      .catch(function () { clearTimeout(timer); return false; });
  }
  /* DNS-диагностика: спрашиваем публичный DNS-over-HTTPS, есть ли у имён сервера адрес. Если есть — сервер жив, а проблема в DNS именно этого устройства. */
  function dohHasA(host) {
    return fetch("https://cloudflare-dns.com/dns-query?name=" + encodeURIComponent(host) + "&type=A", { headers: { accept: "application/dns-json" }, cache: "no-store" })
      .then(function (r) { return r.json(); }).then(function (j) { return !!(j && j.Answer && j.Answer.some(function (a) { return a.type === 1; })); })
      .catch(function () { return null; });
  }
  function showDown(bases, fallbackUrl) {
    bases = bases || [];
    var n = $("cNote"); if (!n) return;
    n.className = "note info"; n.hidden = false; n.textContent = "";
    var txt = doc.createElement("span");
    txt.textContent = "Сервер кабинета сейчас не отвечает. Баланс и подписка в боте при этом не затронуты. Подождите минуту и нажмите «Повторить», либо откройте бота.";
    n.appendChild(txt);
    var b = doc.createElement("button"); b.type = "button"; b.className = "btn btn-glass btn-sm"; b.textContent = "Повторить"; b.style.marginLeft = "12px";
    b.addEventListener("click", function () { location.reload(); }); n.appendChild(b);
    var fb = String(fallbackUrl || "").replace(/\/+$/, "");
    if (fb) {
      var f = doc.createElement("a"); f.className = "btn btn-solid btn-sm"; f.href = fb + "/cabinet/"; f.rel = "noopener"; f.textContent = "Запасной вход"; f.style.marginLeft = "8px";
      f.title = "Кабинет на адресе сервера бота (без шифрования)"; n.appendChild(f);
    }
    if (bases[0]) {
      var a = doc.createElement("a"); a.className = "btn btn-glass btn-sm"; a.href = bases[0] + "/api/web/ping"; a.target = "_blank"; a.rel = "noopener"; a.textContent = "Проверить связь"; a.style.marginLeft = "8px";
      n.appendChild(a);
      Promise.all(bases.map(function (u) { return dohHasA(u.replace(/^https:\/\//, "").replace(/[:\/].*$/, "")); })).then(function (res) {
        if (res.some(function (x) { return x === true; })) {
          txt.textContent = "Сервер кабинета работает — его адрес есть в интернете, но ваше устройство (или оператор связи) пока его не находит: это кэш DNS, обычно проходит за 10–30 минут. " +
            "Быстрый способ: включите VPN или Wi‑Fi и нажмите «Повторить» — или войдите через «Запасной вход» (адрес сервера бота, соединение без шифрования).";
        }
      });
    }
  }
  function pingAny(bases) {
    return new Promise(function (resolve) {
      var left = bases.length, done = false;
      bases.forEach(function (b) {
        pingApi(b).then(function (up) {
          if (done) return;
          if (up) { done = true; resolve(b); } else if (--left === 0) resolve("");
        });
      });
    });
  }
  function boot() {
    note("Подключаемся к кабинету…", "info");
    probeSameOrigin().then(function (same) {
      if (same) { API = ""; return start(); }
      return loadCfg().then(function (cfg) {
        /* api в api.json — один адрес или список; страница проверяет все сразу и берёт тот, что ответил (у одного имени у конкретного телефона DNS может запаздывать) */
        var list = cfg.api ? [].concat(cfg.api).join(",").split(",") : DEFAULT_API;
        list = list.map(function (u) { return String(u).trim(); }).filter(Boolean);
        var bases = list.map(function (u) { return String(u).replace(/\/+$/, ""); }).filter(function (u) { return /^https:\/\//.test(u); });
        if (location.protocol !== "https:") bases = [];
        var cab = String(cfg.cabinet || "").replace(/\/+$/, "");
        function fallback() {
          if (cab && cab.replace(/^https?:\/\//, "") !== location.host) { note("Открываем кабинет на сервере бота…", "info"); location.replace(cab + "/cabinet/"); return; }
          showDown(bases, cfg.fallback);
        }
        if (!bases.length) return fallback();
        return pingAny(bases).then(function (base) { if (base) { API = base; return start(); } fallback(); });
      });
    });
  }

  /* ---------- форматирование ---------- */
  function fmtMoney(v) { return Number(v || 0).toLocaleString("ru-RU", { minimumFractionDigits: 0, maximumFractionDigits: 2 }); }
  function fmtGb(v) { v = Number(v || 0); return (v >= 100 ? v.toFixed(0) : v.toFixed(1)).replace(/\.0$/, ""); }
  function fmtDate(ts) { try { return new Date(ts * 1000).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return ""; } }
  function fmtAt(ts) { try { return new Date(ts * 1000).toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }); } catch (e) { return ""; } }

  /* ---------- вход ---------- */
  function showLogin() { stopPolling(); show("cLogin", true); show("cDash", false); var b = $("loginBtn"); if (b) b.disabled = false; }
  function showDash() { show("cLogin", false); show("cDash", true); }

  function login(e) {
    e.preventDefault(); note("");
    var id = $("fLogin").value.replace(/\D/g, ""), pw = $("fPass").value.replace(/^\s+|\s+$/g, "");
    if (id.length < 3) { note("Введите свой Telegram ID — он в боте: Профиль → «Вход на сайт».", "info"); return; }
    if (!pw) { note("Введите пароль — он в боте: Профиль → «Вход на сайт».", "info"); return; }
    var btn = $("loginBtn"); btn.disabled = true;
    api("/api/web/login", { method: "POST", auth: false, body: { login: id, password: pw } }).then(function (res) {
      btn.disabled = false;
      if (res.status === 200 && res.data.session) { saveSession(res.data.session); $("fPass").value = ""; $("pwUser").value = id; loadAccount(); return; }
      if (res.status === 429) note(res.data.error === "locked" ? "Слишком много неверных попыток. Подождите 15 минут или возьмите новый пароль в боте." : "Слишком много попыток. Подождите несколько минут.", "info");
      else note("Неверный логин или пароль. Проверьте данные в боте: Профиль → «Вход на сайт».", "info");
    }).catch(function () { btn.disabled = false; note("Нет связи с сервером. Попробуйте ещё раз.", "info"); });
  }
  function changePassword(e) {
    e.preventDefault();
    var msg = $("pwMsg"), cur = $("pwCur").value, nw = $("pwNew").value, btn = $("pwSave");
    function say(t, ok) { msg.hidden = !t; msg.textContent = t || ""; msg.className = "sub" + (ok ? " ok" : ""); }
    say("");
    nw = nw.replace(/^\s+|\s+$/g, "");
    if (!cur) { say("Введите текущий пароль."); return; }
    if (nw.length < 4) { say("Новый пароль — минимум 4 знака."); return; }
    if (nw.length > 16) { say("Новый пароль — максимум 16 знаков."); return; }
    btn.disabled = true;
    api("/api/web/password", { method: "POST", body: { current: cur, new: nw } }).then(function (res) {
      btn.disabled = false;
      if (res.status === 401) { clearSession(); showLogin(); note("Сессия закончилась. Войдите снова.", "info"); return; }
      if (res.status === 200 && res.data.session) { saveSession(res.data.session); $("pwCur").value = ""; $("pwNew").value = ""; say("✅ Пароль сохранён. Остальные устройства вышли из кабинета.", true); return; }
      say(res.data.message || "Не удалось сохранить пароль. Попробуйте ещё раз.");
    }).catch(function () { btn.disabled = false; say("Нет связи с сервером."); });
  }
  function logout() {
    var s = getSession(); clearSession(); showLogin();
    if (s) api("/api/web/logout", { method: "POST" }).catch(function () { /* ignore */ });
  }

  /* ---------- аккаунт ---------- */
  var refLink = "";
  function renderAccount(d) {
    showDash(); note(""); $("pwUser").value = d.id;
    var name = d.first_name || d.username || ("ID " + d.id);
    $("cAva").textContent = String(name).trim().charAt(0).toUpperCase() || "Y";
    $("cName").textContent = name;
    $("cUser").textContent = d.username ? "@" + d.username + " · ID " + d.id : "ID " + d.id;
    $("tBal").innerHTML = fmtMoney(d.balance) + "<small>₽</small>";
    var sub = d.subscription, act = $("tSubAct"), meter = $("tMeter"), fill = $("tMeterI"), box = $("tLinkBox");
    act.innerHTML = ""; meter.hidden = true; fill.style.width = "0%";
    function addBtn(label, href, cls) { var a = doc.createElement("a"); a.className = "btn btn-sm " + (cls || "btn-glass"); a.href = href; a.target = "_blank"; a.rel = "noopener"; a.textContent = label; act.appendChild(a); }
    if (sub) {
      $("tSub").innerHTML = sub.left_days + "<small>дн.</small>"; $("tSubS").textContent = "активна до " + fmtDate(sub.expires_at);
      addBtn("Продлить в боте", d.bot || BOT, "btn-solid"); $("tDev").textContent = sub.devices || "—";
      var total = Number(sub.total_gb) || 0, used = sub.used_gb == null ? null : Number(sub.used_gb);
      if (total > 0 && used != null) {
        $("tTr").innerHTML = fmtGb(used) + "<small>из " + fmtGb(total) + " ГБ</small>"; $("tTrS").textContent = "Использовано " + used.toFixed(1) + " из " + total + " ГБ";
        meter.hidden = false; requestAnimationFrame(function () { requestAnimationFrame(function () { fill.style.width = Math.min(100, used / total * 100) + "%"; }); });
      } else if (total > 0) { $("tTr").innerHTML = fmtGb(total) + "<small>ГБ</small>"; $("tTrS").textContent = "Лимит трафика: " + total + " ГБ"; }
      else { $("tTr").textContent = "—"; $("tTrS").textContent = ""; }
      if (sub.url) { $("tLink").textContent = sub.url; box.hidden = false; } else box.hidden = true;
    } else {
      $("tSub").textContent = "Нет"; $("tSubS").textContent = "оформите подписку в боте"; addBtn("Открыть бота", d.bot || BOT, "btn-solid");
      $("tDev").textContent = "—"; $("tTr").textContent = "—"; $("tTrS").textContent = ""; box.hidden = true;
    }
    $("tTrial").textContent = d.trial_used ? "Использован" : "Доступен";
    $("tRef").textContent = d.referrals || 0;
    var s = "подключили VPN: " + (d.referrals_activated || 0);
    if (d.referrals_paid != null) s += " · разовые выплаты: " + d.referrals_paid + "/" + (d.referrals_paid_limit || 15);
    if (d.referrals_commission) s += " · на комиссии: " + d.referrals_commission;
    $("tRefS").textContent = s; $("tRefLink").textContent = d.ref_link || "—"; refLink = d.ref_link || "";
    var bonus = $("payBonus");
    if (d.deposit_bonus) { bonus.hidden = false; bonus.textContent = "🎁 У вас активен бонус +" + d.deposit_bonus + "% к пополнению — он применится автоматически."; } else bonus.hidden = true;
    renderHistory(d.topups || []);
  }
  function renderHistory(list) {
    var ul = $("payHistList"); ul.innerHTML = "";
    var names = { paid: "зачислено", active: "ожидает оплаты", expired: "истёк", canceled: "отменён" };
    list.forEach(function (t) {
      var li = doc.createElement("li");
      var a = doc.createElement("span"); a.textContent = fmtAt(t.at) + " · " + t.method;
      var b = doc.createElement("b"); b.textContent = fmtMoney(t.amount) + " ₽";
      var c = doc.createElement("em"); c.textContent = names[t.status] || t.status; c.className = "st-" + t.status;
      li.appendChild(a); li.appendChild(b); li.appendChild(c); ul.appendChild(li);
    });
    show("payHist", list.length > 0);
  }
  function loadAccount(fresh) {
    if (!getSession()) { showLogin(); return; }
    showDash(); $("cGrid").style.opacity = ".55";
    api("/api/web/account" + (fresh ? "?fresh=1" : "")).then(function (res) {
      $("cGrid").style.opacity = "";
      if (res.status === 401) { clearSession(); showLogin(); note("Сессия закончилась. Войдите снова.", "info"); return; }
      if (res.status !== 200 || res.data.ok === false) throw new Error("http " + res.status);
      renderAccount(res.data); loadPayConfig();
    }).catch(function () { $("cGrid").style.opacity = ""; note("Не удалось загрузить данные. Нажмите «Обновить» чуть позже.", "info"); });
  }

  /* ---------- пополнение ---------- */
  var limits = { min: 25, max: 50000 }, methodsLoaded = false;
  function loadPayConfig() {
    if (methodsLoaded) return;
    api("/api/web/pay/config").then(function (res) {
      if (res.status !== 200 || !res.data.ok) return;
      methodsLoaded = true; limits.min = res.data.min; limits.max = res.data.max;
      $("payLimits").textContent = "От " + res.data.min + " до " + fmtMoney(res.data.max) + " ₽. Деньги зачисляются сами, обычно за 1–2 минуты.";
      var box = $("payMethods"); box.innerHTML = "";
      res.data.methods.forEach(function (m, i) {
        var b = doc.createElement("button"); b.type = "button"; b.className = "btn btn-lg " + (i === 0 ? "btn-solid" : "btn-glass"); b.textContent = m.label; b.setAttribute("data-method", m.key);
        b.addEventListener("click", function () { startPay(m.key, b); }); box.appendChild(b);
      });
      if (!res.data.methods.length) box.textContent = "Пополнение сейчас недоступно — попробуйте позже.";
    });
    var am = $("payAmounts"); am.innerHTML = "";
    [100, 200, 500, 1000].forEach(function (v) {
      var b = doc.createElement("button"); b.type = "button"; b.className = "chip-btn"; b.textContent = v + " ₽";
      b.addEventListener("click", function () { $("payAmount").value = String(v); }); am.appendChild(b);
    });
  }
  function stopPolling() { if (polling) { clearInterval(polling); polling = null; } }
  function copyText(text, btn) {
    if (!text) return;
    function done() { if (!btn) return; var o = btn.textContent; btn.textContent = "Скопировано"; setTimeout(function () { btn.textContent = o; }, 1500); }
    function fallback() { var t = doc.createElement("textarea"); t.value = text; t.style.position = "fixed"; t.style.opacity = "0"; doc.body.appendChild(t); t.select(); try { doc.execCommand("copy"); done(); } catch (e) { /* ignore */ } doc.body.removeChild(t); }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
  }
  function line(label, value, copyable) {
    var row = doc.createElement("div"); row.className = "kv";
    var l = doc.createElement("span"); l.textContent = label; var v = doc.createElement("code"); v.textContent = value; row.appendChild(l); row.appendChild(v);
    if (copyable) { var b = doc.createElement("button"); b.type = "button"; b.className = "btn btn-glass btn-sm"; b.textContent = "Копировать"; b.addEventListener("click", function () { copyText(value, b); }); row.appendChild(b); }
    return row;
  }
  function startPay(method, btn) {
    note(""); stopPolling();
    var amount = parseFloat(String($("payAmount").value).replace(",", "."));
    if (!isFinite(amount) || amount < limits.min) { note("Минимальная сумма пополнения — " + limits.min + " ₽.", "info"); return; }
    if (amount > limits.max) { note("Максимальная сумма за один раз — " + fmtMoney(limits.max) + " ₽.", "info"); return; }
    btn.disabled = true;
    api("/api/web/pay/create", { method: "POST", body: { method: method, amount: amount } }).then(function (res) {
      btn.disabled = false;
      if (res.status === 401) { clearSession(); showLogin(); return; }
      if (res.status !== 200 || !res.data.ok) { note(res.data.message || "Не удалось создать счёт. Попробуйте позже.", "info"); return; }
      renderPayOut(res.data); watch(res.data.invoice_id);
    }).catch(function () { btn.disabled = false; note("Нет связи с сервером.", "info"); });
  }
  function renderPayOut(p) {
    var out = $("payOut"); out.innerHTML = ""; out.hidden = false;
    var h = doc.createElement("h3"); h.textContent = p.method === "crypto" ? "Оплатите счёт в @CryptoBot" : "Переведите TON"; out.appendChild(h);
    var st = doc.createElement("p"); st.className = "sub"; st.id = "payState"; st.textContent = "Ждём оплату… (страницу можно не закрывать — зачисление автоматическое)";
    if (p.method === "crypto") {
      var t = doc.createElement("p"); t.className = "sub"; t.textContent = "Сумма: " + fmtMoney(p.amount) + " ₽. Монету (USDT, TON, BTC и др.) выберете при оплате."; out.appendChild(t);
      var a = doc.createElement("a"); a.className = "btn btn-solid btn-lg"; a.href = p.pay_url; a.target = "_blank"; a.rel = "noopener"; a.textContent = "Оплатить в Crypto Pay"; out.appendChild(a);
    } else {
      out.appendChild(line("Сумма", p.amount_ton + " TON", true)); out.appendChild(line("Адрес", p.address, true)); out.appendChild(line("Комментарий", p.comment, true));
      var w = doc.createElement("p"); w.className = "sub"; w.textContent = "Комментарий обязателен — по нему мы находим платёж. Сумма ≈ " + fmtMoney(p.amount) + " ₽."; out.appendChild(w);
      var a2 = doc.createElement("a"); a2.className = "btn btn-solid btn-lg"; a2.href = p.pay_url; a2.target = "_blank"; a2.rel = "noopener"; a2.textContent = "Открыть в TonKeeper"; out.appendChild(a2);
    }
    out.appendChild(st);
    out.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function watch(invoiceId) {
    var tries = 0;
    polling = setInterval(function () {
      tries++;
      if (tries > 450) { stopPolling(); var s = $("payState"); if (s) s.textContent = "Время ожидания вышло. Если вы уже оплатили — деньги придут сами, обновите страницу позже."; return; }
      api("/api/web/pay/status/" + encodeURIComponent(invoiceId)).then(function (res) {
        if (res.status === 401) { stopPolling(); clearSession(); showLogin(); return; }
        var st = $("payState"); if (!st || !res.data.ok) return;
        if (res.data.paid) { stopPolling(); st.textContent = "✅ Оплата получена! Баланс: " + fmtMoney(res.data.balance) + " ₽."; st.className = "sub ok"; loadAccount(true); }
        else if (res.data.status === "expired" || res.data.status === "canceled") { stopPolling(); st.textContent = "Счёт закрыт (истёк срок). Создайте новый."; }
      }).catch(function () { /* сеть моргнула — следующий опрос */ });
    }, 4000);
  }

  function start() {
    note("");
    var form = $("loginForm");
    on(form, "submit", login);
    on($("pwForm"), "submit", changePassword);
    on($("pwShow"), "click", function () { var i = $("fPass"), hid = i.type === "password"; i.type = hid ? "text" : "password"; this.textContent = hid ? "Скрыть" : "Показать"; });
    on($("cLogout"), "click", logout);
    on($("cRefresh"), "click", function () { loadAccount(true); });
    Array.prototype.forEach.call(doc.querySelectorAll("[data-copy]"), function (b) { on(b, "click", function () { copyText($(b.getAttribute("data-copy")).textContent, b); }); });
    var pa = $("payAmount"); on(pa, "input", function () { pa.value = pa.value.replace(/[^\d.,]/g, ""); });
    if (getSession()) loadAccount(); else showLogin();
  }

  boot();
})();
