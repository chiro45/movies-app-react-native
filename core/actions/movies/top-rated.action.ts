import { movieApi } from "@/core/api/movie-api";
import type { Movie } from "@/infraestructure/interfaces/movie-interface";
import type { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";
interface Options {
  page?: number;
  limit?: number;
}

export const topRatedMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated",{
      params: {
        page, limit
      }
    });
    const movies = data.results.map((movie) =>
      MovieMapper.fromTheMovieDbToMovie(movie),
    );
    return movies;
  } catch (error) {
    // Ver el error completo
    console.log(error);
    throw new Error("Cannot load now playing movies");
  }
};
