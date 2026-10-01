/* YarVpn — первый скрипт на каждой странице. Он внешний (не встроенный в HTML), чтобы страницы работали со строгой политикой CSP без 'unsafe-inline' для скриптов.
   Делает четыре вещи:
   1) на боевом домене — только HTTPS;
   2) защита от встраивания сайта в чужую страницу (clickjacking): заголовок X-Frame-Options на GitHub Pages поставить нельзя;
   3) включает классы для анимаций появления блоков (с запасным таймером, чтобы контент не остался скрытым);
   4) если из кэша открылась устаревшая копия страницы — один раз перезагружает её (сверка с build.json). */
(function () {
  "use strict";
  var BUILD = 20, d = document, root = d.documentElement, loc = location;
  var me = d.currentScript;

  if (loc.protocol === "http:" && /(^|\.)yarvpn\.best$/.test(loc.hostname)) {
    loc.replace("https://" + loc.host + loc.pathname + loc.search + loc.hash);
    return;
  }
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
