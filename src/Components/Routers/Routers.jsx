import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SessionPrivateRoute from "./SessionPrivateRoute";
import SessionRedirectRoute from "./SessionRedirectRoute";

// All Components Pages
import MovieContainer from "../Pages/Movie/MovieContainer";
import MoviesContainer from "../Pages/Movies/MoviesContainer";
import LoginContainer from "../Pages/System Entry/Login/LoginContainer";
import SignupContainer from "../Pages/System Entry/Sign Up/SignupContainer";
import FavoriteMovies from "../Pages/Favorite/FavoriteMoviesContainer"
import HomeContainer from "../Pages/Home/HomeContainer";

import NotFound from "../Pages/Not Found/NotFound";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <SessionPrivateRoute exact path="/movies/:id">
          <MovieContainer />
        </SessionPrivateRoute>

        <SessionPrivateRoute exact path="/movies">
          <MoviesContainer />
        </SessionPrivateRoute>

        <SessionRedirectRoute exact path="/login">
          <LoginContainer />
        </SessionRedirectRoute>

        <SessionRedirectRoute exact path="/signup">
          <SignupContainer />
        </SessionRedirectRoute>

        <SessionPrivateRoute exact path="/favorites">
          <FavoriteMovies />
        </SessionPrivateRoute>

        <Route exact path="/">
          <HomeContainer />
        </Route>

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routers;
