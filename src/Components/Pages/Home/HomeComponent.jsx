import React from "react";
import NavbarContainer from "../../Elements/Navbar/NavbarContainer";
import Background from "../../Elements/Background/Background";

// styles
import "./styles.css";

const HomeComponent = () => {
  return (
    <main>
      <Background className="bg-home" />
      <NavbarContainer />
      <div className="home-container">
        <div className="columns">
          <div className="column-7">
            <div className="home-coverpage">
              <h1 className="home-title title">Black Widow</h1>
              <div className="columns">
                <div className="column-3">
                  <p className="home-detail">
                    <i className="fa fa-star"></i>
                    IMB 7.4
                  </p>
                </div>
                <div className="column-3">
                  <p className="home-detail">
                    <i className="fa fa-video"></i>
                    Movies in HD and 4k
                  </p>
                </div>
                <div className="column-3">
                  <p className="home-detail">
                    <i className="fa fa-calendar-alt"></i>
                    Movies in HD and 4k
                  </p>
                </div>
              </div>
              <p className="home-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                sit qui consequatur cumque culpa tenetur ex beatae perferendis
                ratione recusandae architecto repudiandae assumenda voluptatem
                pariatur eligendi enim facilis, ducimus quod!
              </p>
              
            </div>
          </div>
          <div className="column-5"></div>
        </div>
      </div>
    </main>
  );
};

export default HomeComponent;
