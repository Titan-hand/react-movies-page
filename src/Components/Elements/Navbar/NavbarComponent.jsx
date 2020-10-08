import React from "react";

// components
import NavbarLinks from "./Elements/NavbarLinks";
import NavbarUserInfo from "../Elements Logged/Navbar/NavbarUserInfo";
import NavbarSearch from "./Elements/NavbarSearch";

// styles
import "./styles.css";

const NavbarComponent = () => {
  return (
    <nav className="nav">
      <NavbarLinks />

      <div className="nav-section">
        <NavbarSearch />
        <NavbarUserInfo />
      </div>
    </nav>
  );
};

export default NavbarComponent;
