import React from "react";
import InputText from "../../Inputs/Text";
import InputIcon from "../../Inputs/InputIcon";

const NavbarSearch = () => {
  return (
    <div className="nav-search">
      <form>
        <div className="field-input">
          <InputIcon icon="search" className="nav-field-addon" />
          <InputText className="nav-input-search" placeholder="Search movies" />
        </div>
      </form>
    </div>
  );
};

export default NavbarSearch;
