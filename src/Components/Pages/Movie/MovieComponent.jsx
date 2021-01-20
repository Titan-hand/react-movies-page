import React from "react";
import Layout from "../../Elements/Layout/LayoutComponent";
import Container from "../../Elements/Containers/ContainerComponent";
import Loader from "../../Elements/Loaders/Loader";
import BackgroundImage from "../../Elements/Background/BackgroundImage";
import MovieInfo from "./Components/MovieInfo";
import MovieCoverImage from "./Components/MovieCoverImage";

import "./Styles/styles.css";

const MovieComponent = (props) => {
  const { movieInfo, isLoading } = props;
  return isLoading ? (
    <Loader size="90px" isopen />
  ) : (
    <Layout>
      <Container className="container-movie">
        <BackgroundImage image={movieInfo.background_image} />
        <div className="columns">
          <MovieInfo {...movieInfo} />
          <MovieCoverImage {...movieInfo} />
        </div>
      </Container>
    </Layout>
  );
};

export default MovieComponent;
