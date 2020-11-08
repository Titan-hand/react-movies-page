/**
 * ruta para manejar solamente si un usuario esta logueado o no.
 *
 * en caso de ya estar logueado no hace falta la comprobación del token
 */
import React, { Component } from "react";
import LoaderPage from "../Elements/Loaders/LoaderPage";

import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isValidToken, getToken } from "../Helpers/tokenFunctions";
import { alertWarn } from "../Helpers/notifications";
import { SetCurrentUserInfo } from "../Redux/Actions/UserActions";
import Resquests from "../Helpers/Resquests";
import ErrorPage from "../Elements/Errors/ErrorPage";
import axios from "axios";

class SessionPrivateRoute extends Component {
  state = {
    isLoading: true,
    validToken: false,
    isLoggedUser: this.props.isLoggedUser ?? false,
    allChecked: false,
    error: null,
  };

  cancelRequest = null;

  checkToken = async () => {
    const token = getToken();
    const validToken = await isValidToken(token, this.cancelRequest.token);
    this.setState({ validToken });
  };

  // save info in redux again if store is void, for example user reload the page
  saveUserInfo = async () => {
    if (this.state.validToken) {
      const userData = await Resquests.getInfoUserLogged(
        getToken(),
        this.cancelRequest.token
      );
      if (userData) this.props.SetCurrentUserInfo(userData);
    }
  };

  // check token and then save userdata if is neccessary
  checkAndSave = async () => {
    try {
      await this.checkToken();
      await this.saveUserInfo();
      this.setState({ isLoading: false, allChecked: true });
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        allChecked: true,
        error: true,
      });
    }
  };

  componentDidMount() {
    // si el usuario no está logueado
    // (ya sea que recargo la pagina o sea un anonimo) comprobamos si hay un token
    //  si ese token es valido, hacemos una sesion persistente
    this.cancelRequest = axios.CancelToken.source();
    this.checkAndSave();
  }

  componentWillUnmount() {
    this.cancelRequest && this.cancelRequest.cancel();
    console.log("Se cancela la comprobacion private route")
  }

  render() {
    const {
      isLoggedUser,
      isLoading,
      validToken,
      allChecked,
      error,
    } = this.state;

    if (isLoading) {
      return <LoaderPage />;
    }

    if (error) {
      return <ErrorPage />;
    }

    if (isLoggedUser || validToken) {
      return <Route {...this.props} />;
    }

    if (allChecked) alertWarn("To enter here you must have an account.");
    return <Redirect to="/login" />;
  }
}

const mapStateToProps = (state) => state.UserInformation;
const mapDispatchToProps = {
  SetCurrentUserInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionPrivateRoute);
