import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infraestructure/interfaces/cast-interface";
import { MovieDbCreditRepsonse } from "@/infraestructure/interfaces/movieDb-credit-response";
import { CastMapper } from "@/infraestructure/mappers/cast.mapper";

export const getMovieCastAction = async (movieId: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<MovieDbCreditRepsonse>(
      `/${movieId}/credits`,
    );

    return data.cast.map((cast) => CastMapper.fromMovieDBCastToEntity(cast));
  } catch (error: any) {
    // Ver el error completo

    console.log("Config:", error.config);
    throw new Error("Cannot load cast by id");
  }
};
