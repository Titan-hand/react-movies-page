import React from "react";
import Movie from "./Movie";
import Banner from "../../../Elements/Banners/Banner";

const movie = {
  title: "Harry Potter y las Reliquias de la Muerte",
  date: "15-02-2015",
  rating: 5,
  id: 5,
};
export default function MoviesList() {
  return (
    <div className="movies-movies">
      <div className="movies-category">
        <Banner
          title="Género de acción"
          image="https://image.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg"
        />
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
        </div>
      </div>

      <div className="movies-category">
        <Banner
          title="Género de romance"
          image="https://image.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg"
          color1="000428"
          color2="004e92a8"
        />
        <div className="columns">
          <div className="column-6 column-sm-12">
            <Movie {...movie} />
          </div>
          <div className="column-6 column-sm-12">
            <Movie {...movie} />
          </div>
        </div>
      </div>

      <div className="movies-category">
        <Banner
          title="Género de ficción"
          image="https://image.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg"
          color1="FF5F6D"
          color2="004e92b3"
        />
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
        </div>
      </div>
    </div>
  );
}
