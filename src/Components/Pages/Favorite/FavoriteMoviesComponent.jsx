import React from "react";
import Container from "../../Elements/Containers/ContainerComponent";
import Layout from "../../Elements/Layout/LayoutComponent";
import MoviesCategoryList from "../Movies/Components/Movies Category List/MoviesCategoryListContainer";
import MoviesList from "../../Elements/MoviesList/MoviesList";

const styles = {
  title: {
    marginBottom: "1rem",
  },

  favoriteMoviesColumn: {
    marginLeft: "3rem",
  },
};

export default function FavoriteMoviesComponent({
  moviesGenrers,
  favoriteMovies,

  favoriteMoviesLoading,
  moviesGenrersLoading,

  errorMoviesGenrersError,
  errorFavoriteMovies,
}) {
  return (
    <Layout>
      <Container>
        <div className="columns columns-xl-reverse">
          <div className="column-3 column-xl-12">
            <MoviesCategoryList moviesGenrers={moviesGenrers} />
          </div>

          <div className="column-9 column-xl-12">
            <div style={styles.favoriteMoviesColumn}>
              <h1 style={styles.title}>Peliculas Favoritas</h1>
              <div className="columns">
                <MoviesList movies={favoriteMovies} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
