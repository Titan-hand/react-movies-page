export const MOVIES_GENRERS = [
  "comedy",
  "horror",
  "romance",
  "action",
  "drama",
  "mistery",
  "crime",
  "fantasy",
  "animation",
];

export const MOVIE_API_BASE_URL = "https://yts.mx/api/v2/";

export const MOVIES_ALL = `${MOVIE_API_BASE_URL}list_movies.json`;

export const MOVIES_GENRERS_URL = (genrer) =>
  `${MOVIE_API_BASE_URL}list_movies.json?genre=${genrer}`;

export const MOVIE_ID_URL = (id) =>
  `${MOVIE_API_BASE_URL}movie_details.json?movie_id=${id}`;
