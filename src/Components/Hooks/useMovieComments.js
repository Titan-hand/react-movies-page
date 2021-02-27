import { useState, useEffect, useCallback } from "react";
import Request from "../Helpers/Resquests";

export default function useMovieComments(id) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmitComment = async (ev, text, commentId = null) => {
    ev.preventDefault();
    setLoading(true);

    let saved;
    try {
      if (commentId) saved = await Request.updateMovieComment(commentId, text);
      else saved = await Request.createMovieComment(id, text);
    } catch {
      setError(true);
    }

    if (saved) getComments();
    else {
      setError(true);
      setLoading(false);
    }
  };

  const getComments = useCallback(async () => {
    setLoading(true);
    try {
      const comments = await Request.getMovieComments(id);
      if (comments) {
        setComments(comments);
      }
    } catch {
      setError(true);
    }

    setLoading(false);
  }, [id]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  return {
    loading,
    comments,
    error,
    handleSubmitComment,
    getComments,
  };
}
