import React from "react";
import Logo from "./Logo";
import DropDownNav from "./DropDownNav";

const NavBarContainer = () => {
  return (
    <div>
      <div className="float-left p-5">
        <Logo />
      </div>
      <DropDownNav />
    </div>
  );
};

export default NavBarContainer;
