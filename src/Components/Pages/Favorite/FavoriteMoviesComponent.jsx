import React from "react";
import Container from "../../Elements/Containers/ContainerComponent";
import Layout from "../../Elements/Layout/LayoutComponent";
import MoviesCategoryList from "../Movies/Components/Movies Category List/MoviesCategoryListContainer";

export default function FavoriteMoviesComponent({ moviesGenrers }) {
  return (
    <Layout>
      <Container>
        <div className="columns columns-xl-reverse">
          <div className="column-3 column-xl-12">
            <MoviesCategoryList moviesGenrers={moviesGenrers} />
          </div>

          <div className="column-9 column-xl-12">
            <h1>Peliculas Favoritas</h1>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
