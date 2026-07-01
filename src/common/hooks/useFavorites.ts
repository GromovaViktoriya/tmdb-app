// useFavorites.ts
import { useState, useEffect } from "react";
import type {Movie} from "@/features/movies/api/tmdbApi.types.ts";


export const useFavorites = () => {
    // Функция для чтения актуальных данных
    const getFavorites = (): Movie[] => {
        const saved = localStorage.getItem("Favorites");
        return saved ? JSON.parse(saved) : [];
    };

    const [favorites, setFavorites] = useState<Movie[]>(getFavorites);

    // Подписываемся на изменения
    useEffect(() => {
        const handleUpdate = () => setFavorites(getFavorites());
        window.addEventListener("favorites_updated", handleUpdate);
        return () => window.removeEventListener("favorites_updated", handleUpdate);
    }, []);

    // Функция переключения избранного
    const toggleFavorite = (movie: Movie) => {
        let currentFavs = getFavorites();
        const isFav = currentFavs.some((fav) => fav.id === movie.id);

        if (isFav) {
            currentFavs = currentFavs.filter((fav) => fav.id !== movie.id);
        } else {
            currentFavs.push(movie);
        }

        localStorage.setItem("Favorites", JSON.stringify(currentFavs));
        window.dispatchEvent(new Event("favorites_updated")); // Кричим "Обновлено!"
    };

    // Удобная проверка для карточки
    const isFavorite = (id: number) => favorites.some((fav) => fav.id === id);

    return { favorites, toggleFavorite, isFavorite };
};