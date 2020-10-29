import React, { Component } from "react";
import ErrorAlert from "./ErrorAlert";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorInfo: "",
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorAlert {...this.props} />;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ErrorBoundary;
