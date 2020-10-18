import React from "react";

import Layout from "../../Elements/Layout/LayoutComponent";
import Container from "../../Elements/Containers/ContainerComponent";
import MoviesCategory from "./Components/MoviesCategory";
import MoviesList from "./Components/MoviesList";

import "./Styles/styles.css";

const MoviesComponent = ({ moviesGenrers, isLoading, error }) => {
  return (
    <Layout>
      <Container className="movies-container">
        <div className="columns columns-sm-reverse">
          <div className="column-3 column-xl-12">
            <MoviesCategory />
          </div>

          <div className="column-9 column-xl-12">
            <MoviesList moviesGenrers={moviesGenrers}/>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default MoviesComponent;
