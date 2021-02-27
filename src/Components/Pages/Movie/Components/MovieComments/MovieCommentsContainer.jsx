import React, { memo } from "react";
import MovieCommentsComponent from "./MovieCommentsComponent";
import MovieCommentsContext from "../../../../Context/MovieCommentsContext";
import useMovieComments from "../../../../Hooks/useMovieComments";

function MovieCommentsContainer({ id, title_long }) {
  const status = useMovieComments(id);

  return (
    <MovieCommentsContext value={status}>
      <MovieCommentsComponent {...status} movieName={title_long} />
    </MovieCommentsContext>
  );
}

export default memo(MovieCommentsContainer);
