import s from "./MoviePage.module.css"
import {MovieDetail} from "@/features/movies/ui/MoviePage/MovieDetail/MovieDetail.tsx";
import {SimilarMovies} from "@/features/movies/ui/SimilarMovies/SimilarMovies.tsx";
import {useParams} from "react-router";
import {CastActors} from "@/features/movies/ui/GridActorItem/CastActors.tsx";
import {useGetMovieCreditsQuery, useGetSimilarMoviesQuery} from "@/features/movies/api/tmdbApi.ts";


export const MoviePage = () => {
    const params = useParams()
    const {data: castData} = useGetMovieCreditsQuery({movieId: Number(params.id), params: {page: 1, language: "en-US"}});
    const {data:similarData} = useGetSimilarMoviesQuery({movieId:Number(params.id), params: {page: 1, language: "en-US"}});

    return (
        <section className={s.section}>
            <MovieDetail movieId={Number(params.id)}/>
            {castData?.cast.length !== 0 && <CastActors cast={castData?.cast}/>}
            {similarData?.results.length !== 0 && <SimilarMovies movies={similarData?.results}/>}
        </section>
    )
}