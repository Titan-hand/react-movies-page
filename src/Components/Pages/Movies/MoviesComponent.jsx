import React from "react";
import Layout from "../../Elements/Layout/LayoutComponent";
import Container from "../../Elements/Containers/ContainerComponent";
import MoviesCategoryList from "./Components/Movies Category List/MoviesCategoryListContainer";
import MoviesListByCategory from "./Components/MoviesListByCategory";
import Loader from "../../Elements/Loaders/Loader";
import ErrorAlert from "../../Elements/Errors/ErrorAlert";
import ErrorBoundary from "../../Elements/Errors/ErrorBoundary";
import "./Styles/styles.css";

const MoviesComponent = ({ moviesGenrers, isLoading, error }) => {
  return (
    <Layout>
      <Container>
        <div className="columns columns-xl-reverse">
          <div className="column-3 column-xl-12">
            <MoviesCategoryList {...{ isLoading, error }} />
          </div>

          <div className="column-9 column-xl-12">
            {error ? (
              <ErrorAlert
                title="Movie download failed"
                description="Error occurred, it may be due to a connection problem with our servers or a technical failure."
              />
            ) : isLoading ? (
              <Loader isopen size="80px" className="movies-category-loader" />
            ) : (
              <ErrorBoundary
                title="An error occurred while displaying the movies"
                description="This error occurred due to a programming error on the page, please send us an email."
                className="error-sm"
              >
                <MoviesListByCategory moviesGenrers={moviesGenrers} />
              </ErrorBoundary>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default MoviesComponent;
