import {CategoryPage} from "@/features/movies/ui/CategoryPage/CategoryPage.tsx";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/tmdbApi.ts";
import {movieCategory} from "@/common/constants";
import {useState} from "react";
import {selectLanguage} from "@/app/model";
import {useSelector} from "react-redux";


export const PopularMovies = ()=>{
    const language = useSelector(selectLanguage);
    const [currentPage, setCurrentPage] = useState(1)
    const {data:popularData, isLoading} = useGetMoviesByCategoryQuery({category: movieCategory.popular, params: {page: currentPage, language}});
    const isRu = language === "ru-RU";
    const text = {
        popular: isRu? "Популярные фильмы":"Popular Movies"
    }
    return (
        <CategoryPage data={popularData}
                      pageTitle={text.popular}
                      currentPage={currentPage}
                      setCurrentPage ={setCurrentPage}
                      isLoading = {isLoading}
        />
    )
}