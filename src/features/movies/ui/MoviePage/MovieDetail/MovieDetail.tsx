import s from "./MovieDetail.module.css"
import {useGetMovieDetailsQuery} from "@/features/movies/api/tmdbApi.ts";
import {useNavigate} from "react-router";

type Props = {
    movieId: number
}

export const MovieDetail = ({movieId}: Props) => {
    const {data: movie} = useGetMovieDetailsQuery({movieId, language: "en-US"});
    const navigate = useNavigate()

    const movieRating = movie?.vote_average.toFixed(1)
    const badgeColor = movieRating && +movieRating <= 5
        ? "negative" : movieRating && +movieRating <= 6.9
            ? "neutral"
            : "positive";
    const navigateHandler = ()=>{
        navigate(-1)
    }

    return (
        <div className={s.content}>
            <div className={s.wrapper}>
                <img className={s.image} alt={movie?.title}
                     src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}/>
            </div>
            <div className={s.details}>
                <header className={s.header}>
                    <div className={s.top}>
                        <h1 className={s.title}>{movie?.title}</h1>
                        <button type="button" className={`button variantSecondary sizeSmall` } onClick={navigateHandler}>Back</button>
                    </div>
                    <div className={s.meta}>
                        <span
                            className={s.metaItem}>Release year: {movie && new Date(movie.release_date).getFullYear()}</span>
                        <span className={`${s.ratingBadge} ${badgeColor} badge`}>{movie?.vote_average.toFixed(1)}</span>
                        <span
                            className={s.metaItem}>{movie?.runtime && `Runtime: ${Math.floor(movie.runtime / 60)}h ${movie?.runtime % 60}m`}</span>
                    </div>
                </header>
                <p className={s.text}>{movie?.overview}</p>
                <div className={s.detailSection}>
                    <h2 className={s.detailTitle}>Genres</h2>
                    <ul className={s.list}>
                        {movie?.genres.map((genre) => (
                            <li className={s.item} key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}