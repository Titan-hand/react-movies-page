import React from "react";
import PropTypes from "prop-types";

function MovieCategory({ background, genrer }) {
  return (
    <div className="column-12 column-xl-4 column-sm-6">
      <ul className="movies-category-movies">
        <li className="movies-category-title" style={{ background }}>
          <i className="fa fa-film" style={{ fontSize: "1.2rem" }}></i>
          <h4 style={{ textTransform: "capitalize" }}>{genrer}</h4>
        </li>
        <li>Nombre de película 1</li>
        <li>Nombre de película 2</li>
        <li>Nombre de película 3</li>
        <li>Nombre de película 4</li>
        <li>Nombre de película 5</li>
        <li>Nombre de película 6</li>
      </ul>
    </div>
  );
}

MovieCategory.propTypes = {
  background: PropTypes.string.isRequired,
  genrer: PropTypes.string.isRequired,
};

export default MovieCategory;
