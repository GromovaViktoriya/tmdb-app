import s from "./CategorySwitch.module.css";
import { NavLink} from "react-router";
import {Path} from "@/common/routing";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";



export const CategorySwitch = () => {
    const language = useSelector(selectLanguage);

    const getLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? `button variantSecondary sizeSmall ${s.buttonActive}` : 'button variantSecondary sizeSmall'

    const isRu = language === "ru-RU";
    const text = {
        popular: isRu ? "Популярные фильмы" : "Popular Movies",
        topRated: isRu ? "Лучшие по рейтингу" : "Top Rated Movies",
        upcoming: isRu ? "Ожидаемые новинки" : "Upcoming Movies",
        nowPlaying: isRu ? "Сейчас в кино" : "Now Playing Movies",
    };

    return (
        <div className={s.categorySwitchContainer}>
            <div className={s.categoryButtons}>
                <NavLink className={getLinkClass} to={Path.PopularMovies}
                      data-discover="true" aria-current="page">{text.popular}</NavLink>
                <NavLink className={getLinkClass} to={Path.TopRatedMovies}
                      data-discover="true" aria-current="page">{text.topRated}</NavLink>
                <NavLink className={getLinkClass} to={Path.UpcomingMovies}
                      data-discover="true" aria-current="page">{text.upcoming}</NavLink>
                <NavLink className={getLinkClass} to={Path.NowPlayingMovies}
                      data-discover="true" aria-current="page">{text.nowPlaying}</NavLink>
            </div>
        </div>
    )
}