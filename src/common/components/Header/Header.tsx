import s from "./Header.module.css"
import {Path} from "@/common/routing";
import logo from "@/assets/images/logo_alt_short.svg"
import {useDispatch, useSelector} from "react-redux"
import {changeThemeModeAC, selectThemeMode} from "@/app/model/app-slice.ts";
import type {AppDispatch} from "@/app/model/store.ts";
import {Link, NavLink} from "react-router";

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

    const getLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? `${s.link} ${s.linkActive}` : s.link;

    return (
        <header className={s.header}>
            <div className={s.inner}>
                <Link to={Path.Main} className={s.logoLink}>
                    <img src={logo} alt="The Movie Database" className={s.logo} />
                </Link>
                <nav className={s.nav}>
                    <NavLink to={Path.Main} className={getLinkClass}>Main</NavLink>
                    <span className={s.separator}>|</span>
                    <NavLink to={Path.PopularMovies} className={getLinkClass}>Category movies</NavLink>
                    <span className={s.separator}>|</span>
                    <NavLink to={Path.FilteredMovies} className={getLinkClass}>Filtered movies</NavLink>
                    <span className={s.separator}>|</span>
                    <NavLink to={Path.Search} className={getLinkClass}>Search</NavLink>
                    <span className={s.separator}>|</span>
                    <NavLink to={Path.Favorites} className={getLinkClass}>Favorites</NavLink>
                </nav>
                <button type="button" className={`${s.button} ${s.variantSecondary}`}
                        onClick={changeMode} title="Переключить на тёмную тему">{isLight ? '🌙' : '☀️'}
                </button>
            </div>
        </header>
    )
}
