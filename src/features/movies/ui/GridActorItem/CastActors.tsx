import s from "./CastActors.module.css"
import {GridComponent} from "@/common/components/GridComponent/GridComponent.tsx";

import type {CastMember} from "@/features/movies/api/tmdbApi.types.ts";

type Props = {
    cast: CastMember[] | undefined;
    isLoading: boolean;
}

export const CastActors = ({cast, isLoading}:Props) => {
    return (
        <section className={s.section}>
            <div className={s.header}>
                <h2 className={s.title}>Cast</h2>
            </div>
            <GridComponent actors={cast} quantity={6} gridSix={true} isLoading={isLoading} isActors={true}/>
        </section>
    )
}