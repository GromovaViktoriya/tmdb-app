import s from "./SearchPage.module.css"
import {SearchForm} from "@/common/components/SearchForm/SearchForm.tsx";

export const SearchPage = () => {
    return (
        <>
            <h1 className={s.title}>Search results</h1>
            <SearchForm/>
            <section></section>
        </>
)
}