import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import MoviesComponent from "./MoviesComponent";
import Requests from "../../Helpers/Resquests";
import { SetMovies } from "../../Redux/Actions/MoviesActions";

const MoviesContainer = (props) => {
  const [moviesGenrers, setMoviesGenrers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movies, SetMovies } = props;
  const isMounted = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  });

  useEffect(() => {
    if (movies && movies?.movies?.length > 0) {
      console.log("%cValores memorizados", "font-size: 16px");
      setLoading(false);
      setMoviesGenrers(movies.movies);
      return;
    }
    
    setLoading(true);
    Requests.getAllGenrersMovies()
      .then((movies) => {
        if (isMounted.current) {
          setLoading(false);
          setMoviesGenrers(movies);
          SetMovies(movies);
        }
      })
      .catch(() => {
        if (isMounted.current) {
          setLoading(false);
          setError(true);
        }
      });
  }, [movies, SetMovies]);

  return <MoviesComponent {...{ moviesGenrers, isLoading, error }} />;
};

const mapDispatchToProps = {
  SetMovies,
};

const mapStateToProps = (state) => ({
  movies: state.Movies,
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
