import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SessionPrivateRoute from "./SessionPrivateRoute";

// All Components Pages
import DashboardContainer from "../Pages/Dashboard/DashboardContainer";
import LoginContainer from "../Pages/System Entry/Login/LoginContainer";
import SignupContainer from "../Pages/System Entry/Sign Up/SignupContainer";
import HomeContainer from "../Pages/Home/HomeContainer";

import NotFound from "../Pages/Not Found/NotFound";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <SessionPrivateRoute
          exact
          path="/dashboard"
          component={DashboardContainer}
        />
        <Route exact path="/login">
          <LoginContainer />
        </Route>

        <Route exact path="/signup">
          <SignupContainer />
        </Route>

        <Route exact path="/">
          <HomeContainer />
        </Route>
        
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routers;
