import React, { Component } from "react";
import LoaderPage from "../Elements/Loaders/LoaderPage";

import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isValidToken, getToken } from "../Helpers/tokenFunctions";
import ErrorPage from "../Elements/Errors/ErrorPage";

class SessionRedirectRoute extends Component {
  state = {
    isLoading: true,
    validToken: false,
    isLoggedUser: this.props.isLoggedUser,
    token: getToken(),
    error: null,
  };

  checkToken = async () => {
    try {
      const validToken = await isValidToken(getToken());
      this.setState({ isLoading: false, validToken });
    } catch (error) {
      this.setState({ isLoading: false, error });
    }
  };

  componentDidMount() {
    this.checkToken();
  }

  render() {
    const { isLoggedUser, isLoading, validToken, error } = this.state;
    if (isLoggedUser || validToken) {
      return <Redirect to="/movies" />;
    }

    if (isLoading) {
      return <LoaderPage />;
    }

    if (error) {
      return <ErrorPage />;
    }

    return <Route {...this.props} />;
  }
}

const mapStateToProps = (state) => state.UserInformation;

export default connect(mapStateToProps, null)(SessionRedirectRoute);
