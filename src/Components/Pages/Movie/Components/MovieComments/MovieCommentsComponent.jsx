import React, { memo } from "react";
import Loader from "../../../../Elements/Loaders/Loader";
import ErrorAlert from "../../../../Elements/Errors/ErrorAlert";
import MovieCommentForm from "./MovieCommentForm";
import MovieCommentWraper from "./MovieCommentWraper";

import "../../Styles/comments.css";

function MovieCommentsComponent({ comments, loading, error }) {
  return (
    <div className="comments">
      <h2 id="h2-comments">Comments</h2>
      <MovieCommentForm />
      {loading ? (
        <Loader size="30" isopen={loading} />
      ) : error ? (
        <ErrorAlert
          title="Some error was happened"
          description="A network error ocurred in fetch comments movie"
        />
      ) : (
        comments.map((comment, i) => {
          return <MovieCommentWraper key={i} commentData={comment} />;
        })
      )}
    </div>
  );
}

export default memo(MovieCommentsComponent);
