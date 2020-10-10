import React from "react";
import PropTypes from "prop-types";

const HomeMovie = ({ imageCoverpage, imageBackground, title, description }) => {
  return (
    <div className="columns">
      <div className="column-4">
        <img
          src={imageCoverpage}
          className="home-movie-coverpage"
          alt="Movie Coverpage"
        />
      </div>

      <div className="column-8 home-movie-desc-column">
        <div
          className="home-movie-desc"
          style={{
            backgroundImage: `url(${imageBackground})`,
          }}
        >
          <div>
            <h4 className="home-movie-title">{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

HomeMovie.propTypes = {
  imageCoverpage: PropTypes.string.isRequired,
  imageBackground: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default HomeMovie;
