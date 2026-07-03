import {useState} from "react";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/tmdbApi.ts";
import {movieCategory} from "@/common/constants";
import {CategoryPage} from "@/features/movies/ui/CategoryPage/CategoryPage.tsx";

export const NowPlayingMovies = ()=>{
    const [currentPage, setCurrentPage] = useState(1)
    const {data:nowPlayingData} = useGetMoviesByCategoryQuery({category: movieCategory.nowPlaying, params: {page: currentPage}})
    return (
        <CategoryPage data={nowPlayingData} pageTitle={"Now Playing Movies"} currentPage={currentPage} setCurrentPage ={setCurrentPage}/>
    )
}