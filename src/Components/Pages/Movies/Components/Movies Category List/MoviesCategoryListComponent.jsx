import React, { memo } from "react";
import { connect } from "react-redux";
import { MOVIES_GENRERS } from "../../../../Config/apiMovies";
import MovieCategory from "../MovieCategory";
import LoaderAlert from "../../../../Elements/Loaders/LoaderAlert";
import ErrorAlert from "../../../../Elements/Errors/ErrorAlert";

function MoviesCategoryListComponent({
  movies: moviesArray,
  isLoading,
  error,
  getLinearGradient,
  getMoviesByGenrer,
}) {
  const movies = moviesArray.movies;

  return isLoading ? (
    <LoaderAlert text="Loading Category List..." />
  ) : movies?.length > 0 ? (
    <aside className="movies-aside">
      <h3 className="movies-aside-title title-normal">Top 5 movies</h3>
      <div className="columns">
        {MOVIES_GENRERS.map((genrer, index) => {
          const background = getLinearGradient(genrer);

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

export default memo(
  connect(mapStateToProps, null)(MoviesCategoryListComponent)
);
