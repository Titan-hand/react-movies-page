import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieComponent from "./MovieComponent";
import Requests from "../../Helpers/Resquests.js";
import { ABORTED_REQUEST } from "../../Config/networkErrors";
import axios from "axios";

let cancel = null;

const MovieContainer = () => {
  const { id } = useParams();
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

  return <MovieComponent {...{ movieInfo, isLoading, error, id }} />;
};

export default MovieContainer;
