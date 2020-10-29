import React from "react";

// components
import NavbarLinks from "./Components/NavbarLinks";
import NavbarUserInfo from "../Elements Logged/Navbar/NavbarUserInfo";
import NavbarSearch from "./Components/NavbarSearch";
import NavbarBars from "./Components/NavbarBars";
import NavbarCloseMenu from "./Components/NavbarCloseMenu";

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
