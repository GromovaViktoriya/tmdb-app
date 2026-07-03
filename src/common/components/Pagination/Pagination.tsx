import {PaginationControls} from "@/common/components/Pagination/PaginationControls/PaginationControls.tsx";
import {getPaginationPages} from "@/common/utils/getPaginationPages.ts";
import s from "./Pagination.module.css"

type Props = {
    currentPage: number
    setCurrentPage: (page: number) => void
    pagesCount: number | undefined,
}
export const Pagination = ({currentPage, setCurrentPage, pagesCount}: Props) => {
    if (pagesCount && pagesCount <= 1) return null

    const pages = getPaginationPages(currentPage, pagesCount ?? 1)

    return (
        <div className={s.container}>
            <PaginationControls pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}