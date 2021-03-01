import React, { useState } from "react";
import TextArea from "../../../../Elements/Inputs/TextArea";
import BtnSubmit from "../../../../Elements/Buttons/Submit";
import useMovieCommentsContext from "../../../../Hooks/useMovieCommentsContext";
import useCurrentUserInfo from "../../../../Hooks/useCurrentUserInfo";

function MovieCommentForm({
  commentId = null,
  defaultValue = "",
  submitCallback = () => null,
}) {
  const [text, setText] = useState(defaultValue);
  const { handleSubmitComment, loading } = useMovieCommentsContext();
  const currentUserInfo = useCurrentUserInfo();

  const handleChange = (ev) => setText(ev.target.value);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setText("");
    submitCallback();
    handleSubmitComment(ev, text, commentId);
  };

  return (
    <div className="comment-user-form">
      {!commentId && (
        <div className="form-usr-avatar">
          <img src={currentUserInfo.photoUrl} alt="user avatar" />
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-user-comment">
        <TextArea
          onChange={handleChange}
          defaultValue={defaultValue}
          placeholder="write a comment"
          className="text-area-comment"
        />
        <div className="button-comment-container">
          <BtnSubmit value="comment" disabled={loading} />
        </div>
      </form>
    </div>
  );
}

export default MovieCommentForm;
