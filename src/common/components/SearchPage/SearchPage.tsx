import s from "./SearchPage.module.css"
import {SearchForm} from "@/common/components/SearchForm/SearchForm.tsx";
import {GridComponent} from "@/common/components/GridComponent/GridComponent.tsx";
import {useSearchMoviesQuery} from "@/features/movies/api/tmdbApi.ts";
import {useSearchParams} from "react-router";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";


export const SearchPage = () => {
    const language = useSelector(selectLanguage);
    const isRu = language === "ru-RU";
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const currentPage = Number(searchParams.get("page")) || 1;

    const {data, isLoading} = useSearchMoviesQuery({query, page: currentPage, language})

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams);

        if (newPage > 1) {
            params.set("page", newPage.toString());
        } else {
            params.delete("page");
        }

        setSearchParams(params);
    };

    const text = {
        title: isRu ? "Результаты поиска" : "Search Results",
        resultsFor: isRu ? `Результаты по запросу "${query}"` : `Results for "${query}"`,
        enterToStart: isRu
            ? "Введите название фильма, чтобы начать поиск."
            : "Enter a movie title to start searching.",
        noMatches: isRu
            ? `По запросу "${query}" ничего не найдено.`
            : `No matches found for "${query}".`
    };


    return (
        <section className={s.page}>
            <h1 className={s.title}>Search Results</h1>
            <SearchForm isLoading={isLoading} />
            <section className={s.section}>
                {query.length > 0 &&  <div className={s.header}><h2 className={s.searchTitle}>{text.resultsFor}</h2></div>}
                {query.length === 0 && <p className={s.emptyMessage}>{text.enterToStart}</p>}
                {query.length > 0 && data?.results.length === 0 && <p className={s.emptyMessage}>{text.noMatches}</p>}
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