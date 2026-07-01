import {GridComponent} from "@/common/components/GridComponent/GridComponent.tsx";
import s from "./MainMovieComponent.module.css"
import type {Movie} from "@/features/movies/api/tmdbApi.types.ts";

type Props = {
    title: string
    href: string
    data: Movie[] | undefined
}

export const MainMovieComponent = ({title, href, data}:Props)=>{
    return (
        <section className={s.section}>
            <div className={s.header}>
                <h2 className={s.title}>{title}</h2>
                <a className={s.viewMoreLink} href={href} data-discover="true">
                    <button type="button" className="button variantSecondary sizeSmall">View more</button>
                </a>
            </div>
            <GridComponent movies={data} quantity={6}/>
        </section>
    )
}