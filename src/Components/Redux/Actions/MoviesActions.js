import { SET_MOVIES } from "./Constants/MoviesActions";

export function SetMovies(movies) {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
}
