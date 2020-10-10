import React from "react";

const HomeMovie = ({ imageCoverpage, imageBackground, title, description }) => {
  return (
    <div className="columns">
      <div className="column-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg"
          className="home-movie-coverpage"
          alt="Movie Coverpage"
        />
      </div>

      <div className="column-8 home-movie-desc-column">
        <div
          className="home-movie-desc"
          style={{
            backgroundImage:
              "url(https://pbs.twimg.com/profile_images/1215478938492817410/wzSbHlKA_400x400.jpg)",
          }}
        >
          <div>
            <h4 className="home-movie-title">Bad boys for life</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              asperiores magnam deserunt officiis ducimus possimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMovie;
