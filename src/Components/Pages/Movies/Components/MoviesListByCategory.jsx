import React from "react";
import Banner from "../../../Elements/Banners/Banner";
import getColorsBanner from "../../../Helpers/getColors";
import MoviesList from "../../../Elements/MoviesList/MoviesList";

export default  function MoviesListByCategory({ moviesGenrers, user }) {
  return Array.isArray(moviesGenrers) && moviesGenrers.length > 0 ? (
    <div className="movies-movies">
      {/*Este map es para crear los banners de cada categoria */}
      {moviesGenrers.map((movieGenrer, index) => {
        const { genrer } = movieGenrer;
        return (
          <div className="movies-category" key={index}>
            <Banner
              title={genrer}
              slug={`/${genrer}`}
              image="https://image.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg"
              {...getColorsBanner(genrer)}
            />

            {/*Y este otro map es para iterar en el arreglo de peliculas */}
            <div className="columns">
              <MoviesList movies={movieGenrer?.movies} />
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
}