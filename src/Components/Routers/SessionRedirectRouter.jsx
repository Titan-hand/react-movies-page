import React, { Component } from "react";
import LoaderPage from "../Elements/Loaders/LoaderPage";

import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isValidToken, getToken } from "../Helpers/tokenFunctions";

class SessionRedirectRoute extends Component {
  state = {
    isLoading: true,
    validToken: false,
    isLoggedUser: this.props.isLoggedUser,
    token: getToken(),
  };

  checkToken = async () => {
    const validToken = await isValidToken(getToken());
    this.setState({ isLoading: false, validToken });
  };

  componentDidMount() {
    if (!this.state.isLoggedUser) this.checkToken();
  }

  render() {
    const { isLoggedUser, isLoading, validToken } = this.state;
    if (isLoggedUser || validToken) {
      return <Redirect to="/movies" />;
    }

    if (isLoading) {
      return <LoaderPage />;
    }

    return <Route {...this.props} />;
  }
}

const mapStateToProps = (state) => state.UserInformation;

export default connect(mapStateToProps, null)(SessionRedirectRoute);
