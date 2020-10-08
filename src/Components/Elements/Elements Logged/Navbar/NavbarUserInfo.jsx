import React from "react";
import { connect } from "react-redux";

const NavbarUserInfo = ({ currentUserInfo, isLoggedUser }) => {
  const { username, photoUrl } = currentUserInfo || {};
  
  return isLoggedUser ? (
    <>
      <div className="nav-notify"> 
        <div className="nav-notify-alert">
          <span>{username}</span>
        </div>
        <i className="fa fa-bell"></i>
      </div>
      <div className="nav-perfil">
        <figure>
          <img
            src={photoUrl}
            alt="Your profile"
          />
        </figure>
      </div>
    </>
  ) : null;
};

const mapStateToProps = (state) => state.UserInformation;

export default connect(mapStateToProps)(NavbarUserInfo);
