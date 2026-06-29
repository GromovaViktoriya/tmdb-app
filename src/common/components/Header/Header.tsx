import s from "./Header.module.css"
import {Path} from "@/common/routing";
import logo from "@/assets/images/logo_alt_short.svg"
import {useDispatch, useSelector} from "react-redux"
import {changeThemeModeAC, selectThemeMode} from "@/app/model/app-slice.ts";
import type {AppDispatch} from "@/app/model/store.ts";

export const Header = () => {
    const themeMode = useSelector(selectThemeMode)
    const dispatch = useDispatch<AppDispatch>()
    const changeMode = () => {
        const newTheme = themeMode === "light" ? "dark" : "light"
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        dispatch(changeThemeModeAC({ themeMode: newTheme}))
    }

    const isLight = themeMode === 'light';

    return (
        <header className={s.header}>
            <div className={s.inner}>
                <a href={Path.Main} className={s.logoLink}>
                    <img src={logo} alt="The Movie Database" className={s.logo} />
                </a>
                <nav className={s.nav}>
                    <a href={Path.Main} className={s.link}>Main</a>
                    <span className={s.separator}>|</span>
                    <a href={Path.PopularMovies} className={s.link}>Category movies</a>
                    <span className={s.separator}>|</span>
                    <a href={Path.FilteredMovies} className={s.link}>Filtered movies</a>
                    <span className={s.separator}>|</span>
                    <a href={Path.Search} className={s.link}>Search</a>
                    <span className={s.separator}>|</span>
                    <a href={Path.Favorites} className={s.link}>Favorites</a>
                </nav>
                <button type="button" className={`${s.button} ${s.variantSecondary}`} onClick={changeMode} title="Переключить на тёмную тему">{isLight ? '🌙' : '☀️'}</button>
            </div>
        </header>
    )
}
