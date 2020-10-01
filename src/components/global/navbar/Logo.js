import React, { useState } from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  let colors = ["one", "two", "three"];
  const [selectedColor, setselectedColor] = useState(colors[0]);
  const onHoverColorChanger = () => {
    setselectedColor(colors[Math.floor(Math.random() * colors.length)]);
  };
  const returnSelectedColor = () => {
    setselectedColor(0);
  };
  return (
    <div>
        <img
          className="logo"
          src={require("../../../images/eye purple blue 2.jpg")}
          alt="Eye Logo"
        />
      <div>
        <Link
          to="/"
          className={`Brand-name ${selectedColor}`}
          onMouseEnter={onHoverColorChanger}
          onMouseLeave={returnSelectedColor}
        >
          The
          <br />
          Cordial <br />
          Eye
        </Link>
      </div>
    </div>
  );
};

export default Logo;
