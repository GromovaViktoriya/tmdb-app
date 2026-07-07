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

export const SORT_OPTIONS: Record<SortBy, string> = {
    "popularity.desc": "Popularity ↓",
    "popularity.asc": "Popularity ↑",
    "vote_average.desc": "Rating ↓",
    "vote_average.asc": "Rating ↑",
    "primary_release_date.desc": "Release Date ↓",
    "primary_release_date.asc": "Release Date ↑",
    "title.asc": "Title A-Z",
    "title.desc": "Title Z-A",
};
export const SORT_OPTIONS_ARRAY = Object.entries(SORT_OPTIONS).map(([value, label]) => ({
    value: value as SortBy,
    label,
}));