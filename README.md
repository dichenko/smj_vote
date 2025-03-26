# SMJ-Vote - Голосование за Lego-мультфильм

Простое приложение для голосования за Lego-мультфильмы. Интегрируется с Telegram как Mini App.

## Технологии

- Next.js
- Supabase (база данных)
- Telegram Mini App SDK

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/dichenko/smj_vote.git
cd smj-vote
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.env.local` в корне проекта со следующими переменными:
```
NEXT_PUBLIC_SUPABASE_URL=ваш_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=ваш_публичный_ключ_supabase
```

## Разработка

Запустите сервер разработки:
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Деплой

Приложение настроено для деплоя на Vercel. Просто свяжите свой репозиторий с Vercel, и настройте те же переменные окружения, что и в `.env.local`.

## Структура базы данных

В Supabase должна быть таблица `votes` со следующими полями:
- `id` (автоинкремент)
- `tg_id` (строка) - ID пользователя в Telegram
- `choices` (массив чисел) - выбранные номера видео
- `created_at` (timestamp)
