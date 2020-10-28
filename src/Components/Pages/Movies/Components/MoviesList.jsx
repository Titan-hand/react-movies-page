import React, { lazy, Suspense } from "react";
import LoaderMovie from "../../../Elements/Loaders/LoaderMovie";
import Banner from "../../../Elements/Banners/Banner";
import ErrorBoundary from "../../../Elements/Errors/ErrorBoundary";
import bannersColors from "../../../Config/bannerColorsMoviesCategory.js";

const MovieLazy = lazy(() => import("./Movie"));

export default function MoviesList({ moviesGenrers }) {
  return Array.isArray(moviesGenrers) && moviesGenrers.length > 0 ? (
    <div className="movies-movies">
      {/*Este map es para crear los banners de cada categoria */}
      {moviesGenrers.map((movieGenrer, index) => {
        const { color1, color2 } = bannersColors[movieGenrer.genrer];

        return (
          <div className="movies-category" key={index}>
            <Banner
              title={movieGenrer.genrer}
              image="https://image.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg"
              {...{ color1, color2 }}
            />

            {/*Y este otro map es para iterar en el arreglo de peliculas */}

            <div className="columns">
              {movieGenrer?.movies?.map((movie) => {
                return (
                  <div className="column-6 column-sm-12" key={movie.id}>
                    <Suspense fallback={<LoaderMovie />}>
                      <ErrorBoundary
                        title="An error occurred while showing the movie"
                        description=""
                        className="error-sm"
                      >
                        <MovieLazy {...movie} />
                      </ErrorBoundary>
                    </Suspense>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
}
