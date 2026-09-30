# YarVpn — сайт yarvpn.best

Статический сайт (без сборки): чёрный фон, оранжевый акцент, шрифт Unbounded, живой волновой фон и карта серверов с самолётиком.
Хостинг — GitHub Pages, домен из файла `CNAME`.

## Публикация (GitHub Pages)
**Settings → Pages**: Branch `main`, папка `/ (root)`. Любой коммит в `main` публикуется автоматически.

## Вход в кабинет и рулетка: нужен HTTPS-адрес бота
Сайт открывается по HTTPS, а бот на хостинге отвечает по `http://хост:порт`. Браузер запрещает HTTPS-странице ходить на обычный HTTP
(mixed content), поэтому нужен «переходник» — Cloudflare Worker (бесплатно). Адрес вашего хостинга вписывается **в воркер**, а не на сайт.

1. dash.cloudflare.com → **Workers & Pages → Create → Create Worker** → имя `yarvpn-api` → **Deploy**.
2. **Edit code** → удалить всё → вставить содержимое `worker/yarvpn-api-proxy.js` → **Deploy**.
3. **Settings → Variables → Add variable**: `UPSTREAM` = `http://хост-бота:порт` (без слэша в конце) → **Deploy**.
4. Открыть `https://yarvpn-api.<ник>.workers.dev/check` — должно быть `{"worker":true,"bot":true,...}`.
5. В `api.json` вписать адрес воркера: `{"api": "https://yarvpn-api.<ник>.workers.dev"}` → Commit.

Если `"bot":false` — воркер не достучался до бота: проверьте, что бот запущен и порт в `config.py` (`WEBAPP_PORT`) совпадает с портом хостинга.
Воркер пропускает только `/api/web/*` и `/api/roulette/*`.

## Список стран
Массив `SERVERS` в начале `assets/js/map.js` — из него строятся карта и список под ней. Страна добавляется или убирается одной строкой
(координаты, название, город). Текст со списком стран в `index.html` (описание, блок «Серверы», FAQ, JSON-LD) правится вручную.

## Что где лежит
- `index.html`, `privacy/`, `terms/`, `404.html` — страницы; `assets/css/site.css` — все стили.
- `assets/js/bg.js` — анимированный фон; `map.js` + `map-data.js` — карта мира и самолёт; `main.js` — меню и анимации; `cabinet.js` — вход и кабинет.
- `api.json` — адрес воркера. `worker/` — код воркера. `miniapp/index.html` — рулетка для Telegram.
