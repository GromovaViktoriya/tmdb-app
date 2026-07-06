import Skeleton from 'react-loading-skeleton';
import s from "../GridMovieItem.module.css";

export const GridMovieItemSkeleton = () => {
    return (
        <article className={s.card}>
            <div className={s.posterFrame}>
                <Skeleton
                    containerClassName={s.posterLink}
                    height="100%"
                    style={{ display: 'block' }}
                />
            </div>

            <h3 className={s.cardTitle}>
                <Skeleton width="65%" />
            </h3>
        </article>
    )
}