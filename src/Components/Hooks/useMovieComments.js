import { useState, useEffect, useCallback, useRef } from "react";
import Request from "../Helpers/Resquests";

export default function useMovieComments(id) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const isMounted = useRef(false);

  const handleSubmitComment = async (ev, text, commentId = null) => {
    ev.preventDefault();
    setLoading(true);

    let saved;
    try {
      if (commentId) saved = await Request.updateMovieComment(commentId, text);
      else saved = await Request.createMovieComment(id, text);
    } catch {
      isMounted.current && setError(true);
    }

    if (saved) getComments();
    else {
      if (isMounted.current) {
        setError(true);
        setLoading(false);
      }
    }
  };

  const getComments = useCallback(async () => {
    setLoading(true);
    try {
      const comments = await Request.getMovieComments(id);
      if (isMounted.current && comments) {
        setComments(comments);
      }
    } catch {
      isMounted.current && setError(true);
    }

    isMounted.current && setLoading(false);
  }, [id]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  return {
    loading,
    comments,
    error,
    handleSubmitComment,
    getComments,
  };
}
