import React from "react";
import Loader from "../../Elements/Loaders/Loader";
import ErrorAlert from "../../Elements/Errors/ErrorAlert";
import CommentForm from "./Components/commentForm";
import CommentWrapper from "./Components/commentWrapper";

import "./Styles/comments.css";

function CommentsComponent({ handleSubmitComment, comments, loading, error }) {
  return (
    <div className="comments">
      <h2 id="h2-comments">Comments</h2>
      <CommentForm handleSubmitComment={handleSubmitComment} />
      {loading ? (
        <Loader size="30" isopen={loading} />
      ) : error ? (
        <ErrorAlert
          title="Some error was happened"
          description="A network error ocurred in fetch comments movie"
        />   
      ) : (
        comments.map((comment, i) => {
          return <CommentWrapper key={i} commentData={comment} />;
        })
      )}
    </div>
  );
}

export default CommentsComponent;
