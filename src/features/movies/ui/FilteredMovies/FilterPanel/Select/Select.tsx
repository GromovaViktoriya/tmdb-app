import s from "./Select.module.css";
import {SORT_OPTIONS_ARRAY} from "@/common/constants";
import type {ChangeEvent} from "react";


type Props = {
    onChange: (event:ChangeEvent<HTMLSelectElement>) => void
}

export const Select = ({onChange}: Props) => {

    return (
        <div className={s.sortControls}>
            <label className={s.sortLabel}>Sort by</label>
            <select className={s.sortSelect} onChange={onChange}>
                {SORT_OPTIONS_ARRAY.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}