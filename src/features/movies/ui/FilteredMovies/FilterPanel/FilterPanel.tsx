import s from "./FilterPanel.module.css"
import {SORT_OPTIONS_ARRAY} from "@/common/constants";
import {type ChangeEvent, type MouseEvent} from "react";
import type {Genre, SortBy} from "@/features/movies/api/tmdbApi.types.ts";


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
    const activeGenresArray = selectedGenres ? selectedGenres.split(',') : [];


    return (
        <aside className={s.filters}>
            <h2 className={s.filtersTitle}>Filters / Sort</h2>
            <div className={s.sortControls}>
                <label className={s.sortLabel}>Sort by</label>
                <select className={s.sortSelect} onChange={setSortByHandler}>
                    {SORT_OPTIONS_ARRAY.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
            <div className={s.container}>
                <div className={s.header}>
                    <span>Rating</span>
                    <span className={s.values}>{voteGte} - {voteLte}</span>
                </div>
                <div className={s.ranges}>
                    <div className={s.rangeTrack}></div>
                    <div className={s.rangeFill}
                         style={{left: `${voteGte * 10}%`, width: `${(voteLte - voteGte) * 10}%`}}></div>
                    <input min={0} max={10} step={0.1} className={s.rangeInput} aria-label="Minimum rating"
                           type="range" value={voteGte} onChange={setVoteGteHandler}/>
                    <input min={0} max={10} step={0.1} className={s.rangeInput} aria-label="Maximum rating"
                           type="range" value={voteLte} onChange={setVoteLteHandler}/>
                </div>
            </div>
            <div className={s.genres}>
                {genres?.map((genre) => {
                    const isActive = activeGenresArray.includes(genre.id.toString());

                    return (
                        <button key={genre.id} id={genre.id.toString()}
                                className={`button variantSecondary sizeSmall ${s.genreButton} ${isActive ? s.genreButtonActive : ''}`}
                                onClick={toggleGenreHandler}>
                            {genre.name}
                        </button>
                    )
                })}
            </div>
            <div className={s.actions}>
                <button className="button variantMain sizeSmall"
                        onClick={resetCallback}>
                    Reset filters
                </button>
            </div>
        </aside>
    )
}