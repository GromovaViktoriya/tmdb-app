import Skeleton from 'react-loading-skeleton';
import s from "../MovieDetail.module.css";

export const MovieDetailSkeleton = () => {
    return (
        <div className={s.content}>
            {/* Левая колонка - Постер */}
            <div className={s.wrapper}>
                <Skeleton height={420} borderRadius={16}
                          baseColor={"var(--color-gray-300)"}
                          highlightColor={"var(--color-gray-700)"}/>
            </div>

            {/* Правая колонка - Информация */}
            <div className={s.details}>
                <header className={s.header}>
                    <div className={s.top}>
                        <h1 className={s.title}>
                            <Skeleton width={280}
                                      baseColor={"var(--color-gray-300)"}
                                      highlightColor={"var(--color-gray-700)"}
                            />
                        </h1>
                        {/* Плейсхолдер для кнопки Back */}
                        <Skeleton width={56} height={33} borderRadius={999}
                                  baseColor={"var(--color-gray-300)"}
                                  highlightColor={"var(--color-gray-700)"}
                        />
                    </div>
                    <div className={s.meta}>
                        <Skeleton width={130}
                                  baseColor={"var(--color-gray-300)"}
                                  highlightColor={"var(--color-gray-700)"}
                        />
                        <Skeleton width={40} height={40} borderRadius={999}
                                  baseColor={"var(--color-gray-300)"}
                                  highlightColor={"var(--color-gray-700)"}
                        />
                        <Skeleton width={122}
                                  baseColor={"var(--color-gray-300)"}
                                  highlightColor={"var(--color-gray-700)"}
                        />
                    </div>
                </header>

                {/* Описание (Overview) */}
                <p className={s.text}>
                    <Skeleton count={4}
                              baseColor={"var(--color-gray-300)"}
                              highlightColor={"var(--color-gray-700)"}
                    />
                </p>

                {/* Жанры */}
                <div className={s.detailSection}>
                    <h2 className={s.detailTitle}>
                        <Skeleton width={90}
                                  baseColor={"var(--color-gray-300)"}
                                  highlightColor={"var(--color-gray-700)"}
                        />
                    </h2>
                    <ul className={s.list}>
                        <li><Skeleton width={70}
                                      height={31}
                                      borderRadius={999}
                                      baseColor={"var(--color-gray-300)"}
                                      highlightColor={"var(--color-gray-700)"}
                        /></li>
                        <li><Skeleton width={90}
                                      height={31}
                                      borderRadius={999}
                                      baseColor={"var(--color-gray-300)"}
                                      highlightColor={"var(--color-gray-700)"}
                        /></li>
                        <li><Skeleton width={60}
                                      height={31}
                                      borderRadius={999}
                                      baseColor={"var(--color-gray-300)"}
                                      highlightColor={"var(--color-gray-700)"}
                        /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}