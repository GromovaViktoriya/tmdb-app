import s from "./Header.module.css"
import {Path} from "@/common/routing";
import logo from "@/assets/images/logo_alt_short.svg"
import {useDispatch, useSelector} from "react-redux"
import type {AppDispatch} from "@/app/model/store.ts";
import {Link, NavLink} from "react-router";
import {changeLanguageAC, changeThemeModeAC, selectLanguage, selectThemeMode} from "@/app/model";

export const Header = () => {
    const themeMode = useSelector(selectThemeMode)
    const language = useSelector(selectLanguage)
    const isRu = language === "ru-RU"
    const dispatch = useDispatch<AppDispatch>()

    const changeThemeMode = () => {
        const newTheme = themeMode === "light" ? "dark" : "light"
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        dispatch(changeThemeModeAC({themeMode: newTheme}))
    }

    const toggleLanguage = () => {
        const newLanguage = language === "ru-RU" ? "en-US" : "ru-RU"
        localStorage.setItem('language', newLanguage);
        dispatch(changeLanguageAC({ language: newLanguage }));
    }

    const isLight = themeMode === 'light';
    const text = {
        main: isRu ? "Главная" : "Main",
        category: isRu ? "Категории" : "Category movies",
        filtered: isRu ? "Фильтры" : "Filtered movies",
        search: isRu ? "Поиск" : "Search",
        favorites: isRu ? "Избранное" : "Favorites",
        themeTitle: isRu
            ? (isLight ? "Переключить на тёмную тему" : "Переключить на светлую тему")
            : (isLight ? "Switch to dark theme" : "Switch to light theme"),
        langTitle: isRu ? "Сменить язык" : "Change language",
    };

    const getLinkClass = ({isActive}: { isActive: boolean }) =>
        isActive ? `${s.link} ${s.linkActive}` : s.link;

    return (
        <header className={s.header}>
            <div className={s.inner}>
                <Link to={Path.Main} className={s.logoLink}>
                    <img src={logo} alt="The Movie Database" className={s.logo}/>
                </Link>
                <nav className={s.nav}>
                    <NavLink to={Path.Main} className={getLinkClass}>{text.main}</NavLink>
                    <span className={s.separator}>|</span>
                    <NavLink to={Path.PopularMovies} className={getLinkClass}>{text.category}</NavLink>
                    <span className={s.separator}>|</span>
                    <NavLink to={Path.FilteredMovies} className={getLinkClass}>{text.filtered}</NavLink>
                    <span className={s.separator}>|</span>
                    <NavLink to={Path.Search} className={getLinkClass}>{text.search}</NavLink>
                    <span className={s.separator}>|</span>
                    <NavLink to={Path.Favorites} className={getLinkClass}>{text.favorites}</NavLink>
                </nav>
                <div className={s.buttonWrapper}>
                    <button type="button" className={`${s.button} ${s.variantSecondary}`}
                            onClick={changeThemeMode} title={text.themeTitle}>{isLight ? '🌙' : '☀️'}
                    </button>
                    <button className={`${s.button} ${s.languageBtn}`} onClick={toggleLanguage} title={text.langTitle}>
                        {language === 'ru-RU' ? 'RU' : 'EN'}
                    </button>
                </div>
            </div>
        </header>
    )
}
