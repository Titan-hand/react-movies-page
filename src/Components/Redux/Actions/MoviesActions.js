import { SET_MOVIES } from "../Types/moviesTypes";

export function SetMovies(movies) {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
}
