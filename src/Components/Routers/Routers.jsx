import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

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
        <PrivateRoute exact path="/dashboard" component={DashboardContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/" component={HomeContainer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routers;
