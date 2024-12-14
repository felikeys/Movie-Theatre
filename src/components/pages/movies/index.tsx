import { useGetMoviesQuery } from "@/features/slice/api-slice";
import MovieCard from "./movie-card";
import { MovieList } from "./type";

const MovieLists = () => {
    const {data: movieLists} = useGetMoviesQuery({})

    console.log(movieLists);
  return (
    <div className="grid grid-cols-4 gap-4">
        {movieLists?.results.map((movie: MovieList, index: number) => (
            <MovieCard key={index} movie={movie} />
        ))}
    </div>
  )
}

export default MovieLists;