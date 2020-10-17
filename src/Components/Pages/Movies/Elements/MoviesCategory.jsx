import React, { memo } from "react";

function MoviesCategory() {
  return (
    <aside className="movies-aside">
      <h3 className="movies-aside-title title-normal">Géneros de películas</h3>
      <div className="columns">
        <div className="column-12 column-xl-4">
          <ul className="movies-category-movies">
            <li className="movies-category-title">
              <i className="fa fa-hat-wizard"></i>
              <h4>Ficción</h4>
            </li>
            <li>Nombre de película 1</li>
            <li>Nombre de película 2</li>
            <li>Nombre de película 3</li>
            <li>Nombre de película 4</li>
            <li>Nombre de película 5</li>
            <li>Nombre de película 6</li>
          </ul>
        </div>

        <div className="column-12 column-xl-4">
          <ul className="movies-category-movies">
            <li className="movies-category-title">
              <i className="fa fa-car"></i>
              <h4>Acción</h4>
            </li>
            <li>Nombre de película 1</li>
            <li>Nombre de película 2</li>
            <li>Nombre de película 3</li>
            <li>Nombre de película 4</li>
          </ul>
        </div>

        <div className="column-12 column-xl-4">
          <ul className="movies-category-movies">
            <li className="movies-category-title">
              <i className="fa fa-heart"></i>
              <h4>Romance</h4>
            </li>
            <li>Nombre de película 1</li>
            <li>Nombre de película 2</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default memo(MoviesCategory);
