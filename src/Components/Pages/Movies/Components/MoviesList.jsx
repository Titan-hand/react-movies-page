import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import LoaderMovie from "../../../Elements/Loaders/LoaderMovie";
import Banner from "../../../Elements/Banners/Banner";
import ErrorBoundary from "../../../Elements/Errors/ErrorBoundary";
import getColorsBanner from "../../../Helpers/getColors";
import { connect } from "react-redux";
import Requests from "../../../Helpers/Resquests";
import { alertError } from "../../../Helpers/notifications";

const MovieLazy = lazy(() => import("../../../Elements/Movie/Movie"));

function MoviesList({ moviesGenrers, user }) {
  const userId = user.currentUserInfo._id;
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const isMounted = useRef(true);

  const toggleFavorite = async (id) => {
    try {
      await Requests.setFavoriteMovie(userId, id);
      getFavoriteMovies();
    } catch (error) {
      alertError("Error in save your movie preference");
    }
  };

  const getFavoriteMovies = useCallback(async () => {
    try {
      const _favoriteMoviesRes = await Requests.getFavoriteMoviesUser(userId);
      isMounted.current && setFavoriteMovies(_favoriteMoviesRes);
    } catch (error) {
      alertError("Error in download all your favorite movies");
    }
  }, [userId]);

  useEffect(() => {
    getFavoriteMovies();
    return () => (isMounted.current = false);
  }, [getFavoriteMovies]);

  return Array.isArray(moviesGenrers) && moviesGenrers.length > 0 ? (
    <div className="movies-movies">
      {/*Este map es para crear los banners de cada categoria */}
      {moviesGenrers.map((movieGenrer, index) => {
        const { genrer } = movieGenrer;
        return (
          <div className="movies-category" key={index}>
            <Banner
              title={genrer}
              slug={`/${genrer}`}
              image="https://image.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg"
              {...getColorsBanner(genrer)}
            />

            {/*Y este otro map es para iterar en el arreglo de peliculas */}

            <div className="columns">
              {movieGenrer?.movies?.map((movie) => {
                return (
                  <div className="column-6 column-sm-12" key={movie.id}>
                    <Suspense fallback={<LoaderMovie />}>
                      <ErrorBoundary
                        title="An error occurred while showing the movie"
                        description=""
                        className="error-sm"
                      >
                        <MovieLazy
                          {...movie}
                          {...{ toggleFavorite, favoriteMovies }}
                        />
                      </ErrorBoundary>
                    </Suspense>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
}

const mapStateToPros = (state) => ({
  user: state.UserInformation,
});

export default connect(mapStateToPros)(MoviesList);
