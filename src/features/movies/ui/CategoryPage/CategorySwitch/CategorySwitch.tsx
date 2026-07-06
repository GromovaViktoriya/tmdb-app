import s from "./CategorySwitch.module.css";
import { NavLink} from "react-router";
import {Path} from "@/common/routing";



export const CategorySwitch = () => {
    const getLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? `button variantSecondary sizeSmall ${s.buttonActive}` : 'button variantSecondary sizeSmall'

    return (
        <div className={s.categorySwitchContainer}>
            <div className={s.categoryButtons}>
                <NavLink className={getLinkClass} to={Path.PopularMovies}
                      data-discover="true" aria-current="page">Popular Movies</NavLink>
                <NavLink className={getLinkClass} to={Path.TopRatedMovies}
                      data-discover="true" aria-current="page">Top Rated Movies</NavLink>
                <NavLink className={getLinkClass} to={Path.UpcomingMovies}
                      data-discover="true" aria-current="page">Upcoming Movies</NavLink>
                <NavLink className={getLinkClass} to={Path.NowPlayingMovies}
                      data-discover="true" aria-current="page">Now Playing Movies</NavLink>
            </div>
        </div>
    )
}