import s from "./PaginationControls.module.css"

type Props = {
    pages: (number | "...")[]
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}

export const PaginationControls = ({pages, currentPage, setCurrentPage}: Props) => {


    return (
        <div className={s.pagination}>
            {pages.map((page, idx) =>
                page === '...' ? (
                    <span className={s.ellipsis} key={`ellipsis-${idx}`}>...</span>
                ) : (
                    <button
                        key={page}
                        className={ `button variantSecondary sizeSmall ${s.pageButton} ${page === currentPage ? s.pageButtonActive :''}`}
                        onClick={() => page !== currentPage && setCurrentPage(Number(page))}
                        type="button"
                    >
                        {page}
                    </button>
                )
            )}
        </div>
    )
}