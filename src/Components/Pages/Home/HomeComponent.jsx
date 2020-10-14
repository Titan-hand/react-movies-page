import React from "react";
import Background from "../../Elements/Background/Background";
import HomeCoverpage from "./Elements/HomeCoverpage";
import HomeMovieList from "./Elements/HomeMovieList";
import LayoutComponent from "../../Elements/Layout/LayoutComponent";
// styles
import "./Styles/styles.css";

const HomeComponent = () => {
  return (
    <LayoutComponent>
      <Background className="bg-home" />
      <div className="home-container">
        <div className="columns">
          <div className="column-7 column-xl-12">
            <HomeCoverpage />
          </div>
          <div className="column-5 column-xl-12">
            <HomeMovieList />
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
};

export default HomeComponent;
