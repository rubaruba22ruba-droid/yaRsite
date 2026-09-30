# YarVpn — сайт yarvpn.best

Готовый сайт: собирать и устанавливать ничего не нужно. Загрузил файлы на GitHub — работает.

## Загрузка (GitHub Pages)
1. github.com → репозиторий **yaRsite** → **Add file → Upload files**.
2. Перетащи всё содержимое папки (не саму папку) → **Commit changes**.
3. **Settings → Pages**: Branch `main`, папка `/ (root)` → Save. Домен yarvpn.best берётся из файла `CNAME`.

## Вход в кабинет и рулетка (нужен Cloudflare Worker — бесплатно, сервер и root не нужны)
Сайт работает по HTTPS, а бот отвечает по http://…:порт — браузер такое блокирует. Воркер — «переходник» между ними.
1. dash.cloudflare.com → регистрация → **Workers & Pages → Create → Create Worker** → имя `yarvpn-api` → **Deploy**.
2. **Edit code** → удали весь код → вставь содержимое файла `worker/yarvpn-api-proxy.js` → **Deploy**.
3. Скопируй адрес воркера (вид `https://yarvpn-api.твой-ник.workers.dev`).
4. Проверка: открой `адрес-воркера/check` — должно быть `{"worker":true,"bot":true,...}`.
5. В репозитории открой файл `api.json` → карандаш → между кавычками `"api": ""` вставь адрес воркера → Commit.

Если в шаге 4 `"bot":false` — воркер не видит бота: проверь, что бот запущен и порт в `config.py` (`WEBAPP_PORT`) совпадает с портом из панели хостинга.

## Что где лежит
- `index.html`, `assets/` — сайт (глобус — реальные снимки NASA Blue Marble; исходник глобуса — `tools/earth-src/`).
- `api.json` — адрес воркера. `worker/` — код воркера. `miniapp/index.html` — рулетка для Telegram.
