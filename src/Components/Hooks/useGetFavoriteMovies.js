import Requests from "../Helpers/Resquests";
import useGetUserId from "./useGetUserId";
import { useEffect, useState, useRef } from "react";

export default function useGetFavoriteMovies() {
  const idUser = useGetUserId();
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  useEffect(() => {
    async function getFavoriteMovies() {
      try {
        setLoading(true);
        const movies = await Requests.getAllFavoriteMovies(idUser);
        isMounted.current && setFavoriteMovies(movies);
        console.log(movies);
      } catch {
        isMounted.current && setError(true);
      }
      isMounted.current && setLoading(false);
    }

    getFavoriteMovies();
  }, [idUser]);

  return { favoriteMovies, error, isLoading };
}
