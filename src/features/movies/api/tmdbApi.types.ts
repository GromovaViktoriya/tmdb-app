import z from "zod";
import {
    CastMemberSchema,
    FilterParamsSchema, GenreSchema, GenresResponseSchema,
    GetMoviesByCategoryParamsSchema,
    MovieCreditsResponseSchema,
    MovieDetailsParamsSchema,
    MovieDetailsResponseSchema,
    MovieParamsSchema,
    MovieParamsWithIdSchema,
    type MovieSchema,
    MoviesResponseSchema,
    SearchParamsSchema, SortBySchema
} from "@/features/movies/api/tmdbApi.schemas.ts";
// --- Экспорт выведенных (inferred) типов ---
// Теперь типы генерируются автоматически из схем. Если поменяется схема — поменяется и тип!

export type Movie = z.infer<typeof MovieSchema>;
export type MoviesResponse = z.infer<typeof MoviesResponseSchema>;
export type CastMember = z.infer<typeof CastMemberSchema>;
export type MovieCreditsResponse = z.infer<typeof MovieCreditsResponseSchema>;
export type MovieParams = z.infer<typeof MovieParamsSchema>;
export type SearchParams = z.infer<typeof SearchParamsSchema>;
export type getMoviesByCategoryParams = z.infer<typeof GetMoviesByCategoryParamsSchema>;
export type MovieParamsWithId = z.infer<typeof MovieParamsWithIdSchema>;
export type MovieDetailsParams = z.infer<typeof MovieDetailsParamsSchema>;
export type MovieDetailsResponse = z.infer<typeof MovieDetailsResponseSchema>;
export type FilterParams = z.infer<typeof FilterParamsSchema>
export type SortBy = z.infer<typeof SortBySchema>;
export type Genre = z.infer<typeof GenreSchema>;
export type GenresResponse = z.infer<typeof GenresResponseSchema>;