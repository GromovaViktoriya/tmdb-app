import s from "./GridMovieItem.module.css"
import type {Movie} from "@/features/movies/api/tmdbApi.types.ts";
import {useFavorites} from "@/common/hooks/useFavorites.ts";
import {Link} from "react-router";
import {useGetConfigurationQuery} from "@/features/movies/api/tmdbApi.ts";
import {useState} from "react";
import Skeleton from "react-loading-skeleton";


type Props = {
    movie: Movie
}

export const GridMovieItem = ({movie}: Props) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const {data} = useGetConfigurationQuery()
    const secureBaseUrl = data?.images.secure_base_url;
    const posterSize = data?.images.poster_sizes.find(el => el === "w185");
    const {isFavorite, toggleFavorite} = useFavorites();

    const active = isFavorite(movie.id);
    const movieRating = movie?.vote_average.toFixed(1)
    const badgeColor = movieRating && +movieRating <= 5
        ? "negative"
        : movieRating && +movieRating <= 6.9
            ? "neutral"
            : "positive";

    return (
        <article className={s.card}>
            <div className={s.posterFrame}>
                <Link className={s.posterLink} to={`/movie/${movie.id}`} data-discover="true">
                    {!isImageLoaded && (
                        <Skeleton
                            containerClassName={s.posterLink}
                            height="100%"
                            style={{ display: 'block' }}
                            baseColor={"var(--color-gray-300)"}
                            highlightColor={"var(--color-gray-300)"}
                        />
                    )}
                    {movie.poster_path
                        ? <img className={s.poster} alt={movie.title}
                               src={`${secureBaseUrl}${posterSize}/${movie.poster_path}`}
                               style={{ display: isImageLoaded ? 'block' : 'none' }}
                               onLoad={() => setIsImageLoaded(true)}
                        />
                        : <div className={s.posterFallback}>No poster</div>}
                    <span className={`ratingBadge ${badgeColor} badge`}
                          aria-label={`Rating ${movie.vote_average}`}>{movie.vote_average.toFixed(1)}
                    </span>
                </Link>
                <button type="button"
                        className={`button variantSecondary sizeSmall ${s.favoriteButton} ${active ? s.favoriteButtonVisible : ''}`}
                        aria-pressed={active} aria-label="Remove from favorites"
                        title="Remove from favorites"
                        onClick={() => toggleFavorite(movie)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"
                         className={`${s.favoriteIcon} ${active ? s.favoriteIconActive : ''}`}>
                        <path
                            d="M12 21.35 10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.77-3.4 6.86-8.55 11.54L12 21.35z"></path>
                    </svg>
                </button>
            </div>
            <Link className={s.cardTitleLink} to={`/movie/${movie.id}`} data-discover="true">
                <h3 className={s.cardTitle}>{movie.title}</h3>
            </Link>
        </article>
    )
}