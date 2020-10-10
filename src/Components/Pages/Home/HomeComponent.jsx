import React from "react";
import NavbarContainer from "../../Elements/Navbar/NavbarContainer";
import Background from "../../Elements/Background/Background";
import HomeCoverpage from "./Elements/HomeCoverpage";
import HomeMovieList from "./Elements/HomeMovieList";

// styles
import "./Styles/styles.css";

const HomeComponent = () => {
  return (
    <main>
      <Background className="bg-home" />
      <NavbarContainer />
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
    </main>
  );
};

export default HomeComponent;
