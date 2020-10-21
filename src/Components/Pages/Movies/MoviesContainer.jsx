import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MoviesComponent from "./MoviesComponent";
import Requests from "../../Helpers/Resquests";
import { SetMovies } from "../../Redux/Actions/MoviesActions";

const MoviesContainer = (props) => {
  const [moviesGenrers, setMoviesGenrers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Requests.getAllGenrersMovies().then((movies) => {
      setLoading(false);
      setMoviesGenrers(movies);
      props.SetMovies(movies);

      console.log(movies);
    })
    .catch((error) => {
        setError(error);
    });

  }, [props]);

  return <MoviesComponent {...{ moviesGenrers, isLoading, error }} />;
};

const mapDispatchToProps = {
  SetMovies,
};

const mapStateToProps = (state) => ({
  movies: state.Movies,
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
