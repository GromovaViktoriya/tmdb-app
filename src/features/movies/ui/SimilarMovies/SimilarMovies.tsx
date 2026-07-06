import s from "./SimilarMovies.module.css"
import {GridComponent} from "@/common/components/GridComponent/GridComponent.tsx";
import type {Movie} from "@/features/movies/api/tmdbApi.types.ts";

type Props = {
 movies: Movie[] | undefined;
 isLoading: boolean;
}

export const SimilarMovies = ({movies, isLoading}: Props) => {

    return (
        <section className={s.section}>
            <div className={s.header}>
                <h2 className={s.title}>Similar Movies</h2>
            </div>
            <GridComponent movies={movies} quantity={6} gridSix={true} isLoading={isLoading} />
        </section>
    )
}