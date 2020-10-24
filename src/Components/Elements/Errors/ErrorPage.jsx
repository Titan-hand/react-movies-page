import React from "react";
import { Link } from "react-router-dom";
import NetworkErrorImage from "../../Images/PageNetworkError.svg";

function ErrorPage() {
  const buttonStyles = {
    marginTop: "1rem",
  };

  return (
    <div className="error-page-container">
      <div className="error-page-body">
        <img
          src={NetworkErrorImage}
          alt="Network Error, checking id user."
          className="error-page-image"
        />
        <h1 className="title-normal error-page-title">Hmmm</h1>
        <p>
          Your identifier as a user could not be verified, this is because there
          was a network problem, you may not have internet, you have a blocker
          or a problem with our servers.
        </p>
        <Link to="/">
          <button
            className="button button-outline button-flat button-success"
            style={buttonStyles}
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
