import React from "react";
import { Route, Redirect } from "react-router-dom";
import { existToken } from "../Helpers/tokenFunctions";
import {alertDanger} from "../Helpers/notifications";

export default function PrivateRoute(props) {
  const isValidToken = () => {
    return existToken();
  };

  if (isValidToken()) {
    return <Route {...props} />;
  }
  alertDanger();
  return <Redirect to="/login" />;
}
