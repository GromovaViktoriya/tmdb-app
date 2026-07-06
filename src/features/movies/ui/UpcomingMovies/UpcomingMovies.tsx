import {useState} from "react";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/tmdbApi.ts";
import {movieCategory} from "@/common/constants";
import {CategoryPage} from "@/features/movies/ui/CategoryPage/CategoryPage.tsx";

export const UpcomingMovies = ()=>{
    const [currentPage, setCurrentPage] = useState(1)
    const {data:upcomingData, isLoading} = useGetMoviesByCategoryQuery({category: movieCategory.upcoming, params: {page: currentPage}})
    return (
        <CategoryPage data={upcomingData}
                      pageTitle={"Upcoming Movies"}
                      currentPage={currentPage}
                      setCurrentPage ={setCurrentPage}
                      isLoading={isLoading}
        />
    )
}