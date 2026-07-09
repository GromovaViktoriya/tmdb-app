import type {SortBy} from "@/features/movies/api/tmdbApi.types.ts";

export const movieCategory = {
    popular: 'popular',
    nowPlaying: 'now_playing',
    topRated: 'top_rated',
    upcoming: 'upcoming',
} as const;

export type movieCategory = (typeof movieCategory)[keyof typeof movieCategory]

export const SortByOptions = {
    popularityDown:"popularity.desc",
    popularityUp:"popularity.asc",
    voteDown:"vote_average.desc",
    voteUp:"vote_average.asc",
    releaseDateDown:"primary_release_date.desc",
    releaseDateUp:"primary_release_date.asc",
    titleUp:"title.asc",
    titleDown:"title.desc",
} as const;

export type SortByOptions = (typeof SortByOptions)[keyof typeof SortByOptions]

export const getSortOptionsArray = (isRu: boolean) => {
    const SORT_OPTIONS: Record<SortBy, string> = {
        "popularity.desc": isRu ? "Популярность ↓" : "Popularity ↓",
        "popularity.asc": isRu ? "Популярность ↑" : "Popularity ↑",
        "vote_average.desc": isRu ? "Рейтинг ↓" : "Rating ↓",
        "vote_average.asc": isRu ? "Рейтинг ↑" : "Rating ↑",
        "primary_release_date.desc": isRu ? "Дата выхода ↓" : "Release Date ↓",
        "primary_release_date.asc": isRu ? "Дата выхода ↑" : "Release Date ↑",
        "title.asc": isRu ? "Название А-Я" : "Title A-Z",
        "title.desc": isRu ? "Название Я-А" : "Title Z-A",
    }
    return Object.entries(SORT_OPTIONS).map(([value, label]) => ({
        value: value as SortBy,
        label,
    }));
}
