import s from "./MoviePage.module.css"
import {MovieDetail} from "@/features/movies/ui/MoviePage/MovieDetail/MovieDetail.tsx";
import {SimilarMovies} from "@/features/movies/ui/SimilarMovies/SimilarMovies.tsx";
import {useParams} from "react-router";
import {CastActors} from "@/features/movies/ui/GridActorItem/CastActors.tsx";
import {useGetMovieCreditsQuery, useGetSimilarMoviesQuery} from "@/features/movies/api/tmdbApi.ts";


export const MoviePage = () => {
    const params = useParams()
    const {data: castData, isLoading:isLoadingCast} = useGetMovieCreditsQuery({movieId: Number(params.id), params: {page: 1, language: "en-US"}});
    const {data:similarData, isLoading:isLoadingSimilar} = useGetSimilarMoviesQuery({movieId:Number(params.id), params: {page: 1, language: "en-US"}});

    const showCast = isLoadingCast || (castData?.cast && castData.cast.length > 0);
    const showSimilar = isLoadingSimilar || (similarData?.results && similarData.results.length > 0);

    return (
        <section className={s.section}>
            <MovieDetail movieId={Number(params.id)}/>
            {showCast && <CastActors cast={castData?.cast} isLoading={isLoadingCast}/>}
            {showSimilar && <SimilarMovies movies={similarData?.results} isLoading={isLoadingSimilar}/>}
        </section>
    )
}