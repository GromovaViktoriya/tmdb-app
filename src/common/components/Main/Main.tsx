import s from "./Main.module.css"
import {SearchForm} from "@/common/components/SearchForm/SearchForm.tsx";
import {MainMovieComponent} from "@/features/movies/ui/MainMovieComponent/MainMovieComponent.tsx";
import {Path} from "@/common/routing";
import {useGetConfigurationQuery, useGetMoviesByCategoryQuery} from "@/features/movies/api/tmdbApi.ts";
import {movieCategory} from "@/common/constants";
import {getRandomElement} from "@/common/utils";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";

export const Main = () => {
    const language = useSelector(selectLanguage);
    const isRu = language === "ru-RU";
    const {data:popularData, isLoading:isPopularLoading} = useGetMoviesByCategoryQuery({category: movieCategory.popular, params:{language}})
    const {data:topRatedData, isLoading:isTopLoading} = useGetMoviesByCategoryQuery({category: movieCategory.topRated, params:{language}})
    const {data:upcomingData, isLoading:isUpcomingLoading} = useGetMoviesByCategoryQuery({category: movieCategory.upcoming, params:{language}})
    const {data:nowPlayingData, isLoading:isNowPlayingLoading} = useGetMoviesByCategoryQuery({category: movieCategory.nowPlaying, params:{language}})
    const {data:configurationData} = useGetConfigurationQuery()
    const secureBaseUrl = configurationData?.images.secure_base_url
    const posterSize = configurationData?.images.poster_sizes.find(el => el === "original")

    const randomPopularMovie = getRandomElement(popularData?.results || []);
    const isMainLoading = isPopularLoading || isTopLoading || isUpcomingLoading || isNowPlayingLoading;

    const text = {
        title: isRu ? "Добро пожаловать" : "Welcome",
        subtitle: isRu ? "Откройте для себя главные хиты TMDB" : "Browse highlighted titles from TMDB",
        popular: isRu ? "Популярные фильмы" : "Popular Movies",
        topRated: isRu ? "Лучшие по рейтингу" : "Top Rated Movies",
        upcoming: isRu ? "Ожидаемые новинки" : "Upcoming Movies",
        nowPlaying: isRu ? "Сейчас в кино" : "Now Playing Movies",
    };

    const backgroundStyle = randomPopularMovie?.backdrop_path
        ? {
            backgroundImage: `linear-gradient(rgba(4, 21, 45, 0) 0%, rgb(18, 18, 18) 79.17%), 
            url("${secureBaseUrl}${posterSize}${randomPopularMovie.backdrop_path}")`,
        }
        : {
            backgroundImage: `linear-gradient(135deg, rgb(4, 21, 45) 0%, rgb(18, 18, 18) 100%)`,
        };

    return (
        <section className={s.page}>
            <section className={s.section} style={backgroundStyle}>
                <div className={s.content}>
                    <h1 className={s.title}>{text.title}</h1>
                    <h2 className={s.subtitle}>{text.subtitle}</h2>
                    <SearchForm isLoading={isMainLoading}/>
                </div>
            </section>
            <section className={s.sections}>
                <MainMovieComponent title={text.popular} href={Path.PopularMovies} data={popularData?.results} isLoading={isPopularLoading}/>
                <MainMovieComponent title={text.topRated} href={Path.TopRatedMovies} data={topRatedData?.results} isLoading={isTopLoading}/>
                <MainMovieComponent title={text.upcoming} href={Path.UpcomingMovies} data={upcomingData?.results} isLoading={isUpcomingLoading}/>
                <MainMovieComponent title={text.nowPlaying} href={Path.NowPlayingMovies} data={nowPlayingData?.results} isLoading={isNowPlayingLoading}/>
            </section>
        </section>
    )
}