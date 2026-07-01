import {Header} from "@/common/components/Header/Header.tsx";
import {Footer} from "@/common/components/Footer/Footer.tsx";
import s from "./App.module.css"
import {Outlet} from "@/common/components/Outlet/Outlet.tsx";
import {
    useFetchNowPlayingMoviesQuery,
    useFetchPopularMoviesQuery, useFetchTopRatedMoviesQuery,
    useFetchUpcomingMoviesQuery
} from "@/features/movies/api/tmdbApi.ts";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";


function App() {
    const {isFetching:popularFetching} = useFetchPopularMoviesQuery({language: "en-US", page: 1})
    const {isFetching:nowPlayingFetching} = useFetchNowPlayingMoviesQuery({language: "en-US", page: 1})
    const {isFetching:upcomingFetching} = useFetchUpcomingMoviesQuery({language: "en-US", page: 1})
    const {isFetching:topRatedFetching} = useFetchTopRatedMoviesQuery({language: "en-US", page: 1})

    return (
        <div className={s.app}>
            <Header/>
            {(popularFetching && nowPlayingFetching && upcomingFetching && topRatedFetching)  && <LinearProgress/>}
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default App
