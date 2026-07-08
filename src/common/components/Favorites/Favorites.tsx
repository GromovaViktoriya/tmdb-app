import s from "./Favorites.module.css"
import {GridComponent} from "@/common/components/GridComponent/GridComponent.tsx";
import {useFavorites} from "@/common/hooks";

export const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <section className={s.page}>
            <h1 className={s.title}>Favorites</h1>
            {favorites.length > 0
                ? <section className={`${s.section} ${s.gridSection}`}>
                    <div className={s.header}>
                        <h2 className={s.headerTitle}>Favorite Movies</h2>
                        <GridComponent movies={favorites} gridSix={true}/>
                    </div>
                </section>
                : <p className={s.message}>Add movies to favorites to see them on this page.</p>
            }
        </section>
    )
}