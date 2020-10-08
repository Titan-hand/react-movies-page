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
          <div className="column-7 column-xl-12">
            <div className="home-coverpage">
              <h1 className="home-title title">Black Widow</h1>

              <ul className="home-details">
                <li className="home-detail">
                  <p>
                    <i className="fa fa-star"></i>
                    IMB 7.4
                  </p>
                </li>

                <li className="home-detail">
                  <p>
                    <i className="fa fa-video"></i>
                    Movies in 4k and HD
                  </p>
                </li>

                <li className="home-detail">
                  <p>
                    <i className="fa fa-calendar-alt"></i>
                    Date and time perfect
                  </p>
                </li>
              </ul>

              <p className="home-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
                sit qui consequatur cumque culpa tenetur ex beatae perferendis
                ratione recusandae architecto repudiandae assumenda voluptatem
                pariatur eligendi enim facilis, ducimus quod!
              </p>

              <div className="home-buttons">
                <button
                  className="button button-warning button-rounded"
                  style={{
                    marginRight: "30px",
                  }}
                >
                  <i className="fa fa-play"></i>
                  Watch more
                </button>
                <button className="button button-rounded">
                  <i className="fa fa-eye"></i>
                  View List Movies
                </button>
              </div>
            </div>
          </div>
          <div className="column-5 column-xl-12"></div>
        </div>
      </div>
    </main>
  );
};

export default HomeComponent;
