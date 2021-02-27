import { useState } from "react";

export default function useReplyMovieForm(currentUserInfo) {
  const [replies, setReplies] = useState([]);

  const addReplyToShow = (text, parentCommentId) =>
    setReplies((prevState) => {
      const { username, photoUrl } = currentUserInfo;
      const newReply = {
        username,
        photoUrl,
        text,
        date: Date.now(),
        parentCommentId,
      };
      return [...prevState, newReply];
    });

  const removeReply = (index) => {
    let repliesCopy = [...replies];
    repliesCopy.splice(index, 1);
    setReplies(repliesCopy);
  };

  return {
    replies,
    addReplyToShow,
    removeReply,
  };
}
