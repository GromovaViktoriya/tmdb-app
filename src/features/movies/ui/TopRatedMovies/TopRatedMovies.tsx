import {useState} from "react";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/tmdbApi.ts";
import {movieCategory} from "@/common/constants";
import {CategoryPage} from "@/features/movies/ui/CategoryPage/CategoryPage.tsx";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";

export const TopRatedMovies = ()=>{
    const language = useSelector(selectLanguage);
    const [currentPage, setCurrentPage] = useState(1)
    const {data:topRatedData, isLoading} = useGetMoviesByCategoryQuery({category: movieCategory.topRated, params: {page: currentPage, language}});
    const isRu = language === "ru-RU";
    const text = {
        topRated: isRu? "Лучшие по рейтингу":"Top Rated Movies"
    }
    return (
        <CategoryPage data={topRatedData}
                      pageTitle={text.topRated}
                      currentPage={currentPage}
                      setCurrentPage ={setCurrentPage}
                      isLoading={isLoading}
        />
    )
}