export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  poster: string;
  backdrop: string;
  rating: number;
}

export interface CompleteMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}
