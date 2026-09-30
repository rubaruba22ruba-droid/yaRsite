/* YarVpn — HTTPS-прокси к боту (Cloudflare Worker).

   Зачем: сайт (https://yarvpn.best) и мини-апп рулетки (Telegram) открываются по HTTPS, а браузер запрещает им
   обращаться к обычному http://…:порт (это «mixed content»). Воркер принимает HTTPS-запрос и пересылает его боту
   по HTTP — и сайт, и рулетка начинают работать. Данные бота он не хранит и не читает.

   Пропускает только адреса /api/web/* (вход и личный кабинет) и /api/roulette/* (рулетка) — больше ничего.
   Адрес бота — в переменной UPSTREAM ниже (или в настройках воркера: Settings → Variables → UPSTREAM).
   Необязательно: переменная PROXY_KEY — секрет, который воркер добавляет к запросам (для защиты, см. README). */

const DEFAULT_UPSTREAM = "http://de-bots3.h1cloud.net:25275";
const ALLOWED = ["/api/web/", "/api/roulette/"];
const TIMEOUT_MS = 25000;

const JSON_HEADERS = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };
function reply(status, obj, extra) {
  return new Response(JSON.stringify(obj), { status: status, headers: Object.assign({}, JSON_HEADERS, extra || {}) });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const upstream = String((env && env.UPSTREAM) || DEFAULT_UPSTREAM).replace(/\/+$/, "");

    if (url.pathname === "/" || url.pathname === "/health") {
      return reply(200, { ok: true, service: "yarvpn-api-proxy" }, { "access-control-allow-origin": "*" });
    }
    if (!ALLOWED.some(function (p) { return url.pathname.indexOf(p) === 0; })) {
      return reply(404, { ok: false, error: "not_found" }, { "access-control-allow-origin": "*" });
    }

    /* заголовки запроса: всё, кроме служебных; IP и страну клиента передаём боту отдельными заголовками —
       иначе он увидит адрес самого воркера и в сообщении «откуда вход» будет неверная подпись */
    const headers = new Headers();
    request.headers.forEach(function (v, k) {
      const l = k.toLowerCase();
      if (l === "host" || l === "x-forwarded-for" || l === "x-real-ip" || l.indexOf("cf-") === 0 || l.indexOf("x-yv-") === 0) return;
      headers.set(k, v);
    });
    const ip = request.headers.get("CF-Connecting-IP");
    if (ip) headers.set("X-Yv-Client-IP", ip);
    const country = (request.cf && request.cf.country) || request.headers.get("CF-IPCountry");
    if (country) headers.set("X-Yv-Country", country);
    if (env && env.PROXY_KEY) headers.set("X-Yv-Proxy-Key", env.PROXY_KEY);

    const init = { method: request.method, headers: headers, redirect: "manual" };
    if (request.method !== "GET" && request.method !== "HEAD") init.body = await request.arrayBuffer();

    const ctrl = new AbortController();
    const timer = setTimeout(function () { ctrl.abort(); }, TIMEOUT_MS);
    try {
      const res = await fetch(upstream + url.pathname + url.search, Object.assign(init, { signal: ctrl.signal }));
      const out = new Headers(res.headers);
      out.delete("content-encoding"); out.delete("content-length"); out.delete("transfer-encoding"); out.delete("connection");
      out.set("cache-control", "no-store");
      return new Response(res.body, { status: res.status, statusText: res.statusText, headers: out });
    } catch (e) {
      // бот недоступен: отвечаем понятной ошибкой (с CORS, чтобы сайт показал сообщение, а не «сеть упала»)
      return reply(502, { ok: false, error: "upstream_unreachable" }, { "access-control-allow-origin": request.headers.get("Origin") || "*" });
    } finally {
      clearTimeout(timer);
    }
  }
};
