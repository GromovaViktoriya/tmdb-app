import s from "./Genres.module.css";
import type {Genre} from "@/features/movies/api/tmdbApi.types.ts";
import type {MouseEvent} from "react";


type Props = {
    genres: Genre[] | undefined
    selectedGenres: string
    onClickHandler: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Genres = ({genres, selectedGenres, onClickHandler}:Props) => {
    const activeGenresArray = selectedGenres ? selectedGenres.split(',') : [];


    return (
        <div className={s.genres}>
            {genres?.map((genre) => {
                const isActive = activeGenresArray.includes(genre.id.toString());

                return (
                    <button key={genre.id} id={genre.id.toString()}
                            className={`button variantSecondary sizeSmall ${s.genreButton} ${isActive ? s.genreButtonActive : ''}`}
                            onClick={onClickHandler}>
                        {genre.name}
                    </button>
                )
            })}
        </div>
    )
}