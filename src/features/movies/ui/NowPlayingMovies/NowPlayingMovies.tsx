import {useState} from "react";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/tmdbApi.ts";
import {movieCategory} from "@/common/constants";
import {CategoryPage} from "@/features/movies/ui/CategoryPage/CategoryPage.tsx";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";

export const NowPlayingMovies = ()=>{
    const language = useSelector(selectLanguage);
    const isRu = language === "ru-RU";
    const text = {
        nowPlaying: isRu? "Сейчас в кино":"Now Playing Movies"
    }
    const [currentPage, setCurrentPage] = useState(1)
    const {data:nowPlayingData, isLoading} = useGetMoviesByCategoryQuery({category: movieCategory.nowPlaying, params: {page: currentPage, language}});
    return (
        <CategoryPage data={nowPlayingData}
                      pageTitle={text.nowPlaying}
                      currentPage={currentPage}
                      setCurrentPage ={setCurrentPage}
                      isLoading={isLoading}
        />
    )
}