import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({
  title_long = "",
  year = "",
  rating = 0,
  medium_cover_image,
  small_cover_image,
  language,
  genres,
  id,
}) {
  const stars = [];

  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<i className="fa fa-star" key={i}></i>);
  }

  return (
    <div className="movie">
      <div className="movie-image">
        <a href={medium_cover_image} className="lazy-load replace">
          <img
            src={small_cover_image}
            alt={`${title_long}'s Coverpage`}
            title={`${title_long}'s Coverpage`}
            className="image preview"
          />
        </a>
      </div>
      <div className="movie-body">
        <h5 className="movie-title">
          {title_long.length >= 62
            ? title_long.substring(0, 62) + "..."
            : title_long}
        </h5>
        <time dateTime="15-02-2015" className="movie-info">
          Year: {year}
        </time>
        <p className="movie-info">Language: {language}</p>
        <p className="movie-info">Genres : {genres.join(", ")}</p>
        <span className="movie-rating">{stars}</span>

        <Link to={`/movies/${id}`} className="button-movie">
          <button className="button-block button-small button button-success button-outline button-flat">
            View more
          </button>
        </Link>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title_long: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  small_cover_image: PropTypes.string,
  medium_cover_image: PropTypes.string,
  id: PropTypes.number.isRequired,
};

// para que no vuelva a hacer renderizados inncesarios
export default memo(Movie);
