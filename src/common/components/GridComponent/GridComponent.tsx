import s from "./GridComponent.module.css"
import type {Movie} from "@/features/movies/api/tmdbApi.types.ts";
import {GridMovieItem} from "@/features/movies/ui/GridMovieItem/GridMovieItem.tsx";

type Props = {
    movies?: Movie[]
    quantity?: number
}

export const GridComponent = ({movies, quantity}:Props) => {
    return (
        <div className={s.grid}>
            {movies && quantity? movies.slice(0, quantity).map(movie => (
                <GridMovieItem movie={movie} key={movie.id}/>
            )) : movies && movies.map(movie => (
                <GridMovieItem movie={movie} key={movie.id}/>
            ))
            }
        </div>
    )
}