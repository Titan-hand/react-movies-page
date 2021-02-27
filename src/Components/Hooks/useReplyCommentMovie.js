import { useState } from "react";
import Request from "../Helpers/Resquests";

export default function useReplyCommentMovie({
  closeForm,
  parentCommentId,
  isEditing,
  index,
  submitCallback = () => {},
}) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (ev) => setText(ev.target.value);

  const clearForm = () => {
    setText("");
    closeForm();
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setLoading(true);

    let saved;
    try {
      if (isEditing) {
        saved = await Request.updateMovieCommentReply(
          parentCommentId,
          index,
          text
        );
      } else {
        saved = await Request.createMovieCommentReply(parentCommentId, text);
      }
    } catch {
      setError(true);
    }

    let txt = text;
    setLoading(false);
    clearForm();

    if (saved.ok) submitCallback(txt, saved.data.parentCommentId);
    else setError(true);
  };

  return {
    text,
    loading,
    error,
    handleChange,
    handleSubmit,
  };
}
