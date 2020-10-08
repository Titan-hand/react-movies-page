import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// All Components Pages
import LoginContainer from "../Pages/System Entry/Login/LoginContainer";
import SignupContainer from "../Pages/System Entry/Sign Up/SignupContainer";
import HomeContainer from "../Pages/Home/HomeContainer";

import NotFound from "../Pages/Not Found/NotFound";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
        <Route exact path="/" component={HomeContainer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routers;
