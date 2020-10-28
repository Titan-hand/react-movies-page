import React from "react";
import Layout from "../../Elements/Layout/LayoutComponent";
import Container from "../../Elements/Containers/ContainerComponent";
import Loader from "../../Elements/Loaders/Loader";
import BackgroundImage from "../../Elements/Background/BackgroundImage";
import "./Styles/styles.css";

const MovieComponent = (props) => {
  const { movieInfo, isLoading, error } = props;
  return isLoading ? (
    <Loader size="90px" isopen />
  ) : (
    <Layout>
      <Container className="container-movie">
        <BackgroundImage image={movieInfo.background_image} />
        <div className="columns columns-xl-reverse">
          <div className="column-7 column-xl-12">
            <h1 className="title-normal title-movie">{movieInfo.title_long}</h1>
            <p className="movie-description">{movieInfo.description_full}</p>
          </div>

          <div className="column-5 column-xl-12">
            <img
              src={movieInfo.large_cover_image}
              alt={`Coverimage ${movieInfo.title}`}
              className="image image-cover"
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default MovieComponent;
