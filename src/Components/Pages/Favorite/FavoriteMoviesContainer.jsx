import React from "react";
import FavoriteMoviesComponent from "./FavoriteMoviesComponent";
import useMovies from "../../Hooks/useMovies";

export default function FavoriteMoviesContainer() {
  const { moviesGenrers } = useMovies();

  return <FavoriteMoviesComponent moviesGenrers={moviesGenrers}/>;
}
