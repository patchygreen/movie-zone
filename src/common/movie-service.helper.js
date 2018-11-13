/**
 * This helper file contains helper functions for connecting to the TMDb service.
 * The API Key is hardcoded here for convenience but will be removed to an environment config file. (.env)
 */

const MOVIE_DB_API_KEY = "a55d9216d5229c24b301c848809a2a1b";
const MOVIE_DB_BASE_URL = "https://api.themoviedb.org/3";

const createMovieDbUrl = (relativeUrl) => {
    return `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
};

export const getTopMovies = async () => {
  const fullUrl = createMovieDbUrl("/movie/now_playing");
  return fetch(fullUrl).then((data) => data.json());
};

export const getGenres = async () => {
    const fullUrl = createMovieDbUrl("/genre/movie/list");
    return fetch(fullUrl).then((data) => data.json());
};
