import React from "react";
import { useParams } from "react-router-dom";
import MovieComponent from "./MovieComponent";

const MovieContainer = () => {
  const { id } = useParams();

  return <MovieComponent id={id}/>;
};

export default MovieContainer;
