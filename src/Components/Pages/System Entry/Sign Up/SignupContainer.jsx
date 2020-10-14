import React, { useState } from "react";
import { Redirect } from "react-router-dom";

// components
import SignupComponent from "./SignupComponent";
import { alertError, alertSuccess } from "../../../Helpers/notifications";

// api links
import Resquests from "../../../Helpers/Resquests";

const SignupContainer = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isRegistrered, setRegistrered] = useState(false);

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
    const res = await Resquests.signup({
      username: credentials.username,
      email: credentials.email,
      password: credentials.password,
    });
 
    if (res?.data?.ok === false) {
      alertError("Failed to create account.");
      setLoading(false);
    } else if (res?.data?.ok === true) {
      alertSuccess("Account created.");
      setRegistrered(true);
    }
    console.log(res);
  };

  return isRegistrered ? (
    <Redirect to="/login" />
  ) : (
    <SignupComponent
      {...{ onChangeCredentials, ...credentials, onSubmitForm, isLoading }}
    />
  );
};

export default SignupContainer;
