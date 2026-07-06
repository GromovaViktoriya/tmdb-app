import Skeleton from 'react-loading-skeleton';
import s from "../MovieDetail.module.css";

export const MovieDetailSkeleton = () => {
    return (
        <div className={s.content}>
            {/* Левая колонка - Постер */}
            <div className={s.wrapper}>
                <Skeleton height={420} borderRadius={16} />
            </div>

            {/* Правая колонка - Информация */}
            <div className={s.details}>
                <header className={s.header}>
                    <div className={s.top}>
                        <h1 className={s.title}>
                            <Skeleton width={280} />
                        </h1>
                        {/* Плейсхолдер для кнопки Back */}
                        <Skeleton width={56} height={33} borderRadius={999} />
                    </div>
                    <div className={s.meta}>
                        <Skeleton width={130} />
                        <Skeleton width={40} height={40} borderRadius={999} />
                        <Skeleton width={122} />
                    </div>
                </header>

                {/* Описание (Overview) */}
                <p className={s.text}>
                    <Skeleton count={4} />
                </p>

                {/* Жанры */}
                <div className={s.detailSection}>
                    <h2 className={s.detailTitle}>
                        <Skeleton width={90} />
                    </h2>
                    <ul className={s.list}>
                        <li><Skeleton width={70} height={31} borderRadius={999} /></li>
                        <li><Skeleton width={90} height={31} borderRadius={999} /></li>
                        <li><Skeleton width={60} height={31} borderRadius={999} /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}