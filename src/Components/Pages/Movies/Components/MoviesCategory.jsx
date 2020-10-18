import React, { memo } from "react";
import { MOVIES_GENRERS } from "../../../Config/apiMovies";

function MoviesCategory() {
  return (
    <aside className="movies-aside">
      <h3 className="movies-aside-title title-normal">Best Movies</h3>
      <div className="columns">
        {MOVIES_GENRERS.map((genrer, index) => (
          <div className="column-12 column-xl-4" key={index}>
            <ul className="movies-category-movies">
              <li className="movies-category-title">
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
        ))}
      </div>
    </aside>
  );
}

export default memo(MoviesCategory);
