import React, { memo } from "react";
import PropTypes from "prop-types";
import MovieImage from "./Components/MovieImage";
import MovieBody from "./Components/MovieBody";

function Movie({
  title_long = "",
  year = "",
  rating = 0,
  medium_cover_image,
  small_cover_image,
  language,
  genres,
  id,
  toggleFavorite,
  favoriteMovies,
}) {
  return (
    <div className="movie" data-aos="fade-up">
      <MovieImage {...{ medium_cover_image, small_cover_image, title_long }} />
      <MovieBody
        {...{
          title_long,
          year,
          language,
          genres,
          rating,
          id,
          toggleFavorite,
          favoriteMovies,
        }}
      />
    </div>
  );
}

Movie.propTypes = {
  title_long: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  rating: PropTypes.number.isRequired,
  small_cover_image: PropTypes.string,
  medium_cover_image: PropTypes.string,
  id: PropTypes.number.isRequired,
};

// para que no vuelva a hacer renderizados inncesarios
export default memo(Movie);
