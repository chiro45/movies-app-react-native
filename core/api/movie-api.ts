import axios from "axios";

const URL_API = process.env.EXPO_PUBLIC_MOVIE_DB_URL;
const API_KEY = process.env.EXPO_PUBLIC_MOVIE_DB_KEY;
export const movieApi = axios.create({
  baseURL: URL_API,
  params: {
    language: "en-US",
    api_key: API_KEY,
  },
});
