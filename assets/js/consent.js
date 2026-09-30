/* YarVpn — уведомление о хранении данных в браузере и (по желанию) статистика.
   Чтобы включить Яндекс Метрику: создайте счётчик на metrika.yandex.ru и впишите его номер в YM_ID (например 12345678).
   Пока YM_ID = 0, статистика НЕ подключена, сайт ничего не отслеживает. Когда номер указан, Метрика загружается только после нажатия «Принять». */
(function () {
  "use strict";
  var YM_ID = 0;

  var KEY = "yarvpn_consent", doc = document;
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function put(v) { try { localStorage.setItem(KEY, v); } catch (e) { /* приватный режим */ } }

  function metrika() {
    if (!YM_ID || window.ym) return;
    (function (m, e, t, r, i, k, a) {
      m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); }; m[i].l = 1 * new Date();
      k = e.createElement(t); a = e.getElementsByTagName(t)[0]; k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
    })(window, doc, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    window.ym(YM_ID, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true });
  }

  var saved = get();
  if (saved === "yes") metrika();
  if (saved) return;

  var inSub = /\/(privacy|terms|cabinet)\/?$/.test(location.pathname);
  var policy = (inSub ? "../" : "") + "privacy/";

  var box = doc.createElement("div");
  box.className = "consent"; box.setAttribute("role", "dialog"); box.setAttribute("aria-label", "Cookie и хранение данных");
  var p = doc.createElement("p"), btns = doc.createElement("div"); btns.className = "btns";
  if (YM_ID) {
    p.innerHTML = "Мы используем cookie Яндекс Метрики, чтобы понимать, как пользуются сайтом. Подробнее — в <a href=\"" + policy + "\">политике конфиденциальности</a>.";
    var no = doc.createElement("button"); no.type = "button"; no.className = "btn btn-glass"; no.textContent = "Отклонить";
    var yes = doc.createElement("button"); yes.type = "button"; yes.className = "btn btn-solid"; yes.textContent = "Принять";
    btns.appendChild(no); btns.appendChild(yes);
    no.addEventListener("click", function () { put("no"); close(); });
    yes.addEventListener("click", function () { put("yes"); metrika(); close(); });
  } else {
    p.innerHTML = "Сайт не использует cookie для слежки и ничего не хранит о вас, кроме этого ответа (и сессии входа, если вы заходите в кабинет). Подробнее — в <a href=\"" + policy + "\">политике конфиденциальности</a>.";
    var ok = doc.createElement("button"); ok.type = "button"; ok.className = "btn btn-solid"; ok.textContent = "Понятно";
    btns.appendChild(ok);
    ok.addEventListener("click", function () { put("ok"); close(); });
  }
  box.appendChild(p); box.appendChild(btns);
  function close() { box.classList.remove("on"); setTimeout(function () { if (box.parentNode) box.parentNode.removeChild(box); }, 600); }
  function show() { doc.body.appendChild(box); requestAnimationFrame(function () { requestAnimationFrame(function () { box.classList.add("on"); }); }); }
  if (doc.readyState === "complete") setTimeout(show, 900); else window.addEventListener("load", function () { setTimeout(show, 900); });
})();
