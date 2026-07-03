import type {MoviesResponse} from "@/features/movies/api/tmdbApi.types.ts";
import s from "./CategoryPage.module.css"
import {CategorySwitch} from "@/features/movies/ui/CategoryPage/CategorySwitch/CategorySwitch.tsx";
import {GridComponent} from "@/common/components/GridComponent/GridComponent.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";


type Props = {
    data: MoviesResponse | undefined
    pageTitle: string
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}


export const CategoryPage = ({data, pageTitle, setCurrentPage, currentPage}: Props) => {

    return (
        <section className={s.page}>
            <div className={s.content}>
               <CategorySwitch/>
                <section className={s.section}>
                    <div className={s.header}><h2 className={s.title}>{pageTitle}</h2></div>
                    <GridComponent movies={data?.results}/>
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pagesCount={data?.total_pages}/>
                </section>
            </div>
        </section>
    )
}