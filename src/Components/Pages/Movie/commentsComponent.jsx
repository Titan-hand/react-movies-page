import React from "react";
// components
import Container from "../../Elements/Containers/ContainerComponent";
import Loader from "../../Elements/Loaders/Loader";
import CommentForm from "./Components/commentForm";
import CommentWrapper from "./Components/commentWrapper";

function CommentsComponent({
  handleSubmitComment,
  comments,
  loading,
  error,
  movieName,
}) {
  return (
    <Container>
      <h2>Comments for {movieName}</h2>
      <CommentForm handleSubmitComment={handleSubmitComment} />
      {loading ? (
        <Loader size="30" />
      ) : error ? (
        <h1>some error was happened</h1>
      ) : (
        comments.map((comment, i) => {
          // pass handleSubmitComment to Comment, because user can make a comment reply
          return <CommentWrapper key={i} commentData={comment} />;
        })
      )}
    </Container>
  );
}

export default CommentsComponent;
