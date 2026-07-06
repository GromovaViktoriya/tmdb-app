import {Header} from "@/common/components/Header/Header.tsx";
import {Footer} from "@/common/components/Footer/Footer.tsx";
import s from "./App.module.css"
import {Outlet} from "@/common/components/Outlet/Outlet.tsx";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/tmdbApi.ts";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";
import {movieCategory} from "@/common/constants";
import {ToastContainer} from "react-toastify";


function App() {
    const {isFetching:popularFetching} = useGetMoviesByCategoryQuery({category: movieCategory.popular})
    const {isFetching:nowPlayingFetching} = useGetMoviesByCategoryQuery({category: movieCategory.nowPlaying})
    const {isFetching:upcomingFetching} = useGetMoviesByCategoryQuery({category: movieCategory.upcoming})
    const {isFetching:topRatedFetching} = useGetMoviesByCategoryQuery({category: movieCategory.topRated})

    return (
        <div className={s.app}>
            <Header/>
            {(popularFetching && nowPlayingFetching && upcomingFetching && topRatedFetching)  && <LinearProgress/>}
            <Outlet/>
            <Footer/>
            <ToastContainer />
        </div>
    )
}

export default App
