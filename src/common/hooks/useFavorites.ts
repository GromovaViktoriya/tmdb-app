import { useState, useEffect } from "react";
import type {Movie} from "@/features/movies/api/tmdbApi.types.ts";


export const useFavorites = () => {
    const getFavorites = (): Movie[] => {
        const saved = localStorage.getItem("Favorites");
        return saved ? JSON.parse(saved) : [];
    };

    const [favorites, setFavorites] = useState<Movie[]>(getFavorites);


    useEffect(() => {
        const handleUpdate = () => setFavorites(getFavorites());
        window.addEventListener("favorites_updated", handleUpdate);
        return () => window.removeEventListener("favorites_updated", handleUpdate);
    }, []);


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


    const isFavorite = (id: number) => favorites.some((fav) => fav.id === id);

    return { favorites, toggleFavorite, isFavorite };
};