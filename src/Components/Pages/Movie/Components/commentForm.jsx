import React, { useState, useContext } from "react";
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
  const { handleSubmitComment } = useContext(CommentsContext);

  const handleChange = (ev) => setText(ev.target.value);
  // handle submit wrapper
  const handleSubmit = (ev) => {
    ev.preventDefault();
    setText("");
    submitCallback();
    handleSubmitComment(ev, text, commentId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextArea
        onChange={handleChange}
        defaultValue={defaultValue}
        placeholder="write a comment"
      />
      <div className="button-comment-container">
        <Button value="comment" />
      </div>
    </form>
  );
}

export default CommentForm;
