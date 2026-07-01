import s from "./GridComponent.module.css"
import type {Movie} from "@/features/movies/api/tmdbApi.types.ts";
import {GridMovieItem} from "@/features/movies/ui/GridMovieItem/GridMovieItem.tsx";

type Props = {
    movies?: Movie[]
}

export const GridComponent = ({movies}:Props) => {
    return (
        <div className={s.grid}>
            {movies && movies.slice(0, 6).map(movie => (
                <GridMovieItem movie={movie}/>
            ))}
        </div>
    )
}