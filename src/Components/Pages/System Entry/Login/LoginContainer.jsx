import React, { useState } from "react";
import { Redirect } from "react-router-dom";

// components
import LoginComponent from "./LoginComponent";
import { alertDanger, alertSuccess } from "../../../Helpers/notifications";

// Redux elements
import { connect } from "react-redux";
import { SetCurrentUserInfo } from "../../../Redux/Actions/UserActions";

// api links
import Resquests from "../../../Helpers/Resquests";

const LoginContainer = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [isLogged, setLogged] = useState(false);

  const [isLoading, setLoading] = useState(false);

  const onChangeCredentials = ({ target }) => {
    setCredentials({
      ...credentials,
      [target.name]: target.value,
    });
  };

  const onSubmitForm = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    const res = await Resquests.login(credentials.email, credentials.password);
    if (res?.data?.ok === false) {
      alertDanger("Error in your credentials");
      setLoading(false);
    } else if (res?.data?.ok === true) {
      alertSuccess("Successful login.");
      setLogged(true);
    }

    console.log(res);
  };

  return isLogged ? (
    <Redirect to="/home" />
  ) : (
    <LoginComponent
      {...{ onChangeCredentials, ...credentials, onSubmitForm, isLoading }}
    />
  );
};

const mapStateToProps = (store) => ({
  UserInformation: store.UserInformation,
});

const mapDispatchToProps = {
  SetCurrentUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
