import React from "react";

const NavbarBars = () => {
  return (
    <>
      <div className="navbar-nav-toggle">
        <label htmlFor="navbar-nav-toggle">
          <i className="fa fa-bars" />
        </label>
      </div>
      <input type="checkbox" id="navbar-nav-toggle" />
    </>
  );
};

export default NavbarBars;
