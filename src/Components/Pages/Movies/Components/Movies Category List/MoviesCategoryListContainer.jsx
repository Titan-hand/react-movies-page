import React, { memo } from "react";
import MoviesCategorListComponent from "./MoviesCategoryListComponent";
import getLinearGradient from "../../../../Helpers/getLinearGradient";

// get the specify movie's array objects
function getMoviesByGenrer(moviesList, genrer) {
  const moviesByGenrer = moviesList.find(
    (movieList) => movieList.genrer === genrer
  );
  const moviesGenders = moviesByGenrer.movies;
  return moviesGenders.length >= 5 ? moviesGenders.slice(0, 5) : moviesGenders;
}
  
function MoviesCategoryList(props) {
  return (
    <MoviesCategorListComponent
      {...{ ...props, getLinearGradient, getMoviesByGenrer }}
    />
  );
}

export default memo(MoviesCategoryList);
