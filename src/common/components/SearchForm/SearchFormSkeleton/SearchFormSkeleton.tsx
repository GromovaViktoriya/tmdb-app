import Skeleton from 'react-loading-skeleton';
import s from "../SearchForm.module.css"


export const SearchFormSkeleton = () => {
    return (
        <div className={`${s.form} ${s.formWrapper}`}>
            <div style={{ flex: 1, width: '466px' }}>
                <Skeleton height={44} borderRadius={999}
                          baseColor={"var(--color-gray-300)"}
                          highlightColor={"var(--color-gray-700)"}
                />
            </div>
            <div style={{ width: '82px' }}>
                <Skeleton height={44} borderRadius={999}
                          baseColor={"var(--color-gray-300)"}
                          highlightColor={"var(--color-gray-700)"}
                />
            </div>
        </div>
    )
}