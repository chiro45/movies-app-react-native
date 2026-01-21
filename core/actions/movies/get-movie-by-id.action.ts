import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infraestructure/interfaces/movie-interface";
import { MovieDBDetailMovie } from "@/infraestructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const getMovieByIdAction = async (
  id: number | string,
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBDetailMovie>(`/${id}`);
    const movie = MovieMapper.fromTheMovieDbToCompleteMovie(data);
    return movie;
  } catch (error: any) {
    // Ver el error completo

    console.log("Config:", error.config);
    throw new Error("Cannot load now playing movies");
  }
};
