import React, { lazy, Suspense } from "react";
import LoaderMovie from "../../../Elements/Loaders/LoaderMovie";
import Banner from "../../../Elements/Banners/Banner";

const MovieLazy = lazy(() => import("./Movie"));

export default function MoviesList({ moviesGenrers }) {
  return (
    <div className="movies-movies">
      {/*Este map es para crear los banners de cada categoria */}
      {moviesGenrers.map((movieGenrer, index) => {
        return (
          <div className="movies-category" key={index}>
            <Banner
              title={movieGenrer.genrer}
              image="https://image.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg"
            />

            {/*Y este otro map es para iterar en el arreglo de peliculas */}
            <div className="columns">
              {movieGenrer.movies.map((movie) => {
                return (
                  <div className="column-6 column-sm-12" key={movie.id}>
                    <Suspense fallback={<LoaderMovie />}>
                      <MovieLazy {...movie} />
                    </Suspense>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
