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

    Requests.getInfoMovieId(id, cancel.token)
      .then((movie) => {
        if (movie) {
          console.log(movie);
          setMovieInfo(movie);
          setLoading(false);
        }
      })
      .catch(() => {
        setError(true);
      });
    return () => {
      cancel && cancel.cancel(ABORTED_REQUEST);
    };
  }, [id]);

  return <MovieComponent {...{ movieInfo, isLoading, error, id }} />;
};

export default MovieContainer;
