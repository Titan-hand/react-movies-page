import React from "react";
import { connect } from "react-redux";

const NavbarUserInfo = (props) => {
  console.log(props);
  return props.isLoggedUser ? (
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
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt="Your profile"
          />
        </figure>
      </div>
    </>
  ) : null;
};

const mapStateToProps = (state) => ({
  UserInformation: state.UserInformation,
});

export default connect(mapStateToProps)(NavbarUserInfo);
