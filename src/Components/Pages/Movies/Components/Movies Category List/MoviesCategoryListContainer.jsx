import React, { memo } from "react";
import bannersColors from "../../../../Config/bannerColorsMoviesCategory.js";
import RGBA from "../../../../Helpers/rgba.js";
import MoviesCategorListComponent from "./MoviesCategoryListComponent";

// get the specify movie's array objects
function getMoviesByGenrer(moviesList, genrer) {
  const moviesByGenrer = moviesList.find(
    (movieList) => movieList.genrer === genrer
  );
  const moviesGenders = moviesByGenrer.movies;
  return moviesGenders.length >= 5 ? moviesGenders.slice(0, 5) : moviesGenders;
}

function getLinearGradient(genrer) {
  const { color1, color2 } = bannersColors[genrer];
  const background = `linear-gradient(to right, ${RGBA(color1, 70)}, ${RGBA(
    color2,
    50
  )})`;
  return background;
}

function MoviesCategoryList(props) {
  return (
    <MoviesCategorListComponent
      {...{ ...props, getLinearGradient, getMoviesByGenrer }}
    />
  );
}

export default memo(MoviesCategoryList);
