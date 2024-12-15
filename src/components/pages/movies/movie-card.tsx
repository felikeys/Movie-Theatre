import { useNavigate } from "react-router-dom";
import { MovieList } from "./type";
import { ROUTES } from "@/lib/constants";

interface MovieCardProps {
  movie: MovieList;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-lg shadow-md cursor-pointer"
      onClick={() => navigate(ROUTES.moviePreview(movie.id.toString()))}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="poster"
        className="w-full h-auto rounded-lg"
      />
      <p className="text-lg font-medium text-center">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
