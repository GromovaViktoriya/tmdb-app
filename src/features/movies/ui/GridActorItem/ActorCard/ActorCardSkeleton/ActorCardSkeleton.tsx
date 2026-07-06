import Skeleton from 'react-loading-skeleton';
import s from "../ActorCard.module.css";

export const ActorCardSkeleton = () => {
    return (
        <article className={s.card}>
            <div className={s.avatarFrame}>
                <Skeleton width={"160px"} height={"160px"} borderRadius={999} />
            </div>
            <div className={s.info} style={{ width: '100%' }}>
                <Skeleton width="75%" height={"16px"} />
                <Skeleton width="50%" height={"11px"}/>
            </div>
        </article>
    )
}