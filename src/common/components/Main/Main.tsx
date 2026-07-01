import s from "./Main.module.css"
import {SearchForm} from "@/common/components/SearchForm/SearchForm.tsx";
import {MainMovieComponent} from "@/features/movies/ui/MainMovieComponent/MainMovieComponent.tsx";
import {Path} from "@/common/routing";
import {
    useFetchNowPlayingMoviesQuery,
    useFetchPopularMoviesQuery,
    useFetchTopRatedMoviesQuery,
    useFetchUpcomingMoviesQuery
} from "@/features/movies/api/tmdbApi.ts";
import {getRandomElement} from "@/common/utils/getRandomElement.ts";

export const Main = () => {
    const {data:popularData} = useFetchPopularMoviesQuery({language: "en-US", page: 1})
    const {data:topRatedData} = useFetchTopRatedMoviesQuery({language: "en-US", page: 1})
    const {data:upcomingData} = useFetchUpcomingMoviesQuery({language: "en-US", page: 1})
    const {data:nowPlayingData} = useFetchNowPlayingMoviesQuery({language: "en-US", page: 1})

    const randomPopularMovie = getRandomElement(popularData?.results || []);

    const backgroundStyle = randomPopularMovie?.backdrop_path
        ? {
            backgroundImage: `linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(18, 18, 18) 79.17%), 
            url("https://image.tmdb.org/t/p/original${randomPopularMovie.backdrop_path}")`,
        }
        : {
            backgroundImage: `linear-gradient(135deg, rgb(4, 21, 45) 0%, rgb(18, 18, 18) 100%)`,
        };

    return (
        <section className={s.page}>
            <section className={s.section} style={backgroundStyle}>
                <div className={s.content}>
                    <h1 className={s.title}>Welcome</h1>
                    <h2 className={s.subtitle}>Browse highlighted titles from TMDB</h2>
                    <SearchForm/>
                </div>
            </section>
            <section className={s.sections}>
                <MainMovieComponent title={"Popular Movies"} href={Path.PopularMovies} data={popularData?.results}/>
                <MainMovieComponent title={"Top Rated Movies"} href={Path.TopRatedMovies} data={topRatedData?.results}/>
                <MainMovieComponent title={"Upcoming Movies"} href={Path.UpcomingMovies} data={upcomingData?.results}/>
                <MainMovieComponent title={"Now Playing Movies"} href={Path.NowPlayingMovies} data={nowPlayingData?.results}/>
            </section>
        </section>
    )
}