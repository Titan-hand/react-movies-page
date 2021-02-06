import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RemoveCurrentUserInfo } from "../../../Redux/Actions/UserActions.js";

const NavbarLinks = (props) => {
  const isLogged = props.isLoggedUser;
  const removeCurrentUser = () => {
    props.RemoveCurrentUserInfo();
  };

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
        {isLogged && (
          <li className="nav-menu-link">
            <Link to="/favorites">Favorites movies</Link>
          </li>
        )}
        {isLogged && (
          <li className="nav-menu-link">
            <Link to="/" onClick={removeCurrentUser}>
              Logout
            </Link>
          </li>
        )}

        {!isLogged && (
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

const mapDispatchToProps = { RemoveCurrentUserInfo };

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLinks);
