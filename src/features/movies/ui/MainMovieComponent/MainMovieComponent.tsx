import {GridComponent} from "@/common/components/GridComponent/GridComponent.tsx";
import s from "./MainMovieComponent.module.css"
import type {Movie} from "@/features/movies/api/tmdbApi.types.ts";
import {Link} from "react-router";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";

type Props = {
    title: string
    href: string
    data: Movie[] | undefined
    isLoading: boolean
}

export const MainMovieComponent = ({title, href, data, isLoading}:Props)=>{
    const language = useSelector(selectLanguage);
    const isRu = language === "ru-RU";
    const text = {
        button: isRu? "Смотреть еще":"View more"
    }
    return (
        <section className={s.section}>
            <div className={s.header}>
                <h2 className={s.title}>{title}</h2>
                <Link className={s.viewMoreLink} to={href} data-discover="true">
                    <button type="button" className="button variantSecondary sizeSmall">{text.button}</button>
                </Link>
            </div>
            <GridComponent movies={data} quantity={6} gridSix={true} isLoading={isLoading}/>
        </section>
    )
}