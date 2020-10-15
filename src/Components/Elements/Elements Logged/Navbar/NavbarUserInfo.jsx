import React from "react";
import { connect } from "react-redux";

const NavbarUserInfo = ({ currentUserInfo, isLoggedUser }) => {
  const { photoUrl, username } = currentUserInfo || {};

  return isLoggedUser ? (
    <>
      <div className="nav-notify">
        <div className="nav-notify-alert">
          <span>2</span>
        </div>
        <i className="fa fa-bell"></i>
      </div>
      <div className="nav-perfil">
        <figure>
          <img
            src={photoUrl}
            alt="Your profile"
            title={username}
            aler={username}
          />
        </figure>
      </div>
    </>
  ) : null;
};

const mapStateToProps = (state) => state.UserInformation;

export default connect(mapStateToProps)(NavbarUserInfo);
