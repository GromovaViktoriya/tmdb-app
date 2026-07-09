import type {movieCategory} from "@/common/constants";
import z from "zod";

export const MovieSchema = z.object({
    adult: z.boolean().catch(false),
    backdrop_path: z.string().nullable().catch(null),
    genre_ids: z.array(z.number()).catch([]),
    id: z.number(),
    original_language: z.string().catch("en"),
    original_title: z.string().catch(""),
    overview: z.string().catch("No overview available."),
    popularity: z.number().catch(0),
    poster_path: z.string().nullable().catch(null),
    release_date: z.string().catch(""),
    title: z.string().catch("Unknown Title"),
    video: z.boolean().catch(false),
    vote_average: z.number().catch(0),
    vote_count: z.number().catch(0),

    // Добавлено на основе ответа сервера TMDB
    softcore: z.boolean().optional(),
});

export const MoviesResponseSchema = z.object({
    page: z.number(),
    results: z.array(MovieSchema),
    total_pages: z.number(),
    total_results: z.number(),
});

export const CastMemberSchema = z.object({
    adult: z.boolean(),
    gender: z.number(), // 0 - не указан, 1 - женский, 2 - мужской
    id: z.number(),
    known_for_department: z.string(),
    name: z.string(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string().nullable(),
    cast_id: z.number(),
    character: z.string(),
    credit_id: z.string(),
    order: z.number(),
});

export const MovieCreditsResponseSchema = z.object({
    id: z.number(),
    cast: z.array(CastMemberSchema),
});

export const SortBySchema = z.enum([
    "popularity.desc",
    "popularity.asc",
    "vote_average.desc",
    "vote_average.asc",
    "primary_release_date.desc",
    "primary_release_date.asc",
    "title.asc",
    "title.desc",
]);

// --- Параметры запросов ---
export const MovieParamsSchema = z.object({
    language: z.string().optional(),
    page: z.number().optional(),
});

export const SearchParamsSchema = z.object({
    query: z.string(),
    page: z.number(),
    language: z.string().optional(),
});

export const FilterParamsSchema = z.object({
    page: z.number().int().positive().optional(),
    language: z.string().optional(),
    sort_by: SortBySchema.optional(),
    "vote_average.gte": z.number().optional(),
    "vote_average.lte": z.number().optional(),
    with_genres: z.string().optional(),
})

export const MovieDetailSchema = z.object({
    language: z.string().optional(),
})

export const GenreSchema = z.object({
    id: z.number().int(),
    name: z.string(),
});

export const GenresResponseSchema = z.object({
    genres: z.array(GenreSchema),
});

export const ImagesConfigSchema = z.object({
    base_url: z.string(),
    secure_base_url: z.string(),
    backdrop_sizes: z.array(z.string()),
    logo_sizes: z.array(z.string()),
    poster_sizes: z.array(z.string()),
    profile_sizes: z.array(z.string()),
    still_sizes: z.array(z.string()),
});

export const ConfigurationResponseSchema = z.object({
    images: ImagesConfigSchema,
    change_keys: z.array(z.string()),
});

export const GetMoviesByCategoryParamsSchema = z.object({
    // Используем z.custom для интеграции твоего существующего типа movieCategory
    category: z.custom<movieCategory>(),
    params: MovieParamsSchema.optional(),
});

export const MovieParamsWithIdSchema = z.object({
    movieId: z.number(),
    params: MovieParamsSchema,
});

export const MovieDetailsParamsSchema = z.object({
    movieId: z.number(),
    params: MovieDetailSchema,
});

// --- Вложенные сущности для Movie Details ---

export const CollectionSchema = z.object({
    id: z.number(),
    name: z.string(),
    poster_path: z.string().nullable(),
    backdrop_path: z.string().nullable(),
});

export const ProductionCompanySchema = z.object({
    id: z.number(),
    logo_path: z.string().nullable(),
    name: z.string(),
    origin_country: z.string(),
});

export const ProductionCountrySchema = z.object({
    iso_3166_1: z.string(),
    name: z.string(),
});

export const SpokenLanguageSchema = z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
});

export const MovieDetailsResponseSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    belongs_to_collection: CollectionSchema.nullable(),
    budget: z.number(),
    genres: z.array(GenreSchema),
    homepage: z.string(),
    id: z.number(),
    imdb_id: z.string().nullable(),
    origin_country: z.array(z.string()),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    production_companies: z.array(ProductionCompanySchema),
    production_countries: z.array(ProductionCountrySchema),
    release_date: z.string(),
    revenue: z.number(),
    runtime: z.number().nullable(),
    spoken_languages: z.array(SpokenLanguageSchema),
    status: z.string(),
    tagline: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),


    // Добавлено на основе ответа сервера TMDB
    softcore: z.boolean(),
});