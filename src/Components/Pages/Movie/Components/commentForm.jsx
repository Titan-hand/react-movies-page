import React, { useState, useContext } from "react";
// redux
import { useSelector } from "react-redux";
// context
import { CommentsContext } from "../commentsContainer";
// components
import TextArea from "../../../Elements/Inputs/TextArea";
import Button from "../../../Elements/Buttons/Submit";

function CommentForm({
  commentId = null,
  defaultValue = "",
  submitCallback = () => null,
}) {
  const [text, setText] = useState(defaultValue);
  const { handleSubmitComment, loading } = useContext(CommentsContext);
  const { currentUserInfo } = useSelector((state) => state.UserInformation);

  const handleChange = (ev) => setText(ev.target.value);
  // handle submit wrapper
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
          <Button value="comment" disabled={loading} />
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
