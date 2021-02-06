import React from "react";
import Layout from "../../Elements/Layout/LayoutComponent";
import Container from "../../Elements/Containers/ContainerComponent";
import Loader from "../../Elements/Loaders/Loader";
import BackgroundImage from "../../Elements/Background/BackgroundImage";
import MovieInfo from "./Components/MovieInfo";
import MovieCoverImage from "./Components/MovieCoverImage";
import ErrorAlert from "../../Elements/Errors/ErrorAlert";

import "./Styles/styles.css";

const MovieComponent = (props) => {
  const { movieInfo, isLoading, error } = props;

  if (isLoading) {
    return <Loader size="90px" isopen />;
  }

  if (error) {
    return (
      <ErrorAlert
        title="Movie download failed"
        description="Error occurred, it may be due to a connection problem with our servers or a technical failure."
      />
    );
  }

  return (
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
