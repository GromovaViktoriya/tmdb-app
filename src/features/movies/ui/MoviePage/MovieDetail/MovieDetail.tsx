import s from "./MovieDetail.module.css"
import {useGetMovieDetailsQuery} from "@/features/movies/api/tmdbApi.ts";
import {useNavigate} from "react-router";
import {
    MovieDetailSkeleton
} from "@/features/movies/ui/MoviePage/MovieDetail/MovieDetailSkeleton/MovieDetailSkeleton.tsx";
import {useState} from "react";
import Skeleton from "react-loading-skeleton";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";

type Props = {
    movieId: number
}

export const MovieDetail = ({movieId}: Props) => {
    const language = useSelector(selectLanguage);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const {data: movie, isLoading} = useGetMovieDetailsQuery({movieId, params: {language}});
    const navigate = useNavigate()

    const movieRating = movie?.vote_average.toFixed(1)
    const badgeColor = movieRating && +movieRating <= 5
        ? "negative" : movieRating && +movieRating <= 6.9
            ? "neutral"
            : "positive";
    const navigateHandler = ()=>{
        navigate(-1)
    }
    const isRu = language === 'ru-RU';
    const text = {
        back: isRu ? 'Назад' : 'Back',
        releaseYear: isRu ? 'Год выпуска:' : 'Release year:',
        runtime: isRu ? 'Продолжительность:' : 'Runtime:',
        runtimeUnavailable: isRu ? 'неизвестна' : 'Runtime unavailable',
        hours: isRu ? 'ч' : 'h',
        minutes: isRu ? 'м' : 'm',
        genres: isRu ? 'Жанры' : 'Genres',
        noOverview: isRu ? 'Описание отсутствует.' : 'No overview available.',
        noGenres: isRu ? 'Жанры отсутствуют.' : 'No genres available.'
    };

    if(isLoading){
        return <MovieDetailSkeleton />
    }
    return (
        <div className={s.content}>
            <div className={s.wrapper}>
                {!isImageLoaded && (
                    <Skeleton
                        height="100%"
                        style={{ aspectRatio: '2 / 3', display: 'block' }}
                        borderRadius={16}
                        baseColor={"var(--color-gray-300)"}
                        highlightColor={"var(--color-gray-300)"}
                    />
                )}
                <img className={s.image} alt={movie?.title}
                     src={ movie?.poster_path
                         ? `https://image.tmdb.org/t/p/w342/${movie?.poster_path}`
                         : 'https://placehold.co/400x600?text=No+Poster'}
                     style={{ display: isImageLoaded ? 'block' : 'none' }}
                     onLoad={() => setIsImageLoaded(true)}
                />
            </div>
            <div className={s.details}>
                <header className={s.header}>
                    <div className={s.top}>
                        <h1 className={s.title}>{movie?.title}</h1>
                        <button type="button" className={`button variantSecondary sizeSmall` } onClick={navigateHandler}>{text.back}</button>
                    </div>
                    <div className={s.meta}>
                        <span
                            className={s.metaItem}>{text.releaseYear} {movie && new Date(movie.release_date).getFullYear()}</span>
                        <span className={`${s.ratingBadge} ${badgeColor} badge`}>{movie?.vote_average.toFixed(1)}</span>
                        <span
                            className={s.metaItem}>{movie?.runtime
                            ? `${text.runtime} ${Math.floor(movie.runtime / 60)}${text.hours} ${movie?.runtime % 60}${text.minutes}`
                            : `${text.runtime} ${text.runtimeUnavailable}`}</span>
                    </div>
                </header>
                <p className={s.text}>{ movie?.overview && movie?.overview.length > 0? movie.overview : text.noOverview}</p>
                <div className={s.detailSection}>
                    <h2 className={s.detailTitle}>{text.genres}</h2>
                    <ul className={s.list}>
                        {movie?.genres && movie.genres.length !== 0? movie.genres.map((genre) => (
                            <li className={s.item} key={genre.id}>{genre.name}</li>
                        )) : <p className={s.placeholder}>{text.noGenres}</p>}
                    </ul>
                </div>
            </div>
        </div>
    )
}