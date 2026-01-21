import { getMovieByIdAction } from "@/core/actions/movies/get-movie-by-id.action";
import { getMovieCastAction } from "@/core/actions/movies/get-movie-cast.action";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, //la mantiene por 24 hs
  });
  const castQuery = useQuery({
    queryKey: ["movie", id, "cast"],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 24, //la mantiene por 24 hs
  });
  return { movieQuery, castQuery };
};
