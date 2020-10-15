import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

const MyMoviesContainer = () => {
  return <h3>My movies</h3>;
};

const Settings = () => {
  return <h3>My Settings</h3>;
};

export default function Routers() {
  const { pathname } = useLocation();
  console.log(`${pathname}/movies`);
  return (
    <Switch>
      <Route exact path={`${pathname}/movies`}>
        <MyMoviesContainer />
      </Route>

      <Route exact path={`${pathname}/settings`}>
        <Settings />
      </Route>
    </Switch>
  );
}
