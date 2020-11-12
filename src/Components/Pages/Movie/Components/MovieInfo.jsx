import React from "react";
import PropTypes from "prop-types";

function MovieInfo({
  title_long,
  description_full,
  year,
  genres,
  download_count,
  language,
  date_uploaded,
}) {
  return (
    <div className="column-6 column-lg-12">
      <div className="movie-page-container">
        <h1 className="title-normal title-movie">{title_long}</h1>
        <p>{description_full}</p>
        <p>
          <span>
            <i className="fa fa-hourglass" />
          </span>
          Year:
          {" " + year}
        </p>
        <p>
          <span>
            <i className="fa fa-film" />
          </span>
          Genres:
          {" " + genres}
        </p>
        <p>
          <span>
            <i className="fa fa-cloud-download-alt" />
          </span>
          Download counts:
          {" " + download_count}
        </p>
        <p>
          <span>
            <i className="fa fa-language" />
          </span>
          language:
          {" " + language}
        </p>
        <p>
          <span>
            <i className="fa fa-clock" />
          </span>
          Date uploaded:
          {" " + new Date(date_uploaded).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  title_long: PropTypes.string.isRequired,
  description_full: PropTypes.string.isRequired,
};

export default MovieInfo;
