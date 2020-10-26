import React, { memo } from "react";
import { MOVIES_GENRERS } from "../../../Config/apiMovies";
import bannersColors from "../../../Config/bannerColorsMoviesCategory.js";
import RGBA from "../../../Helpers/rgba.js";
import MovieCategory from "./MovieCategory";
import { connect } from "react-redux";
import LoaderAlert from "../../../Elements/Loaders/LoaderAlert";
import ErrorAlert from "../../../Elements/Errors/ErrorAlert";

// get the movie's array objects
const getMoviesByGenrer = (moviesList, genrer) => {

  if (moviesList && moviesList?.length > 0) {
    const filterBy = moviesList.filter((movie) =>
      movie.genrer === genrer ? movie.movies : []
    );

    // transform to array movies and flattern array
    const movies =  filterBy.map(movieCategory => movieCategory.movies);
    const flatMovies = movies.flat();

    return (flatMovies.length >= 5) ? flatMovies.slice(0, 5) : flatMovies;
  }  

  return [];
};

function MoviesCategoryList(props) {
  const movies = props.movies.movies;
  const { isLoading, error } = props;

  return isLoading ? (
    <LoaderAlert text="Loading Category List..." />
  ) : movies?.length > 0 ? (
    <aside className="movies-aside">
      <h3 className="movies-aside-title title-normal">Top 5 movies</h3>
      <div className="columns">
        {MOVIES_GENRERS.map((genrer, index) => {
          const { color1, color2 } = bannersColors[genrer];
          const background = `linear-gradient(to right, ${RGBA(
            color1,
            70
          )}, ${RGBA(color2, 50)})`;

          return (
            <MovieCategory
              {...{ background, genrer }}
              key={`${genrer}-${index}`}
              movies={getMoviesByGenrer(movies, genrer)}
            />
          );
        })}
      </div>
    </aside>
  ) : error ? (
    <ErrorAlert
      className="error-sm"
      title="Download error category list."
      description="An error while downloading the category list movies"
    />
  ) : null;
}

const mapStateToProps = (state) => ({
  movies: state.Movies,
});

export default memo(connect(mapStateToProps, null)(MoviesCategoryList));
