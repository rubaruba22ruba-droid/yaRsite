/* YarVpn — первый скрипт на каждой странице. Он внешний (не встроенный в HTML), чтобы страницы работали со строгой политикой CSP без 'unsafe-inline' для скриптов.
   Делает четыре вещи:
   1) на боевом домене открытая по http страница переходит на HTTPS, а если у сайта нет действующего сертификата — на запасной HTTPS-адрес бота
      (тот же сайт, свой сертификат), чтобы человек не упёрся в ошибку сертификата;
   2) защита от встраивания сайта в чужую страницу (clickjacking): заголовок X-Frame-Options на GitHub Pages поставить нельзя;
   3) включает классы для анимаций появления блоков (с запасным таймером, чтобы контент не остался скрытым);
   4) если из кэша открылась устаревшая копия страницы — один раз перезагружает её (сверка с build.json). */
(function () {
  "use strict";
  var BUILD = 24, d = document, root = d.documentElement, loc = location;
  var me = d.currentScript;

  function goSecure() {
    var tail = loc.pathname + loc.search + loc.hash;
    function go(base) { loc.replace(base + tail); }
    function mirror() {
      fetch("/api.json?" + Date.now(), { cache: "no-store" }).then(function (r) { return r.json(); }).then(function (j) {
        var list = [].concat((j && j.api) || []).join(",").split(",").map(function (x) { return x.trim().replace(/\/+$/, ""); });
        var done = false;
        list.filter(function (x) { return /^https:\/\//.test(x); }).forEach(function (origin) {          // пробуем все адреса бота сразу, берём первый ответивший
          fetch(origin + "/api/web/ping", { mode: "no-cors", cache: "no-store" }).then(function () { if (!done) { done = true; go(origin); } }, function () { /* этот адрес недоступен */ });
        });
      }).catch(function () { /* нет связи */ });
    }
    try { fetch("https://" + loc.host + "/build.json?" + Date.now(), { mode: "no-cors", cache: "no-store" }).then(function () { go("https://" + loc.host); }, mirror); }
    catch (e) { /* старый браузер */ }
  }
  if (loc.protocol === "http:" && /(^|\.)yarvpn\.best$/.test(loc.hostname)) goSecure();
  if (window.top !== window.self) {                  // нас встроили в чужую страницу: прячем содержимое и пробуем выйти из рамки
    root.style.display = "none";
    try { window.top.location = loc.href; } catch (e) { /* браузер может запретить — тогда страница так и остаётся скрытой */ }
    return;
  }

  var ready = me && me.getAttribute("data-ready") === "1";
  root.className += " js" + (ready ? " js-ready" : "");
  var reveal = me ? Number(me.getAttribute("data-reveal")) : 0;
  setTimeout(function () { root.className += " rv-all"; }, reveal > 0 ? reveal : 4000);

  try {
    var url = new URL("../../build.json", me && me.src ? me.src : loc.href);
    fetch(url.href + "?" + Date.now(), { cache: "no-store" }).then(function (r) { return r.json(); }).then(function (j) {
      if (j && j.build && j.build !== BUILD) {
        var k = "yv_reloaded_" + j.build;
        if (!sessionStorage.getItem(k)) { sessionStorage.setItem(k, "1"); loc.reload(); }
      }
    }).catch(function () { /* нет связи — ничего страшного */ });
  } catch (e) { /* старый браузер */ }
})();
