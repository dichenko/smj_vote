# Lego-мультфильм Voting App

Мини-приложение Telegram для голосования за Lego-мультфильмы в номинации "Выбор зрителя".

## Технологии

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Serverless API Routes (Next.js)
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Telegram Integration**: Telegram Mini Apps SDK

## Настройка проекта

### Предварительные требования

- Node.js (v18+ рекомендуется)
- npm или yarn
- Аккаунт Supabase
- Telegram Bot (для Mini App)
- Аккаунт Vercel (для деплоя)

### Локальная разработка

1. Клонируйте репозиторий и установите зависимости:
   ```bash
   git clone <url_репозитория>
   cd smj-vote
   npm install
   ```

2. Создайте файл `.env.local` на основе `.env.local.example` и заполните переменные окружения:
   ```
   NEXT_PUBLIC_SUPABASE_URL=ваш_url_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=ваш_anon_key_supabase
   NEXT_PUBLIC_TELEGRAM_BOT_USERNAME=имя_вашего_бота
   ```

3. Создайте таблицу в Supabase:
   - Название таблицы: `votes`
   - Поля:
     - `id`: `uuid`, primary key
     - `tg_id`: `text`, not null
     - `choices`: `integer[]`, not null
     - `created_at`: `timestamp with time zone`, not null, default: `now()`

4. Поместите логотип в папку `public/images/logo.png`

5. Запустите приложение в режиме разработки:
   ```bash
   npm run dev
   ```

## Деплой на Vercel

1. Создайте новый проект на Vercel и свяжите его с репозиторием.

2. Добавьте следующие переменные окружения в настройках проекта:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_TELEGRAM_BOT_USERNAME`

3. Деплой произойдет автоматически при коммите в основную ветку.

## Интеграция с Telegram

1. Создайте бота с помощью @BotFather в Telegram.
2. Используйте команду `/newapp` в @BotFather для создания веб-приложения.
3. URL приложения: URL вашего Vercel деплоя.
4. Добавьте следующие права доступа:
   - `web_app_data`

## Структура проекта

- `lib/supabase.ts` - Клиент Supabase и функции для работы с БД
- `hooks/useTelegram.ts` - Хук для интеграции с Telegram Mini Apps
- `components/` - React компоненты
- `pages/` - Страницы приложения

## Использование

1. Пользователь открывает мини-приложение из Telegram.
2. Выбирает три номера роликов из выпадающих списков.
3. Нажимает кнопку "Проголосовать".
4. Результаты сохраняются в базе Supabase.
