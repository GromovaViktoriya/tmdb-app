import {PaginationControls} from "@/common/components/Pagination/PaginationControls/PaginationControls.tsx";
import s from "./Pagination.module.css"
import {getPaginationPages} from "@/common/utils";

type Props = {
    currentPage: number
    setCurrentPage: (page: number) => void
    pagesCount: number | undefined,
}
export const Pagination = ({currentPage, setCurrentPage, pagesCount}: Props) => {
    const maxPages = Math.min(pagesCount ?? 1, 500);
    if (maxPages <= 1) return null

    const pages = getPaginationPages(currentPage, maxPages ?? 1)

    return (
        <div className={s.container}>
            <PaginationControls pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}