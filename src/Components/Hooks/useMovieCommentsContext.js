import { useContext } from "react";
import { CommentsContext } from "../Context/MovieCommentsContext";

export default function useMovieCommentsContext() {
  const props = useContext(CommentsContext);
  return props;
}
