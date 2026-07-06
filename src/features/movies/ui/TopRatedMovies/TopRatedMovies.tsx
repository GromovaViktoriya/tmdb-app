import {useState} from "react";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/tmdbApi.ts";
import {movieCategory} from "@/common/constants";
import {CategoryPage} from "@/features/movies/ui/CategoryPage/CategoryPage.tsx";

export const TopRatedMovies = ()=>{
    const [currentPage, setCurrentPage] = useState(1)
    const {data:topRatedData, isLoading} = useGetMoviesByCategoryQuery({category: movieCategory.topRated, params: {page: currentPage}})
    return (
        <CategoryPage data={topRatedData}
                      pageTitle={"Top Rated Movies"}
                      currentPage={currentPage}
                      setCurrentPage ={setCurrentPage}
                      isLoading={isLoading}
        />
    )
}