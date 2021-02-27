import { useState } from "react";
import Request from "../Helpers/Resquests";

export default function useDeleteMovieComment({
  commentId,
  index,
  deleteCallback = null,
  setShowDelete,
  isReply = false,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteComment = async () => {
    setLoading(true);
    setError(null);
    console.log("the comment id", commentId);
    try {
      if (isReply) {
        await Request.deleteMovieCommentReply(commentId, index);
      } else {
        await Request.deleteMovieComment(commentId);
      }
    } catch {
      setError(true);
    }

    setLoading(false);
    deleteCallback ? deleteCallback() : setShowDelete(false);
  };

  return {
    loading,
    error,
    deleteComment,
  };
}
