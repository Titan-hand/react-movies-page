import { useState, useEffect } from "react";
import Requests from "../Helpers/Resquests.js";
import { ABORTED_REQUEST } from "../Config/networkErrors";
import axios from "axios";

let cancel = null;

export default function useMovieInfo(id) {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cancel = axios.CancelToken.source();
    async function getInfoMovie() {
      try {
        const movie = await Requests.getInfoMovieId(id, cancel.token);
        if (movie) {
          setMovieInfo(movie);
          setLoading(false);
        }
      } catch {
        setError(true);
      }
    }

    getInfoMovie();
    return () => {
      cancel && cancel.cancel(ABORTED_REQUEST);
    };
  }, [id]);

  return { movieInfo, isLoading, error };
}
