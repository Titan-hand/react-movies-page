import React from "react";
import PropTypes from "prop-types";

function MovieCoverImage({ large_cover_image, title }) {
  return (
    <div className="column-5 column-xl-12">
      <img
        src={large_cover_image}
        alt={`Movie ${title}'s coverimage`}
        className="image image-cover"
      />
    </div>
  );
}

MovieCoverImage.propTypes = {
  large_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieCoverImage;
