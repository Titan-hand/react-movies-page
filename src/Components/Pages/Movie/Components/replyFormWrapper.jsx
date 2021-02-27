import React from "react";
import { useSelector } from "react-redux";
import MovieComment from "./MovieComments/MovieComment";
import useReplyMovieForm from "../../../Hooks/useReplyMovieForm";
import ReplyForm from "./replyForm";

function ReplyFormWrapper(props) {
  const { currentUserInfo } = useSelector((state) => state.UserInformation);
  const { replies, addReplyToShow, removeReply } = useReplyMovieForm(
    currentUserInfo
  );

  return (
    <div className="replyForm-and-new-replies">
      {replies.map((r, i) => (
        <MovieComment
          key={i}
          {...r}
          commentId={r.parentCommentId}
          isReply
          deleteCallback={() => removeReply(i)}
        />
      ))}

      <ReplyForm {...props} submitCallback={addReplyToShow} />
    </div>
  );
}

export default ReplyFormWrapper;
