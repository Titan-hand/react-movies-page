/**
 * ruta para manejar solamente si un usuario esta logueado o no.
 *
 * en caso de ya estar logueado no hace falta la comprobación del token
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { existToken, isValidToken, getToken } from "../Helpers/tokenFunctions";
import { alertWarn } from "../Helpers/notifications";
import { SetCurrentUserInfo } from "../Redux/Actions/UserActions";
import Resquests from "../Helpers/Resquests";

class SessionPrivateRoute extends Component {
  state = {
    isLoading: true,
    validToken: false,
    isLoggedUser: this.props.isLoggedUser,
    allChecked: false,
  };

  checkToken = async () => {
    const isValid = await isValidToken(getToken());
    console.log("Is a valid token?: ", isValid);
    this.setState({ validToken: existToken() && isValid });
  };

  // save info in redux again if store is void, for example user reload the page
  saveUserInfo = async () => {
    if (this.state.validToken) {
      const userData = await Resquests.getInfoUserLogged(getToken());
      if (userData) {
        this.props.SetCurrentUserInfo(userData);
      }
    }
  };

  // check token and then save userdata if is neccessary
  checkAndSave = async () => {
    await this.checkToken();
    await this.saveUserInfo();
    this.setState({ isLoading: false, allChecked: true });
  };

  componentDidMount() {
    if (!this.state.isLoggedUser) this.checkAndSave();
  }

  render() {
    const { isLoggedUser, isLoading, validToken, allChecked } = this.state;
    console.log("private route");
    if (isLoggedUser || validToken) {
      return <Route {...this.props} />;
    }

    if (isLoading) {
      return <h2>Checking token...</h2>;
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
