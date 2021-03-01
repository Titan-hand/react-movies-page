import React from "react";
import MovieComment from "./MovieComment";
import useReplyMovieForm from "../../../../Hooks/useReplyMovieForm";
import ReplyCommentForm from "./ReplyCommentForm";
import useCurrentUserInfo from "../../../../Hooks/useCurrentUserInfo";

function ReplyFormWrapper(props) {
  const currentUserInfo = useCurrentUserInfo();
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

      <ReplyCommentForm {...props} submitCallback={addReplyToShow} />
    </div>
  );
}

export default ReplyFormWrapper;
