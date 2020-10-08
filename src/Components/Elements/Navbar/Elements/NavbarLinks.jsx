import React from "react";
import { Link } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <div className="nav-section">
      <div className="nav-logo">
        <h2 className="nav-logo-text">Logo</h2>
      </div>
      <ul className="nav-menu">
        <li className="nav-menu-link">
          <Link to="/">Top Movies</Link>
        </li>
        <li className="nav-menu-link">
          <Link to="/">Series</Link>
        </li>
        <li className="nav-menu-link">
          <Link to="/">My List</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
