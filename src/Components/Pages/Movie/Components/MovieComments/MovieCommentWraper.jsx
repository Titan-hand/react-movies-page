import React, { useState } from "react";
import MovieComment from "./MovieComment";
import ReplyFormWrapper from "../replyFormWrapper";
import "../../Styles/comments.css";
import useMovieCommentsContext from "../../../../Hooks/useMovieCommentsContext";

function MovieCommentWraper({ commentData }) {
  const [showResponses, setShowResponses] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { getComments } = useMovieCommentsContext();
  const resp = commentData.responses;

  return (
    <div className="comment-wrapper">
      <MovieComment
        {...commentData}
        commentId={commentData._id}
        deleteCallback={getComments}
      />

      <div className="commentMakeReply" onClick={() => setShowForm(true)}>
        Reply comment
      </div>

      {resp?.length > 0 && !showResponses && (
        <div className="comment-show-replies">
          <div className="showResponses" onClick={() => setShowResponses(true)}>
            {"Show " + resp.length}
            {resp.length > 1 ? " replies" : " reply"}
          </div>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      )}

      <ReplyFormWrapper
        closeForm={() => setShowForm(false)}
        showForm={showForm}
        parentCommentId={commentData._id}
      />

      {resp && showResponses && (
        <div className="comment-wrapper-responses">
          {resp.map((r, i) => (
            <MovieComment
              {...r}
              key={i}
              commentId={commentData._id}
              deleteCallback={getComments}
              index={i}
              isReply
            />
          ))}
        </div>
      )}

      {resp && showResponses && (
        <div
          className="comment-show-replies"
          onClick={() => setShowResponses(false)}
        >
          <p>Hide Replies</p>
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        </div>
      )}
    </div>
  );
}

export default MovieCommentWraper;
