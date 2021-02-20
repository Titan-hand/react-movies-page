import React, { Component } from "react";
import LoaderPage from "../Elements/Loaders/LoaderPage";

import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isValidToken, getToken } from "../Helpers/tokenFunctions";
import ErrorPage from "../Elements/Errors/ErrorPage";
import axios from "axios";

class SessionRedirectRoute extends Component {
  state = {
    isLoading: true,
    validToken: false,
    isLoggedUser: this.props.isLoggedUser,
    token: getToken(),
    error: null,
  };
  cancelRequest = null;

  checkCancellation = (error) => {
    if (!axios.isCancel(error)) {
      this.setState({
        isLoading: false,
        allChecked: true,
        error: true,
      });
    }
  };
  componentDidMount() {
    this.cancelRequest = axios.CancelToken.source();
    this.checkToken();
    this.isMounted = true;
  }

  componentWillUnmount() {
    this.cancelRequest && this.cancelRequest.cancel();
  }

  checkToken = async () => {
    try {
      const validToken = await isValidToken(
        getToken(),
        this.cancelRequest.token
      );
      this.isMounted && this.setState({ isLoading: false, validToken });
    } catch (error) {
      this.checkCancellation(error);
    }
  };

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
