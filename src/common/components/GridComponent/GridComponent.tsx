import s from "./GridComponent.module.css"
import type {CastMember, Movie} from "@/features/movies/api/tmdbApi.types.ts";
import {GridMovieItem} from "@/features/movies/ui/GridMovieItem/GridMovieItem.tsx";
import {ActorCard} from "@/features/movies/ui/GridActorItem/ActorCard/ActorCard.tsx";

type Props = {
    movies?: Movie[]
    quantity?: number
    actors?: CastMember[]
}

export const GridComponent = ({movies, quantity, actors}:Props) => {
    return (
        <div className={s.grid}>

            {movies && quantity? movies.slice(0, quantity).map(movie => (
                <GridMovieItem movie={movie} key={movie.id}/>
            )) : movies && movies.map(movie => (
                <GridMovieItem movie={movie} key={movie.id}/>
            ))}

            {actors && quantity && actors.slice(0, quantity).map((actor) => (
                <ActorCard actor={actor}/>
            ))}
        </div>
    )
}