import {CategoryPage} from "@/features/movies/ui/CategoryPage/CategoryPage.tsx";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/tmdbApi.ts";
import {movieCategory} from "@/common/constants";
import {useState} from "react";

export const PopularMovies = ()=>{
    const [currentPage, setCurrentPage] = useState(1)
    const {data:popularData, isLoading} = useGetMoviesByCategoryQuery({category: movieCategory.popular, params: {page: currentPage}})
    return (
        <CategoryPage data={popularData}
                      pageTitle={"Popular Movies"}
                      currentPage={currentPage}
                      setCurrentPage ={setCurrentPage}
                      isLoading = {isLoading}
        />
    )
}