import React from "react";

export default function ({ rating }) {
  const stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<i className="fa fa-star" key={i}></i>);
  }

  return <span className="movie-rating">{stars}</span>;
}
