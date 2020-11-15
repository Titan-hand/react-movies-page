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
import { ABORTED_REQUEST } from "../Config/networkErrors";

class SessionPrivateRoute extends Component {
  state = {
    isLoading: true,
    validToken: false,
    isLoggedUser: this.props.isLoggedUser ?? false,
    allChecked: false,
    error: null,
  };

  cancelRequest = null;

  componentDidMount() {
    // si el usuario no está logueado
    // (ya sea que recargo la pagina o sea un anonimo) comprobamos si hay un token
    //  si ese token es valido, hacemos una sesion persistente
    this.cancelRequest = axios.CancelToken.source();
    this.checkAndSave();
  }

  componentWillUnmount() {
    this.cancelRequest && this.cancelRequest.cancel(ABORTED_REQUEST);
  }

  checkToken = async () => {
    const token = getToken();
    const validToken = await isValidToken(token, this.cancelRequest.token);
    // Si la solicitud se cancela, entonces el token no existe
    if (validToken) {
      this.setState({ validToken });
      return true;
    }
  };

  // save info in redux again if store is void, for example user reload the page
  saveUserInfo = async () => {
    if (this.state.validToken) {
      const userData = await Resquests.getInfoUserLogged(
        getToken(),
        this.cancelRequest.token
      );
      if (userData) {
        this.props.SetCurrentUserInfo(userData);
        return true;
      }
    }
  };

  // check token and then save userdata if is neccessary
  checkAndSave = async () => {
    try {
      await this.checkToken();
      await this.saveUserInfo();
      this.setState({ isLoading: false, allChecked: true });
      
    } catch (error) {
      this.setState({
        isLoading: false,
        allChecked: true,
        error: true,
      });
    }
  };

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
