import { SET_MOVIES } from "../Actions/Constants/MoviesActions";

// el state=[] es sólo para la propiedad de pelicula del store
// no significa que todo el estado sera un arreglo vacio
// lo demas elementos del store no se ven afectados
export default function Movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return {
        movies: action.payload,
      };

    default:
      return state;
  }
}
