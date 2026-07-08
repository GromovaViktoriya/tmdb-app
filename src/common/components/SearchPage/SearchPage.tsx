import s from "./SearchPage.module.css"
import {SearchForm} from "@/common/components/SearchForm/SearchForm.tsx";
import {GridComponent} from "@/common/components/GridComponent/GridComponent.tsx";
import {useSearchMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {useSearchParams} from "react-router";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";


export const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const currentPage = Number(searchParams.get("page")) || 1;

    const {data, isLoading} = useSearchMoviesQuery({query, page: currentPage})

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams);

        if (newPage > 1) {
            params.set("page", newPage.toString());
        } else {
            params.delete("page");
        }

        setSearchParams(params);
    };



    return (
        <section className={s.page}>
            <h1 className={s.title}>Search Results</h1>
            <SearchForm isLoading={isLoading} />
            <section className={s.section}>
                {query.length > 0 &&  <div className={s.header}><h2 className={s.searchTitle}>{`Results for "${query}"`}</h2></div>}
                {query.length === 0 && <p className={s.emptyMessage}>Enter a movie title to start searching.</p>}
                {query.length > 0 && data?.results.length === 0 && <p className={s.emptyMessage}>No matches found for "{query}".</p>}
                {query.length > 0 && <GridComponent movies={data?.results} isLoading={isLoading}/>}
                <Pagination
                    currentPage={currentPage}
                    setCurrentPage={handlePageChange}
                    pagesCount={data?.total_pages || 1}
                />
            </section>
        </section>
    )
}