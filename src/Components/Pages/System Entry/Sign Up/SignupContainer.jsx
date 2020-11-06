import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import SignupComponent from "./SignupComponent";
import { alertError, alertSuccess } from "../../../Helpers/notifications";
import Resquests from "../../../Helpers/Resquests";

let cancelRequest = null;

const SignupContainer = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isRegistrered, setRegistrered] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      cancelRequest && cancelRequest.cancel();
    };
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
    cancelRequest = axios.CancelToken.source();

    const res = await Resquests.signup({
      username: credentials.username,
      email: credentials.email,
      password: credentials.password,
      headers: {
        cancelToken: cancelRequest.token,
      },
    });

    if (res?.data?.ok === false) {
      alertError("Failed to create account.");
      setLoading(false);
    } else if (res?.data?.ok === true) {
      alertSuccess("Account created.");
      setRegistrered(true);
      setLoading(false);
    }
  };

  return isRegistrered && !isLoading ? (
    <Redirect to="/login" />
  ) : (
    <SignupComponent
      {...{ onChangeCredentials, ...credentials, onSubmitForm, isLoading }}
    />
  );
};

export default SignupContainer;
