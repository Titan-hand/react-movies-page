import React from "react";

// components
import NavbarLinks from "./Elements/NavbarLinks";
import NavbarUserInfo from "../Elements Logged/Navbar/NavbarUserInfo";
import NavbarSearch from "./Elements/NavbarSearch";
import NavbarBars from "./Elements/NavbarBars";
import NavbarCloseMenu from "./Elements/NavbarCloseMenu";

// styles
import "./Styles/styles.css";

const NavbarComponent = () => {
  return (
    <>
      <NavbarBars />
      <nav className="nav">
        <NavbarLinks />

        <div className="nav-section">
          <NavbarCloseMenu />
          <NavbarSearch />
          <NavbarUserInfo />
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
