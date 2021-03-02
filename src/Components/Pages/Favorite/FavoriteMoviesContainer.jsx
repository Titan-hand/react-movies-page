import React, { memo } from "react";
import FavoriteMoviesComponent from "./FavoriteMoviesComponent";
import useMovies from "../../Hooks/useMovies";
import useGetFavoriteMovies from "../../Hooks/useGetFavoriteMovies";

function FavoriteMoviesContainer() {
  const {
    favoriteMovies,
    isLoading: favoriteMoviesLoading,
    error: errorFavoriteMovies,
  } = useGetFavoriteMovies();
  const {
    moviesGenrers,
    isLoading: moviesGenrersLoading,
    error: errorMoviesGenrersError,
  } = useMovies();

  return (
    <FavoriteMoviesComponent
      {...{
        moviesGenrers,
        favoriteMovies,

        favoriteMoviesLoading,
        moviesGenrersLoading,

        errorMoviesGenrersError,
        errorFavoriteMovies,
      }}
    />
  );
}

export default memo(FavoriteMoviesContainer);
