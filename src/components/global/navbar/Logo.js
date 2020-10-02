import React, { useState } from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  let colors = [
    "darkpurple",
    "blue",
    "pink",
    "purple",
    "yellow",
    "magenta",
    "lightblue",
  ];
  const [selectedColor, setselectedColor] = useState(colors[0]);
  const onHoverColorChanger = () => {
    setselectedColor(colors[Math.floor(Math.random() * colors.length)]);
  };
  const returnSelectedColor = () => {
    setselectedColor(0);
  };
  return (
    <div>
      <div>
        <img
          className="logo"
          src={require("../../../images/eye purple blue 2.jpg")}
          alt="Eye Logo"
        />
      </div>
      <Link
        to="/"
        className={`title text-${selectedColor}`}
        onMouseEnter={onHoverColorChanger}
        onMouseLeave={returnSelectedColor}
      >
        The
        <br />
        Cordial <br />
        Eye
      </Link>
    </div>
  );
};

export default Logo;
