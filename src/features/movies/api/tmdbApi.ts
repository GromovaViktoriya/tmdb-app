import {baseApi} from "@/app/api/baseApi.ts";
import type {
    getMoviesByCategoryParams,
    MovieCreditsResponse, MovieDetailsParams, MovieDetailsResponse, MovieParamsWithId,
    MoviesResponse, SearchParams,
} from "@/features/movies/api/tmdbApi.types.ts";
import {
    MovieCreditsResponseSchema,
    MovieDetailsResponseSchema,
    MoviesResponseSchema
} from "@/features/movies/api/tmdbApi.schemas.ts";
import {withZodCatch} from "@/common/utils/withZodCatch.ts";

export const tmdbApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMoviesByCategory: build.query<MoviesResponse, getMoviesByCategoryParams>({
            query: ({category, params}) => ({
                url: `/movie/${category}`,
                params
            }),
            ...withZodCatch(MoviesResponseSchema),
            providesTags: ['Movie'],
        }),
        getSimilarMovies: build.query<MoviesResponse, MovieParamsWithId>({
            query: ({movieId, params}) => ({
                url: `/movie/${movieId}/similar`,
                params,
            }),
            ...withZodCatch(MoviesResponseSchema),
            providesTags: ['Movie'],
        }),
        getMovieCredits: build.query<MovieCreditsResponse, MovieParamsWithId>({
            query: ({movieId, params}) => ({
                url: `/movie/${movieId}/credits`,
                params
            }),
            ...withZodCatch(MovieCreditsResponseSchema),
            providesTags: ['Movie'],
        }),
        getMovieDetails: build.query<MovieDetailsResponse, MovieDetailsParams>({
            query: ({movieId, language}) => ({
                url: `/movie/${movieId}`,
                language
            }),
            ...withZodCatch(MovieDetailsResponseSchema),
            providesTags: ['Movie'],
        }),
        searchMovies: build.query<MoviesResponse, SearchParams>({
            query: (params) => ({
                url: `/search/movie`,
                params
            }),
            ...withZodCatch(MoviesResponseSchema),
            providesTags: ['Movie'],
        })
    }),
});

export const {
    useGetMoviesByCategoryQuery,
    useGetMovieCreditsQuery,
    useGetSimilarMoviesQuery,
    useGetMovieDetailsQuery,
    useSearchMoviesQuery,
} = tmdbApi
