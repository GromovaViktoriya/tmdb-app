import {type ChangeEvent, useState} from "react";
import {useDebounceValue} from "@/common/hooks/useDebounceValue.ts";
import s from "./SearchForm.module.css"

export const SearchForm = () => {
    const [search, setSearch] = useState('')
    // const debounceSearch = useDebounceValue(search)

    const searchPlaylistHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }
    return (
            <form className={s.form}>
                <input type="search" className={s.input} onChange={searchPlaylistHandler} placeholder="Search for a movie" />
                <button type="submit" >Search</button>
            </form>
    )
}