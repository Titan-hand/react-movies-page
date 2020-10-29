import React from "react";

export default function({
  medium_cover_image,
  small_cover_image,
  title_long,
}) {
  return (
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
  );
}
