import s from "./FilteredMovies.module.css"
import {GridComponent} from "@/common/components/GridComponent/GridComponent.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useGetFiltersMoviesQuery, useGetMovieGenresQuery} from "@/features/movies/api/tmdbApi.ts";
import {SortByOptions} from "@/common/constants";
import {useEffect, useState} from "react";
import {FilterPanel} from "@/features/movies/ui/FilteredMovies/FilterPanel/FilterPanel.tsx";
import {useSearchParams} from "react-router";
import {useDebounceValue} from "@/common/hooks";
import type {SortBy} from "@/features/movies/api";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";


export const FilteredMovies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const language = useSelector(selectLanguage);

    const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
    const [sortBy, setSortBy] = useState<SortBy>((searchParams.get("sort_by") as SortBy) || SortByOptions.popularityDown);
    const [voteGte, setVoteGte] = useState<number>(Number(searchParams.get("vote_gte")) || 0);
    const [voteLte, setVoteLte] = useState<number>(Number(searchParams.get("vote_lte")) || 10);
    const [selectedGenres, setSelectedGenres] = useState(searchParams.get("with_genres") || '');

    const debouncedVoteGte = useDebounceValue(voteGte, 500)
    const debouncedVoteLte = useDebounceValue(voteLte, 500)

    useEffect(() => {
        const params = new URLSearchParams();
        if (page > 1) params.set("page", page.toString());
        if (sortBy !== SortByOptions.popularityDown) params.set("sort_by", sortBy);
        if (voteGte > 0) params.set("vote_gte", voteGte.toString());
        if (voteLte < 10) params.set("vote_lte", voteLte.toString());
        if (selectedGenres) params.set("with_genres", selectedGenres);

        setSearchParams(params, { replace: true });
    }, [page, sortBy, debouncedVoteGte, debouncedVoteLte, selectedGenres, setSearchParams, voteGte, voteLte]);

    const {data, isLoading} = useGetFiltersMoviesQuery(
        {
            page: page,
            language,
            sort_by: sortBy,
            "vote_average.gte": debouncedVoteGte,
            "vote_average.lte": debouncedVoteLte,
            with_genres: selectedGenres
        });

    const {data: genresData} = useGetMovieGenresQuery({language})

    const resetCallback = () => {
        setPage(1)
        setSortBy(SortByOptions.popularityDown)
        setVoteGte(0)
        setVoteLte(10)
        setSelectedGenres('')
    }

    return (
        <section className={s.page}>
            <div className={s.content}>
                <div className={s.filtersColumn}>
                    <FilterPanel setPage={setPage}
                                 voteGte={voteGte}
                                 voteLte={voteLte}
                                 setVoteGte={setVoteGte}
                                 setVoteLte={setVoteLte}
                                 setSortBy={setSortBy}
                                 genres={genresData?.genres}
                                 selectedGenres={selectedGenres}
                                 setSelectedGenres={setSelectedGenres}
                                 resetCallback={resetCallback}
                    />
                </div>
                <div className={s.moviesColumn}>
                    <section className={s.section}>
                        <GridComponent movies={data?.results} isLoading={isLoading}/>
                        <Pagination currentPage={page} setCurrentPage={setPage} pagesCount={data?.total_pages}/>
                    </section>
                </div>
            </div>
        </section>
    )
}