import s from "./Select.module.css";
import {getSortOptionsArray} from "@/common/constants";
import type {ChangeEvent} from "react";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";


type Props = {
    onChange: (event:ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({onChange}: Props) => {
    const language = useSelector(selectLanguage);
    const isRu = language === "ru-RU";

    const text = {
        sortBy: isRu ? "Фильтр по:" : "Sort by",
    };

    // Получаем переведенный массив опций
    const translatedOptions = getSortOptionsArray(isRu);
    return (
        <div className={s.sortControls}>
            <label className={s.sortLabel}>{text.sortBy}</label>
            <select className={s.sortSelect} onChange={onChange}>
                {translatedOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}