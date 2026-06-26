import {Route, Routes} from "react-router";
import {Path} from "@/common/routing/Path.ts";
import {Main} from "@/common/components/Main/Main.tsx";
import {PopularMovies} from "@/features/movies/ui/PopularMovies/PopularMovies.tsx";
import {TopRatedMovies} from "@/features/movies/ui/TopRatedMovies/TopRatedMovies.tsx";
import {UpcomingMovies} from "@/features/movies/ui/UpcomingMovies/UpcomingMovies.tsx";
import {FilteredMovies} from "@/features/movies/ui/FilteredMovies/FilteredMovies.tsx";
import {NowPlayingMovies} from "@/features/movies/ui/NowPlayingMovies/NowPlayingMovies.tsx";
import {Favorites} from "@/common/components/Favorites/Favorites.tsx";
import {PageNotFound} from "@/common/components/PageNotFound/PageNotFound.tsx";
import {SearchPage} from "@/common/components/SearchPage/SearchPage.tsx";


export const Routing = () => (
    <Routes>
        <Route path={Path.Main} element={<Main />} />
        <Route path={Path.PopularMovies} element={<PopularMovies />} />
        <Route path={Path.TopRatedMovies} element={<TopRatedMovies />} />
        <Route path={Path.UpcomingMovies} element={<UpcomingMovies />} />
        <Route path={Path.FilteredMovies} element={<FilteredMovies />} />
        <Route path={Path.NowPlayingMovies} element={<NowPlayingMovies />} />
        <Route path={Path.Search} element={<SearchPage />} />
        <Route path={Path.Favorites} element={<Favorites />} />
        <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
)