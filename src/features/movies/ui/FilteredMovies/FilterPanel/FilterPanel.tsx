import s from "./FilterPanel.module.css"
import {type ChangeEvent, type MouseEvent} from "react";
import type {Genre, SortBy} from "@/features/movies/api/tmdbApi.types.ts";
import {Select} from "@/features/movies/ui/FilteredMovies/FilterPanel/Select/Select.tsx";
import {Ranges} from "@/features/movies/ui/FilteredMovies/FilterPanel/Ranges/Ranges.tsx";
import {Genres} from "@/features/movies/ui/FilteredMovies/FilterPanel/Genres/Genres.tsx";


type Props = {
    setPage: (page: number) => void;
    voteGte: number
    voteLte: number
    setVoteGte: (voteGte: number) => void
    setVoteLte: (voteLte: number) => void
    setSortBy: (sortBy: SortBy) => void
    genres: Genre[] | undefined
    selectedGenres: string
    setSelectedGenres: (genres: string) => void
    resetCallback: () => void
}

export const FilterPanel = ({
                                setPage,
                                voteGte,
                                voteLte,
                                setVoteGte,
                                setVoteLte,
                                setSortBy,
                                genres,
                                selectedGenres,
                                setSelectedGenres,
                                resetCallback
                            }: Props) => {

    const setVoteGteHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value;
        if (value <= voteLte) {
            setVoteGte(value);
            setPage(1)
        }
    }
    const setVoteLteHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value;
        if (value >= voteGte) {
            setVoteLte(value);
            setPage(1)
        }
    }
    const setSortByHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.currentTarget.value as SortBy)
        setPage(1)
    }
    const toggleGenreHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const clickedId = e.currentTarget.id;
        if (!selectedGenres) {
            setSelectedGenres(clickedId);
            setPage(1)
            return;
        }

        const genresArray = selectedGenres.split(',');
        if (genresArray.includes(clickedId)) {
            const newString = genresArray.filter(id => id !== clickedId).join(',');
            setSelectedGenres(newString);
            setPage(1)
        } else {
            const newString = [...genresArray, clickedId].join(',');
            setSelectedGenres(newString);
            setPage(1)
        }
    }



    return (
        <aside className={s.filters}>
            <h2 className={s.filtersTitle}>Filters / Sort</h2>
            <Select onChange={(event)=>setSortByHandler(event)}/>
            <Ranges voteGte={voteGte}
                    voteLte={voteLte}
                    onGteChange={(event)=>setVoteGteHandler(event)}
                    onLteChange={(event)=>setVoteLteHandler(event)}
            />
            <Genres genres={genres}
                    selectedGenres={selectedGenres}
                    onClickHandler={(event)=>toggleGenreHandler(event)}
            />
            <div className={s.actions}>
                <button className="button variantMain sizeSmall"
                        onClick={resetCallback}>
                    Reset filters
                </button>
            </div>
        </aside>
    )
}