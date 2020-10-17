import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ title = "", date = "", rating = 0, id }) {
  const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<i className="fa fa-star" key={i}></i>);
  }

  return (
    <div className="movie">
      <div className="movie-image">
        <a
          href={`https://picsum.photos/id/${id}/200/300`}
          className="lazy-load replace"
        >
          <img
            src={`https://picsum.photos/id/${id}/5/5`}
            alt={`${title}'s Coverpage`}
            title={`${title}'s Coverpage`}
            className="image preview"
          />
        </a>
      </div>
      <div className="movie-body">
        <h5 className="movie-title">
          {title.length >= 62 ? title.substring(0, 62) + "..." : title}
        </h5>
        <time dateTime="15-02-2015" className="movie-date">
          {date}
        </time>
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
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

// para que no vuelva a hacer renderizados inncesarios
export default memo(Movie);
