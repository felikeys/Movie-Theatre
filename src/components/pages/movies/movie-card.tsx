import { MovieList } from "./type";

interface MovieCardProps {
  movie: MovieList;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="poster"
        className="w-full h-auto"
      />
      <p className="text-lg font-medium text-center">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
