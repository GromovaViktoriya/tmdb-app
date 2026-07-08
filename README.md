Адаптивное React-приложение для поиска, фильтрации и изучения фильмов, работающее на базе TMDB API.
🎬 TMDB Movie Explorer (tmdb-app)

✨ Особенности (Features)
Продвинутый поиск фильмов: Поиск фильмов по названию с мгновенной синхронизацией.
Глубокая фильтрация и сортировка: Фильтрация по жанрам и диапазону рейтинга (с помощью интерактивных ползунков). 
Сортировка по популярности, рейтингу, дате выхода и названию.
Синхронизация с URL (URL-Driven State): Поисковые запросы, текущие страницы и фильтры полностью синхронизированы с адресной строкой. 
Это позволяет делиться ссылками на конкретные результаты поиска.
Адаптивный дизайн: Полная оптимизация под любые экраны (ПК, планшеты, смартфоны) исключительно с помощью чистого CSS и CSS Modules.
Кэширование данных: Оптимизированные API-запросы и встроенное кэширование благодаря RTK Query.
Строгая типизация: Надежные TypeScript-типы, выведенные напрямую из схем валидации Zod.

🛠️ Технологический стек
Фреймворк: React 18 + TypeScript
Сборщик: Vite
Стейт-менеджер и API: Redux Toolkit (RTK Query)
Роутинг: React Router v6
Стилизация: CSS Modules
Валидация: Zod
Деплой: Vercel

Инструкция по развертыванию проекта на вашем компьютере.
1.Clone the repository: 
git clone [https://github.com/your-username/tmdb-app.git](https://github.com/your-username/tmdb-app.git)
cd tmdb-app

2.Install dependencies: 
pnpm install

3.Set up Environment Variables:
Create a .env file in the root directory and add your TMDB API configuration:
VITE_API_KEY=your_tmdb_api_key_here
VITE_BASE_URL=https://api.themoviedb.org/3

4.Start the development server:
pnpm dev

Архитектура проекта вдохновлена методологией Feature-Sliced Design (FSD) для поддержания чистоты и масштабируемости кода.
src/
├── app/        # Глобальные настройки (store, роутер, глобальные стили)
├── common/     # Общие UI-компоненты, хуки, константы и утилиты
├── features/   # Бизнес-логика и фичи (API слайсы, типы)
└── assets/     # Статические файлы (картинки, иконки)