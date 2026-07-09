import {useState} from "react";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/tmdbApi.ts";
import {movieCategory} from "@/common/constants";
import {CategoryPage} from "@/features/movies/ui/CategoryPage/CategoryPage.tsx";
import {useSelector} from "react-redux";
import {selectLanguage} from "@/app/model";

export const UpcomingMovies = ()=>{
    const language = useSelector(selectLanguage);
    const [currentPage, setCurrentPage] = useState(1)
    const {data:upcomingData, isLoading} = useGetMoviesByCategoryQuery({category: movieCategory.upcoming, params: {page: currentPage, language }})
    const isRu = language === "ru-RU";
    const text = {
        upcoming: isRu? "Ожидаемые новинки":"Upcoming Movies"
    }

    return (
        <CategoryPage data={upcomingData}
                      pageTitle={text.upcoming}
                      currentPage={currentPage}
                      setCurrentPage ={setCurrentPage}
                      isLoading={isLoading}
        />
    )
}