import React from "react";

import HomeMovie from "./HomeMovie";

const HomeMovieList = () => {
  return (
    <div className="home-movie-list">
      <div className="columns home-movies-column">
        <div className="column-12 ">
          <HomeMovie
            title="Bad Boys: For life"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              asperiores magnam deserunt officiis ducimus possimus."
            imageCoverpage="https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg"
            imageBackground="https://pbs.twimg.com/profile_images/1215478938492817410/wzSbHlKA_400x400.jpg"
          />
          <HomeMovie
            title="Fast and Furius 9"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
           asperiores magnam deserunt officiis ducimus possimus."
            imageCoverpage="https://www.movienewz.com/wp-content/uploads/2020/02/fast_and_furious_9_poster_1.jpg"
            imageBackground="https://www.thefastsaga.com/images/main_content_f9_keyart-m.jpg"
          />
        </div>

        <div className="column-12"></div>
      </div>
    </div>
  );
};

export default HomeMovieList;
