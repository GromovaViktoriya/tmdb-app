import s from "./MoviePage.module.css"
import {MovieDetail} from "@/features/movies/ui/MoviePage/MovieDetail/MovieDetail.tsx";
import {SimilarMovies} from "@/features/movies/ui/SimilarMovies/SimilarMovies.tsx";
import {useParams} from "react-router";
import {CastActors} from "@/features/movies/ui/GridActorItem/CastActors.tsx";


export const MoviePage = () => {
const params = useParams()

    return (
        <section className={s.section}>
            <MovieDetail movieId={Number(params.id)}/>
            <CastActors movieId={Number(params.id)}/>
            <SimilarMovies movieId={Number(params.id)}/>
        </section>
    )
}