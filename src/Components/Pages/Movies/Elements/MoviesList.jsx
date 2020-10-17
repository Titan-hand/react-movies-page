import React from "react";
import Movie from "./Movie";

const movie = {
  title: "Harry Potter y las Reliquias de la Muerte",
  date: "15-02-2015",
  rating: 5,
  id: 5,
};
export default function MoviesList() {
  return (
    <div className="movies-movies">
      <div className="columns">
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
        <div className="column-6 column-sm-12">
          <Movie {...movie} />
        </div>
      </div>
    </div>
  );
}
