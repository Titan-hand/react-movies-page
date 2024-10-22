import React from "react";
import NavbarContainer from "../Navbar/NavbarContainer";
const LayoutComponent = ({ children }) => {
  return (
    <main className="app-movie">
      <NavbarContainer />
      {children}
    </main>
  );
};

export default LayoutComponent;
