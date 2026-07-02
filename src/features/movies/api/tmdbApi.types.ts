import type {movieCategory} from "@/common/constants";

export type Movie = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


export type MoviesResponse = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export type CastMember = {
    adult: boolean;
    gender: number; // 0 - не указан, 1 - женский, 2 - мужской
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export type MovieCreditsResponse = {
    id: number;
    cast: CastMember[];
}


export type MovieParams = {
    language?: string;
    page?: number;
}

export type SearchParams = {
    query: string;
    page: number;
}


export type getMoviesByCategoryParams = {
    category: movieCategory ,
    params?: MovieParams,
}

export type MovieParamsWithId = {
    movieId: number;
    params: MovieParams;
}

export type MovieDetailsParams = {
    movieId: number;
    language?: string;
}

export type Collection = {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
}

export type Genre = {
    id: number;
    name: string;
}

export type ProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

export type ProductionCountry = {
    iso_3166_1: string;
    name: string;
}

export type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export type MovieDetailsResponse = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: Collection | null; // Может быть null, если фильм не из франшизы
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string | null;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number | null; // У некоторых фильмов (особенно новых) runtime еще не указан
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}