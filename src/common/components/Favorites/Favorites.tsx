import s from "./Favorites.module.css"
import {GridComponent} from "@/common/components/GridComponent/GridComponent.tsx";
import {useFavorites} from "@/common/hooks";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";

export const Favorites = () => {
    const { favorites } = useFavorites();
    const language = useSelector(selectLanguage);
    const isRu = language === "ru-RU";

    const text = {
        title: isRu ? "Избранное" : "Favorites",
        headerTitle: isRu ? "Любимые фильмы" : "Favorite Movies",
        message: isRu
            ? "Добавьте фильмы в избранное, чтобы увидеть их на этой странице."
            : "Add movies to favorites to see them on this page."
    };

    return (
        <section className={s.page}>
            <h1 className={s.title}>{text.title}</h1>
            {favorites.length > 0
                ? <section className={`${s.section} ${s.gridSection}`}>
                    <div className={s.header}>
                        <h2 className={s.headerTitle}>{text.headerTitle}</h2>
                        <GridComponent movies={favorites} gridSix={true}/>
                    </div>
                </section>
                : <p className={s.message}>{text.message}</p>
            }
        </section>
    )
}