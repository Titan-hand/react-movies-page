import React from "react";
import PropTypes from "prop-types";

function MovieInfo({ title_long, description_full }) {
  return (
    <div className="column-7 column-xl-12">
      <h1 className="title-normal title-movie">{title_long}</h1>
      <p className="movie-description">{description_full}</p>
    </div>
  );
}

MovieInfo.propTypes = {
  title_long: PropTypes.string.isRequired,
  description_full: PropTypes.string.isRequired,
};

export default MovieInfo;
