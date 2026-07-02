export const movieCategory = {
    popular: 'popular',
    nowPlaying: 'now_playing',
    topRated: 'top_rated',
    upcoming: 'upcoming',
} as const;

export type movieCategory = (typeof movieCategory)[keyof typeof movieCategory]