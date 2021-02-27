import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetMovies } from "../Redux/Actions/MoviesActions";
import Requests from "../Helpers/Resquests";

export default function useMovies() {
  const [moviesGenrers, setMoviesGenrers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const moviesRedux = useSelector((state) => state.Movies);
  const dispatch = useDispatch();
  const isMounted = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);

  useEffect(() => {
    if (moviesRedux && moviesRedux?.movies?.length > 0) {
      setLoading(false);
      setMoviesGenrers(moviesRedux.movies);
      return;
    }

    Requests.getAllGenrersMovies()
      .then((movies) => {
        if (isMounted.current) {
          setLoading(false);
          setMoviesGenrers(movies);
          setMovies(movies);
          dispatch(SetMovies(movies));
        }
      })
      .catch(() => {
        if (isMounted.current) {
          setLoading(false);
          setError(true);
        }
      });
  }, [moviesRedux, dispatch]);

  return {
    moviesGenrers,
    movies,
    isLoading,
    error,
  };
}
