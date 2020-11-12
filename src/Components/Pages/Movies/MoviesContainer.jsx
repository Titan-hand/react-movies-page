import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MoviesComponent from "./MoviesComponent";
import Requests from "../../Helpers/Resquests";
import { SetMovies } from "../../Redux/Actions/MoviesActions";

const MoviesContainer = (props) => {
  const [moviesGenrers, setMoviesGenrers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movies, SetMovies } = props;

  useEffect(() => {
    if (movies && movies?.movies?.length > 0) {
      console.log("%cValores memorizados", "font-size: 18px");
      setLoading(false);
      setMoviesGenrers(movies.movies);
    } else {
      setLoading(true);
      Requests.getAllGenrersMovies()
        .then((movies) => {
          setLoading(false);

          setMoviesGenrers(movies);
          SetMovies(movies);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    }
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
