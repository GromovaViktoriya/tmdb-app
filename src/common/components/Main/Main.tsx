import s from "./Main.module.css"
import {SearchForm} from "@/common/components/SearchForm/SearchForm.tsx";
import {MainMovieComponent} from "@/features/movies/ui/MainMovieComponent/MainMovieComponent.tsx";
import {Path} from "@/common/routing";
import {getRandomElement} from "@/common/utils/getRandomElement.ts";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/tmdbApi.ts";
import {movieCategory} from "@/common/constants";

export const Main = () => {
    const {data:popularData, isLoading:isPopularLoading} = useGetMoviesByCategoryQuery({category: movieCategory.popular})
    const {data:topRatedData, isLoading:isTopLoading} = useGetMoviesByCategoryQuery({category: movieCategory.topRated})
    const {data:upcomingData, isLoading:isUpcomingLoading} = useGetMoviesByCategoryQuery({category: movieCategory.upcoming})
    const {data:nowPlayingData, isLoading:isNowPlayingLoading} = useGetMoviesByCategoryQuery({category: movieCategory.nowPlaying})

    const randomPopularMovie = getRandomElement(popularData?.results || []);
    const isMainLoading = isPopularLoading || isTopLoading || isUpcomingLoading || isNowPlayingLoading;

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
                    <SearchForm isLoading={isMainLoading}/>
                </div>
            </section>
            <section className={s.sections}>
                <MainMovieComponent title={"Popular Movies"} href={Path.PopularMovies} data={popularData?.results} isLoading={isPopularLoading}/>
                <MainMovieComponent title={"Top Rated Movies"} href={Path.TopRatedMovies} data={topRatedData?.results} isLoading={isTopLoading}/>
                <MainMovieComponent title={"Upcoming Movies"} href={Path.UpcomingMovies} data={upcomingData?.results} isLoading={isUpcomingLoading}/>
                <MainMovieComponent title={"Now Playing Movies"} href={Path.NowPlayingMovies} data={nowPlayingData?.results} isLoading={isNowPlayingLoading}/>
            </section>
        </section>
    )
}