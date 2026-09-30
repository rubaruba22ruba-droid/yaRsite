# YarVpn — сайт yarvpn.best

Готовый статический сайт (GitHub Pages). Ничего собирать не нужно.

- `index.html` — главная. Стили — `assets/css/site.css`, скрипты — `assets/js/`.
- **Серверы на глобусе** — файл `assets/js/servers.js`: одна строка = один сервер (город, координаты). Удалил строку — пропал маркер и самолёт.
- **Вход** — кнопка «Войти через Telegram» (окно входа Telegram). Один раз в @BotFather: `/setdomain` → @yarVpnRubot → `yarvpn.best`.
- **Статистика** — `assets/js/consent.js`, строка `var YM_ID = 0;` — впишите номер счётчика Яндекс Метрики (по умолчанию выключено).
- `miniapp/index.html` — рулетка для Telegram (копия лежит в репозитории YarVpn). Ей нужен адрес API бота: `api.json`.
- `tools/earth-src/` — исходник глобуса (нужен только разработчику).
