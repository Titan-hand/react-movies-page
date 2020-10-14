import React, {useState} from "react";
import { Route, Redirect } from "react-router-dom";
import { existToken, isValidToken } from "../Helpers/tokenFunctions";
import { alertWarn } from "../Helpers/notifications";

export default function PrivateRoute(props) {
  const  [isLoading, setLoading] = useState(true)

  const _isValidToken = async () => {
    const isValid = await isValidToken(sessionStorage.getItem("token"));
    setLoading(false);

    console.log("Is a valid token?: ", isValid);
    return existToken() && isValid;
  };
  const validToken = await _isValidToken();

  if (isLoading) {
    return <h2>Checking token...</h2>
  }
  if (validToken) {
    return <Route {...props} />;
  }

  alertWarn("To enter that route you must have an account.");
  return <Redirect to="/login" />;
}
