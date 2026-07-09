import s from "./Ranges.module.css";
import type {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";

type Props = {
    voteGte: number,
    voteLte: number,
    onGteChange:(event:ChangeEvent<HTMLInputElement>) => void,
    onLteChange:(event:ChangeEvent<HTMLInputElement>) => void,
}

export const Ranges = ({voteGte, voteLte, onGteChange, onLteChange}:Props) => {
    const language = useSelector(selectLanguage);
    const isRu = language === "ru-RU";

    const text = {
        rating: isRu ? "Рейтинг" : "Rating"
    };
    return (
        <div className={s.container}>
            <div className={s.header}>
                <span>{text.rating}</span>
                <span className={s.values}>{voteGte} - {voteLte}</span>
            </div>
            <div className={s.ranges}>
                <div className={s.rangeTrack}></div>
                <div className={s.rangeFill}
                     style={{left: `${voteGte * 10}%`, width: `${(voteLte - voteGte) * 10}%`}}></div>
                <input min={0} max={10} step={0.1} className={s.rangeInput} aria-label="Minimum rating"
                       type="range" value={voteGte} onChange={onGteChange}/>
                <input min={0} max={10} step={0.1} className={s.rangeInput} aria-label="Maximum rating"
                       type="range" value={voteLte} onChange={onLteChange}/>
            </div>
        </div>
    )
}