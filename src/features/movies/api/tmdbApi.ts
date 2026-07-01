import {baseApi} from "@/app/api/baseApi.ts";
import type {MovieParams, MoviesResponse} from "@/features/movies/api/tmdbApi.types.ts";

export const tmdbApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPopularMovies: build.query<MoviesResponse, MovieParams>({
            query: (params) => ({
                url: '/movie/popular',
                params
            }),
            providesTags: ['Movie'],
        }),
        fetchNowPlayingMovies: build.query<MoviesResponse, MovieParams>({
            query: (params) => ({
                url: '/movie/now_playing',
                params
            }),
            providesTags: ['Movie'],
        }),
        fetchTopRatedMovies: build.query<MoviesResponse, MovieParams>({
            query: (params) => ({
                url: '/movie/top_rated',
                params
            }),
            providesTags: ['Movie'],
        }),
        fetchUpcomingMovies: build.query<MoviesResponse, MovieParams>({
            query: (params) => ({
                url: '/movie/upcoming',
                params
            }),
            providesTags: ['Movie'],
        }),
    }),
});

export const {
    useFetchPopularMoviesQuery,
    useFetchNowPlayingMoviesQuery,
    useFetchTopRatedMoviesQuery,
    useFetchUpcomingMoviesQuery
} = tmdbApi
