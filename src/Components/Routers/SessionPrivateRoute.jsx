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

class SessionPrivateRoute extends Component {
  state = {
    isLoading: true,
    validToken: false,
    isLoggedUser: this.props.isLoggedUser,
    allChecked: false,
    token: getToken(),
  };

  checkToken = async () => {
    const validToken = await isValidToken(getToken());
    this.setState({ validToken });
  };

  // save info in redux again if store is void, for example user reload the page
  saveUserInfo = async () => {
    if (this.state.validToken) {
      const userData = await Resquests.getInfoUserLogged(getToken());
      if (userData) this.props.SetCurrentUserInfo(userData);
    }
  };

  // check token and then save userdata if is neccessary
  checkAndSave = async () => {
    await this.checkToken();
    await this.saveUserInfo();
    this.setState({ isLoading: false, allChecked: true });
  };

  componentDidMount() {
    // si el usuario no está logueado
    // (ya sea que recargo la pagina o sea un anonimo) comprobamos si hay un token
    //  si ese token es valido, hacemos una sesion persistente
    if (!this.state.isLoggedUser) this.checkAndSave();
  }

  render() {
    const { isLoggedUser, isLoading, validToken, allChecked } = this.state;
    if (isLoggedUser || validToken) {
      return <Route {...this.props} />;
    }

    if (isLoading) {
      return <LoaderPage />;
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
