import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import MoviesComponent from "./MoviesComponent";
import Requests from "../../Helpers/Resquests";
import { SetMovies } from "../../Redux/Actions/MoviesActions";
import store from "../../Redux/Store/Store";
import { MOVIES_GENRERS } from "../../Config/apiMovies";

const MoviesContainer = (props) => {
  const [moviesGenrers, setMoviesGenrers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movies: movieStore, SetMovies } = props;
  const moviesGenrersPromises = [];

  useEffect(() => {
    store.subscribe(() => {
      console.log(store.getState());
    });

    for (const genrer of MOVIES_GENRERS) {
      moviesGenrersPromises.push(Requests.getGenrerMovie(genrer));
    }

    axios
      .all(moviesGenrersPromises)
      .then((movies) => {
        setLoading(false);
        setMoviesGenrers(movies);
        SetMovies(movies);
        console.log(movies);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  return <MoviesComponent {...{ moviesGenrers, isLoading, error }} />;
};

const mapDispatchToProps = {
  SetMovies,
};

const mapStateToProps = (state) => ({
  movies: state.Movies,
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
