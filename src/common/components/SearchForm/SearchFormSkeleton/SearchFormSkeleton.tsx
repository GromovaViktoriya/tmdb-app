import Skeleton from 'react-loading-skeleton';
import s from "../SearchForm.module.css"


export const SearchFormSkeleton = () => {
    return (
        <div className={`${s.form} ${s.formWrapper}`}>
            <div style={{ flex: 1, width: '466px' }}>
                <Skeleton height={44} borderRadius={999} />
            </div>
            <div style={{ width: '82px' }}>
                <Skeleton height={44} borderRadius={999} />
            </div>
        </div>
    )
}