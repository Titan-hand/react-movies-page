import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavbarLinks = (props) => {
  return (
    <div className="nav-section">
      <div className="nav-logo">
        <Link to="/">
          <h2 className="nav-logo-text title">Logo</h2>
        </Link>
      </div>
      <ul className="nav-menu">
        <li className="nav-menu-link">
          <Link to="/">Top Movies</Link>
        </li>
        {props.isLoggedUser && (
          <>
            <li className="nav-menu-link">
              <Link to="/movies/favorites">Favorites movies</Link>
            </li>
          </>
        )}

        {!props.isLoggedUser && (
          <>
            <li className="nav-menu-link">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-menu-link">
              <Link to="/signup">Sign up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedUser: state.UserInformation.isLoggedUser,
});

export default connect(mapStateToProps)(NavbarLinks);
