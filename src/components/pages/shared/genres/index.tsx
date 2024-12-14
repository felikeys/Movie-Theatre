import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetGenreListQuery } from "@/features/slice/api-slice";
import { GenreList } from "./types";

export function Genre() {
  const { data: genreList, isLoading } = useGetGenreListQuery({});

  const genres: GenreList[] = genreList?.genres;

  console.log(genreList);
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Genre" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Genre</SelectLabel>
          {isLoading && <SelectItem value="loading">Loading...</SelectItem>}
          {Array.isArray(genres) &&
            genres.map((genre: GenreList, index: number) => (
              <SelectItem key={index} value={genre.id.toString()}>
                {genre.name}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
