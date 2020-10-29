import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieCategory({ background, movies, genrer }) {
  return (
    <div className="column-12 column-xl-4 column-sm-6">
      <ul className="movies-category-movies">
        <li className="movies-category-title" style={{ background }}>
          <i className="fa fa-film" style={{ fontSize: "1.2rem" }}></i>
          <h4 style={{ textTransform: "capitalize" }}>{genrer}</h4>
        </li>
        {movies.map(({ title, id, small_cover_image }) => (
          <li key={id}>
            <img src={small_cover_image} alt="" loading="lazy" />
            <Link to={`/movies/${id}`}>
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieCategory.propTypes = {
  background: PropTypes.string.isRequired,
  genrer: PropTypes.string.isRequired,
};

export default MovieCategory;
