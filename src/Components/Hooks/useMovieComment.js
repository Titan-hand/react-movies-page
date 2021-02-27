import { useState } from "react";

export default function useMovieComment(text) {
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [_text, setText] = useState(text);

  const submitCallback = (txt) => {
    setText(txt);
    setEditing(false);
  };

  const enableEditing = () => setEditing(true);
  const disableEditing = () => setEditing(true);
  const enableDeleting = () => setDeleting(true);

  return {
    deleting,
    editing,
    _text,
    submitCallback,
    enableEditing,
    disableEditing,
    enableDeleting,
    setDeleting,
  };
}
