import { useGetMoviesQuery } from "@/features/slice/api-slice";
import MovieCard from "./movie-card";
import { MovieList } from "./type";
import Spinner from "../shared/spinner";

const MovieLists = () => {
    const {data: movieLists, isLoading} = useGetMoviesQuery({})

    return isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {movieLists?.results.map((movie: MovieList) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      );
      
}

export default MovieLists;