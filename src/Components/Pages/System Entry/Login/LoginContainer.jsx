import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import LoginComponent from "./LoginComponent";
import { alertError, alertSuccess } from "../../../Helpers/notifications";
import { connect } from "react-redux";
import { SetCurrentUserInfo } from "../../../Redux/Actions/UserActions";
import Resquests from "../../../Helpers/Resquests";
import { saveToken } from "../../../Helpers/tokenFunctions";
import { ABORTED_REQUEST } from "../../../Config/networkErrors";

let cancelResquest = null;
const LoginContainer = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [isLogged, setLogged] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      cancelResquest && cancelResquest.cancel(ABORTED_REQUEST);
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

    cancelResquest = axios.CancelToken.source();
    try {
      const res = await Resquests.login({
        email: credentials.email,
        password: credentials.password,
        headers: {
          cancelToken: cancelResquest.token,
        },
      });

      // esta actualizacion se ejecuta despues de la redireccion en el renderizado
      // lo que causa la advertencia del componente desmontado
      // setLoading(false);
      if (res?.data?.ok === false) {
        alertError("Error in your credentials");
        setLoading(false);
      } else if (res?.data?.ok === true) {
        alertSuccess("Successful login.");
        const userInfoLogged = await Resquests.getInfoUserLogged(
          res.data.data.token
        );
        saveToken(res.data.data.token);
        props.SetCurrentUserInfo(userInfoLogged);
        setLogged(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  // Se hace uso de isLoading para evitar que la redireccion (renderizar <Redirect>)
  // se ejecute antes que la actualizacion de isLoading, por lo tanto para poder
  // redireccionar el componente debe estar totalmente cargado
  return isLogged && !isLoading ? (
    <Redirect to="/movies" />
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
