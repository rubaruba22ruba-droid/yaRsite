/* YarVpn — покупка тарифа на сайте БЕЗ входа: выбрали тариф → оплатили по СБП (RollyPay) → вернулись сюда → «Получить подписку в Telegram».
   Цену и лимиты тарифов страница берёт у бота (/api/web/buy/config) — сама цену не присылает, подменить её нельзя.
   Заказ привязывается к аккаунту Telegram, который откроет ссылку из кнопки (одноразово); токен заказа лежит только в адресе страницы и в браузере. */
(function () {
  "use strict";
  var doc = document;
  function $(id) { return doc.getElementById(id); }
  var LS = "yv_order";
  var API = "";
  var BOT = "https://t.me/yarVpnRubot";
  var polling = null;

  function getTok() { try { return localStorage.getItem(LS) || ""; } catch (e) { return ""; } }
  function setTok(t) { try { if (t) localStorage.setItem(LS, t); else localStorage.removeItem(LS); } catch (e) { /* приватный режим */ } }
  function validTok(t) { return /^[A-Za-z0-9_-]{20,48}$/.test(String(t || "")); }
  function note(text, kind, withBot) {
    var n = $("bNote"); if (!n) return;
    n.className = "note" + (kind ? " " + kind : ""); n.textContent = text || ""; n.hidden = !text;
    if (text && withBot) { var a = doc.createElement("a"); a.className = "btn btn-solid btn-sm"; a.href = BOT; a.target = "_blank"; a.rel = "noopener"; a.textContent = "Купить в боте"; a.style.marginLeft = "10px"; n.appendChild(a); }
  }
  function show(id, yes) { var e = $(id); if (e) e.hidden = !yes; }
  function fmtMoney(v) { return Number(v || 0).toLocaleString("ru-RU", { minimumFractionDigits: 0, maximumFractionDigits: 2 }); }
  function api(path, opt) {
    opt = opt || {};
    return fetch(API + path, { method: opt.method || "GET", headers: { "Content-Type": "application/json" }, body: opt.body ? JSON.stringify(opt.body) : undefined, cache: "no-store" })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { status: r.status, data: j || {} }; }); });
  }

  /* ---------- где живёт API (так же, как у кабинета: список адресов в api.json, берём первый ответивший) ---------- */
  var DEFAULT_API = ["https://yarvpn.duckdns.org:25273", "https://cab.yarvpn.best:25273", "https://api.yarvpn.best:25273"];
  function probeSameOrigin() {
    return fetch("/health", { cache: "no-store" }).then(function (r) { return r.ok ? r.text() : ""; }).then(function (t) { return t.trim() === "ok"; }).catch(function () { return false; });
  }
  function loadCfg() { return fetch("../api.json", { cache: "no-store" }).then(function (r) { return r.ok ? r.json() : {}; }).catch(function () { return {}; }); }
  function pingApi(base) {
    var ctl = typeof AbortController === "function" ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 7000);
    return fetch(base + "/api/web/ping", { cache: "no-store", signal: ctl ? ctl.signal : undefined })
      .then(function (r) { return r.ok ? r.json() : {}; }).then(function (j) { clearTimeout(timer); return !!(j && j.ok); })
      .catch(function () { clearTimeout(timer); return false; });
  }
  function pingAny(bases) {
    return new Promise(function (resolve) {
      var left = bases.length, done = false;
      bases.forEach(function (b) { pingApi(b).then(function (up) { if (done) return; if (up) { done = true; resolve(b); } else if (--left === 0) resolve(""); }); });
    });
  }
  function down(fallbackUrl) {
    var n = $("bNote"); n.className = "note info"; n.hidden = false; n.textContent = "Сервер оплаты сейчас не отвечает. Подождите минуту и нажмите «Повторить» — или купите тариф в боте.";
    var b = doc.createElement("button"); b.type = "button"; b.className = "btn btn-glass btn-sm"; b.textContent = "Повторить"; b.style.marginLeft = "10px"; b.addEventListener("click", function () { location.reload(); }); n.appendChild(b);
    var a = doc.createElement("a"); a.className = "btn btn-solid btn-sm"; a.href = BOT; a.target = "_blank"; a.rel = "noopener"; a.textContent = "Открыть бота"; a.style.marginLeft = "8px"; n.appendChild(a);
  }
  function boot() {
    note("Подключаемся…", "info");
    probeSameOrigin().then(function (same) {
      if (same) { API = ""; return start(); }
      return loadCfg().then(function (cfg) {
        var list = cfg.api ? [].concat(cfg.api).join(",").split(",") : DEFAULT_API;
        var bases = list.map(function (u) { return String(u).trim().replace(/\/+$/, ""); }).filter(function (u) { return /^https:\/\//.test(u); });
        if (location.protocol !== "https:") bases = [];
        if (!bases.length) return down(cfg.fallback);
        return pingAny(bases).then(function (base) { if (base) { API = base; return start(); } down(cfg.fallback); });
      });
    });
  }

  /* ---------- тарифы ---------- */
  function renderPlans(cfg) {
    var box = $("bPlans"); box.innerHTML = "";
    cfg.plans.forEach(function (p, i) {
      var art = doc.createElement("article"); art.className = "plan glass" + (p.key === "1m" ? " pop" : "");
      var top = doc.createElement("div"); top.className = "plan-top";
      var h = doc.createElement("h3"); h.className = "plan-name"; h.textContent = p.title; top.appendChild(h);
      if (p.key === "1m") { var bd = doc.createElement("span"); bd.className = "badge"; bd.textContent = "Популярный выбор"; top.appendChild(bd); }
      art.appendChild(top);
      var pr = doc.createElement("div"); pr.className = "plan-price"; pr.textContent = fmtMoney(p.price); var sup = doc.createElement("sup"); sup.textContent = "₽"; pr.appendChild(sup); art.appendChild(pr);
      var ul = doc.createElement("ul"); ul.className = "plan-spec";
      [String(p.gb) + " ГБ трафика", "До " + p.devices + " устройств"].forEach(function (s) { var li = doc.createElement("li"); li.textContent = s; ul.appendChild(li); });
      art.appendChild(ul);
      var btn = doc.createElement("button"); btn.type = "button"; btn.className = "btn btn-block " + (p.key === "1m" ? "btn-solid" : "btn-glass"); btn.textContent = "Оплатить по СБП";
      btn.addEventListener("click", function () { pay(p.key, btn); }); art.appendChild(btn);
      box.appendChild(art);
    });
    show("bPlans", true);
  }
  function showPlans() {
    stopPolling(); show("bOrder", false); note("");
    api("/api/web/buy/config").then(function (res) {
      if (res.status !== 200 || !res.data.ok) { down(); return; }
      if (!res.data.enabled || !res.data.plans.length) { show("bPlans", false); note("Оплата на сайте скоро заработает. Сейчас купить тариф можно в боте.", "info", true); return; }
      renderPlans(res.data);
    }).catch(function () { down(); });
  }
  function pay(plan, btn) {
    note(""); btn.disabled = true; var old = btn.textContent; btn.textContent = "Создаём счёт…";
    api("/api/web/buy/create", { method: "POST", body: { plan: plan } }).then(function (res) {
      btn.disabled = false; btn.textContent = old;
      if (res.status !== 200 || !res.data.ok) { note(res.data.message || "Не удалось создать счёт. Попробуйте позже или купите тариф в боте.", "info"); return; }
      if (!/^https:\/\//i.test(String(res.data.pay_url || "")) || !validTok(res.data.token)) { note("Не удалось создать счёт. Попробуйте позже.", "info"); return; }
      setTok(res.data.token);
      location.href = res.data.pay_url;               // страница оплаты СБП; после оплаты RollyPay вернёт сюда: /buy/?o=<заказ>
    }).catch(function () { btn.disabled = false; btn.textContent = old; note("Нет связи с сервером.", "info"); });
  }

  /* ---------- заказ ---------- */
  function stopPolling() { if (polling) { clearInterval(polling); polling = null; } }
  function setOrder(title, text, buttons) {
    show("bPlans", false); show("bOrder", true);
    $("bTitle").textContent = title; $("bText").textContent = text;
    var box = $("bBtns"); box.innerHTML = "";
    (buttons || []).forEach(function (b) { box.appendChild(b); });
  }
  function link(text, href, solid) { var a = doc.createElement("a"); a.className = "btn btn-lg " + (solid ? "btn-solid" : "btn-glass"); a.href = href; a.target = "_blank"; a.rel = "noopener"; a.textContent = text; return a; }
  function button(text, fn) { var b = doc.createElement("button"); b.type = "button"; b.className = "btn btn-glass btn-lg"; b.textContent = text; b.addEventListener("click", fn); return b; }
  function again() { setTok(""); history.replaceState(null, "", location.pathname); showPlans(); }
  function showOrder(token) {
    note(""); setOrder("Ждём оплату…", "Если вы уже оплатили по СБП — подтверждение приходит за несколько секунд, страница обновится сама.", [button("Выбрать другой тариф", again)]);
    var tries = 0;
    function check() {
      tries++;
      if (tries > 450) { stopPolling(); setOrder("Время ожидания вышло", "Если вы уже оплатили — не переживайте: деньги не пропадут. Обновите страницу через минуту.", [button("Обновить", function () { location.reload(); })]); return; }
      api("/api/web/buy/status/" + encodeURIComponent(token)).then(function (res) {
        if (res.status === 404) { stopPolling(); setTok(""); showPlans(); note("Заказ не найден — выберите тариф заново.", "info"); return; }
        var d = res.data; if (!d || !d.ok) return;
        var title = d.plan && d.plan.title ? d.plan.title + " · " + fmtMoney(d.plan.price) + " ₽" : "";
        if (d.status === "paid") {
          setOrder("✅ Оплата получена" + (title ? " · " + title : ""), "Осталось получить подписку: откройте бота — он выдаст ссылку и QR-код. Заказ привяжется к тому аккаунту Telegram, который откроет эту ссылку (один раз).",
            [link("Получить подписку в Telegram", d.bot_link || BOT, true)]);
        } else if (d.status === "claimed") {
          stopPolling(); setTok("");
          setOrder("🎉 Готово — подписка выдана", "Ссылка подписки и QR-код — в чате с ботом. Подключите их в приложении (Happ на iPhone и Mac, v2rayNG на Android, v2rayN на Windows).",
            [link("Открыть бота", BOT, true), button("Купить ещё", again)]);
        } else if (d.status === "expired") {
          stopPolling(); setTok(""); setOrder("Счёт истёк", "Срок оплаты вышел, деньги не списаны. Выберите тариф и создайте счёт заново.", [button("Выбрать тариф", again)]);
        } else {
          setOrder("Ждём оплату…" + (title ? " · " + title : ""), "Если вы уже оплатили по СБП — подтверждение приходит за несколько секунд, страница обновится сама. Не закрывайте страницу.", [button("Выбрать другой тариф", again)]);
        }
      }).catch(function () { /* сеть моргнула — следующий опрос */ });
    }
    check(); polling = setInterval(check, 4000);
  }

  function start() {
    note("");
    var q = ""; try { q = new URLSearchParams(location.search).get("o") || ""; } catch (e) { /* старый браузер */ }
    var tok = validTok(q) ? q : getTok();
    if (validTok(tok)) { setTok(tok); showOrder(tok); } else showPlans();
  }
  boot();
})();
