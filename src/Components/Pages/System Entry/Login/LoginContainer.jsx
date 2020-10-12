import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

// import { useSelector } from 'react-redux';

// components
import LoginComponent from "./LoginComponent";
import { alertDanger, alertSuccess } from "../../../Helpers/notifications";

// Redux elements
import { connect } from "react-redux";
import { SetCurrentUserInfo } from "../../../Redux/Actions/UserActions";

// api links
import Resquests from "../../../Helpers/Resquests";

const LoginContainer = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [isLogged, setLogged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  let cancelResquest = null;

  /*
  
    This cancellation of the petition DOES NOT WORK
  */
  useEffect(() => {
    return () =>
      cancelResquest && cancelResquest.cancel("Finalizando peticion");
  }, []);

  const onChangeCredentials = ({ target }) => {
    setCredentials({
      ...credentials,
      [target.name]: target.value,
    });
  };

  const onSubmitForm = async (ev) => {
    ev.preventDefault();
    setLoading(true);

    /*
      Here I generate my token when the form is submitted
    */
    cancelResquest = axios.CancelToken.source();
    const res = await Resquests.login(
      {  
        email: credentials.email,
        password: credentials.password,

      }, // The third parameter is the "headers"
      {
        cancelToken: cancelResquest.token, // the token
      }
    );

    setLoading(false);

    if (res?.data?.ok === false) {
      alertDanger("Error in your credentials");
    } else if (res?.data?.ok === true) {
      alertSuccess("Successful login.");
      const userInfoLogged = await Resquests.getInfoUserLogged(
        res.data.data.token
      );

      props.SetCurrentUserInfo(userInfoLogged);
      console.log("en la linea 49", props.UserInformation);

      setLogged(true);
    }
  };

  console.log("en la linea 53", props.UserInformation);

  return isLogged ? (
    <Redirect to="/" />
  ) : (
    <LoginComponent
      {...{ onChangeCredentials, ...credentials, onSubmitForm, isLoading }}
    />
  );
};

const mapStateToProps = (state) => ({
  UserInformation: state.UserInformation,
});

const mapDispatchToProps = {
  SetCurrentUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
