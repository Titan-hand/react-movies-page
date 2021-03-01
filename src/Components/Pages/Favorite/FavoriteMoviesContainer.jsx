import React, { memo, useEffect, useState } from "react";
import FavoriteMoviesComponent from "./FavoriteMoviesComponent";
import useMovies from "../../Hooks/useMovies";
import { useSelector } from "react-redux";
import Requests from "../../Helpers/Resquests";

function FavoriteMoviesContainer() {
  const [error, setError] = useState(false);
  const idUser = useSelector(
    (state) => state?.UserInformation?.currentUserInfo?._id
  );

  const [favoriteMoviesIds, setFavoriteMoviesIds] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const { moviesGenrers, isLoading, error: errorMovies } = useMovies();

  useEffect(() => {
    async function getFavoriteMovies() {
      try {
        const movies = await Requests.getFavoriteMoviesUser(idUser);
        setFavoriteMoviesIds(movies);
      } catch {
        setError(true);
      }
    }

    getFavoriteMovies();
  }, [idUser]);

  useEffect(() => {
    async function getFavoriteMovies() {
      const favoriteMoviesArray = await Requests.getFavoriteMoviesByIds(
        favoriteMoviesIds
      );

      setFavoriteMovies(favoriteMoviesArray);
      console.log(favoriteMoviesArray);
    }

    getFavoriteMovies();
  }, [favoriteMoviesIds]);

  return <FavoriteMoviesComponent {...{ moviesGenrers, favoriteMovies }} />;
}

export default memo(FavoriteMoviesContainer);
