import s from "./CastActors.module.css"
import {GridComponent} from "@/common/components/GridComponent/GridComponent.tsx";
import {useGetMovieCreditsQuery} from "@/features/movies/api/tmdbApi.ts";

type Props = {
    movieId: number;
}

export const CastActors = ({movieId}:Props) => {
    const {data} = useGetMovieCreditsQuery({movieId, params:{page: 1, language: "en-US"}});


    return (
        <section className={s.section}>
            <div className={s.header}>
                <h2 className={s.title}>Cast</h2>
            </div>
            <GridComponent actors={data?.cast} quantity={6}/>
        </section>
    )
}