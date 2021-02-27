import React from "react";
import { useParams } from "react-router-dom";
import useMovieInfo from "../../Hooks/useMovieInfo.js";
import MovieComponent from "./MovieComponent";

const MovieContainer = () => {
  const id = useParams().id;
  const { movieInfo, isLoading, error } = useMovieInfo(id);

  return <MovieComponent {...{ movieInfo, isLoading, error, id }} />;
};

export default MovieContainer;
