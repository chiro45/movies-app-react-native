import { movieApi } from "@/core/api/movie-api";
import type { Movie } from "@/infraestructure/interfaces/movie-interface";
import type { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const nowPlayingAction = async (): Promise<Movie[]> => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/now_playing");
    const movies = data.results.map((movie) =>
      MovieMapper.fromTheMovieDbToMovie(movie),
    );
    return movies;
  } catch (error: any) {
    // Ver el error completo

    console.log("Config:", error.config);
    throw new Error("Cannot load now playing movies");
  }
};
