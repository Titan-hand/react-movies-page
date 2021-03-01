import React, { lazy, Suspense, memo } from "react";
import LoaderMovie from "../Loaders/LoaderMovie";
import ErrorBoundary from "../Errors/ErrorBoundary";
import useFavoriteMovies from "../../Hooks/useFavoriteMovies";

const MovieLazy = lazy(() => import("../Movie/Movie"));

function MoviesList({ movies }) {
  const { favoriteMovies, toggleFavorite } = useFavoriteMovies();

  return movies?.map((movie) => {
    return (
      <div className="column-6 column-sm-12" key={movie.id}>
        <Suspense fallback={<LoaderMovie />}>
          <ErrorBoundary
            title="An error occurred while showing the movie"
            description=""
            className="error-sm"
          >
            <MovieLazy {...movie} {...{ toggleFavorite, favoriteMovies }} />
          </ErrorBoundary>
        </Suspense>
      </div>
    );
  });
}

export default memo(MoviesList);
