import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import SignupComponent from "./SignupComponent";
import { alertError, alertSuccess } from "../../../Helpers/notifications";
import Resquests from "../../../Helpers/Resquests";
import { ABORTED_REQUEST } from "../../../Config/networkErrors";

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
      cancelRequest && cancelRequest.cancel(ABORTED_REQUEST);
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

    try {
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
    } catch (error) {
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
