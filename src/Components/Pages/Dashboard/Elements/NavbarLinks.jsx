import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarLinks = () => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className="tabs">
        <Link to={`${pathname}/movies`} className="tab-link">
          My movies
        </Link>

        <Link to={`${pathname}/settings`} className="tab-link">
          Settings
        </Link>
      </nav>
    </>
  );
};

export default NavbarLinks;
