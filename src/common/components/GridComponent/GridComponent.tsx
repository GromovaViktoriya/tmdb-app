import s from "./GridComponent.module.css"
import type {CastMember, Movie} from "@/features/movies/api/tmdbApi.types.ts";
import {GridMovieItem} from "@/features/movies/ui/GridMovieItem/GridMovieItem.tsx";
import {ActorCard} from "@/features/movies/ui/GridActorItem/ActorCard/ActorCard.tsx";
import {ActorCardSkeleton} from "@/features/movies/ui/GridActorItem/ActorCard/ActorCardSkeleton/ActorCardSkeleton.tsx";
import {
    GridMovieItemSkeleton
} from "@/features/movies/ui/GridMovieItem/GridMovieItemSkeleton/GridMovieItemSkeleton.tsx";

type Props = {
    movies?: Movie[]
    quantity?: number
    actors?: CastMember[]
    gridSix?: boolean
    isLoading?: boolean
    isActors?: boolean
}

export const GridComponent = ({movies, quantity, actors, gridSix, isLoading, isActors}: Props) => {
    const placeholders = Array(quantity || 20).fill(0);


    if (isLoading) {
        return (
            <div className={gridSix ? s.grid6 : s.grid5}>
                {isActors
                    ? placeholders.map((_, i) => <ActorCardSkeleton key={i}/>)
                    : placeholders.map((_, i) => <GridMovieItemSkeleton key={i}/>)
                }
            </div>
        )
    }
    return (
        <div className={gridSix ? s.grid6 : s.grid5}>

            {movies && quantity ? movies.slice(0, quantity).map(movie => (
                <GridMovieItem movie={movie} key={movie.id}/>
            )) : movies && movies.map(movie => (
                <GridMovieItem movie={movie} key={movie.id}/>
            ))}

            {actors && quantity && actors.slice(0, quantity).map((actor) => (
                <ActorCard actor={actor} key={actor.id}/>
            ))}
        </div>
    )
}