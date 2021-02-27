import React from "react";
import MoviesComponent from "./MoviesComponent";
import useMovies from "../../Hooks/useMovies";

export default function MoviesContainer() {
  const { moviesGenrers, isLoading, error } = useMovies();

  return <MoviesComponent {...{ moviesGenrers, isLoading, error }} />;
}
