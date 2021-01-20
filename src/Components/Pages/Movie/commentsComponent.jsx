import React from "react";
import Loader from "../../Elements/Loaders/Loader";
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
        <h1>some error was happened</h1>
      ) : (
        comments.map((comment, i) => {
          return <CommentWrapper key={i} commentData={comment} />;
        })
      )}
    </div>
  );
}

export default CommentsComponent;
