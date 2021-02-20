export const BASE_URL = "https://expressmovies.vercel.app/api/";
//export const BASE_URL = "http://localhost:5000/api/";
export const SIGNUP_URL = `${BASE_URL}users/signup`;
export const LOGIN_URL = `${BASE_URL}users/login`;
export const GET_INFO_USER_LOGGED = `${BASE_URL}users/current`;
export const VALIDATE_TOKEN_URL = `${BASE_URL}validate/user-token`;
export const COMMENTS_URL = `${BASE_URL}comments`;
export const SET_FAVORITE_MOVIE = `${BASE_URL}movieFavs/toggle`;
export const GET_FAVORITE_MOVIES_USER = (userId) =>
  `${BASE_URL}movieFavs/${userId}`;
