import s from "./SimilarMovies.module.css"
import {GridComponent} from "@/common/components/GridComponent/GridComponent.tsx";
import {useGetSimilarMoviesQuery} from "@/features/movies/api/tmdbApi.ts";

type Props = {
    movieId: number;
}

export const SimilarMovies = ({movieId}: Props) => {
    const {data} = useGetSimilarMoviesQuery({movieId, params: {page: 1, language: "en-US"}});
    return (
        <section className={s.section}>
            <div className={s.header}>
                <h2 className={s.title}>Similar Movies</h2>
            </div>
            <GridComponent movies={data?.results} quantity={6}/>
        </section>
    )
}