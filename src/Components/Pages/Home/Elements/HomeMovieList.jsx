import React from "react";

import HomeMovie from "./HomeMovie";

const HomeMovieList = () => {
  return (
    <div className="home-movie-list">
      <div className="columns home-movies-column">
        <div className="column-12 ">
          <HomeMovie title="Bad Boys: For life" description=""/>
          <HomeMovie />
        </div>

        <div className="column-12"></div>
      </div>
    </div>
  );
};

export default HomeMovieList;
