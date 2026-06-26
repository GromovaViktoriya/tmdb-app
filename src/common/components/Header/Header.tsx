import s from "./Header.module.css"
import {Path} from "@/common/routing";
import logo from "@/assets/images/logo_alt_short.svg"

export const Header = () => {
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
                <button type="button" className={`${s.button} ${s.variantSecondary}`} title="Переключить на тёмную тему">🌙</button>
            </div>
        </header>
    )
}
