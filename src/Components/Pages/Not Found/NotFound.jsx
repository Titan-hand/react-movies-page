import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

// components
import Background from "../../Elements/Background/Background";

const NotFound = () => {
  return (
    <>
      <Background className="bg-not-found" />
      <div className="container-not-found">
        <div className="not-found">
          <h1 className="title-not-found title">404</h1>
          <h2>Page not found</h2>
          <ul className="not-found-menu">
            <li>
              <span>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/login" className="text-white">
                  Login
                </Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/signup" className="text-white">
                  Signup
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NotFound;
