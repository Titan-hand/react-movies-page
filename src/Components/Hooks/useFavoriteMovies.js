import { useEffect, useState, useRef, useCallback } from "react";
import { alertError } from "../Helpers/notifications";
import Requests from "../Helpers/Resquests";
import useGetUserId from "../Hooks/useGetUserId";

export default function useFavoriteMovies() {
  const userId = useGetUserId();
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const isMounted = useRef(true);

  const toggleFavorite = async (id) => {
    try {
      await Requests.setFavoriteMovie(userId, id);
      getFavoriteMovies();
    } catch (error) {
      alertError("Error in save your movie preference");
    }
  };

  const getFavoriteMovies = useCallback(async () => {
    try {
      const _favoriteMoviesRes = await Requests.getFavoriteMoviesUser(userId);
      isMounted.current && setFavoriteMovies(_favoriteMoviesRes);
    } catch (error) {
      alertError("Error in download all your favorite movies");
    }
  }, [userId]);

  useEffect(() => {
    getFavoriteMovies();
    return () => (isMounted.current = false);
  }, [getFavoriteMovies]);

  return {
    favoriteMovies,
    toggleFavorite,
  };
}
