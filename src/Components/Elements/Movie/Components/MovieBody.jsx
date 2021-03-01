import React, { useState, useEffect } from "react";
import MovieStars from "./MovieStars";
import { Link } from "react-router-dom";

export default function MovieBody({
  title_long,
  year,
  language,
  genres,
  rating,
  id,
  toggleFavorite,
  favoriteMovies,
}) {
  const [isFavorite, setFavorite] = useState(false);
  useEffect(() => {
    if (favoriteMovies) setFavorite(favoriteMovies.includes(id));
  }, [favoriteMovies, id]);

  return (
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

      <MovieStars rating={rating} />
      <i
        className="fa fa-heart movie-heart"
        style={{
          color: isFavorite ? "#e40017" : "#fff",
        }}
        onClick={() => toggleFavorite?.(id)}
      />

      <Link to={`/movies/${id}`} className="button-movie">
        <button className="button-block button-small button button-success button-outline button-flat">
          View more
        </button>
      </Link>
    </div>
  );
}
