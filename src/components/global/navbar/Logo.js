import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoPurpleBlue from "../../../images/eye purple blue.jpg"
import LogoDarkMagenta from "../../../images/eye dark magenta.jpg"
import LogoPurpleBlue2 from "../../../images/eye purple blue 2.jpg"
import LogoPurpleGold from "../../../images/eye purple gold.png"
import LogoYellow from "../../../images/eye yellow.jpg"

const Logo = () => {
  const colors = [
    "blue",
    "darkpurple",
    "lightblue",
    "pink",
    "purple",
    "yellow",
    "magenta",
  ];
  const logos = {
    "blue": LogoPurpleBlue,
    "darkpurple": LogoDarkMagenta,
    "lightblue": LogoPurpleBlue,
    "pink": LogoPurpleBlue2,
    "purple": LogoPurpleGold,
    "yellow": LogoYellow,
    "magenta": LogoDarkMagenta,
  }
  const [selectedColor, setselectedColor] = useState(colors[0]);
  const [selectedLogo, setSelectedLogo] = useState(logos[selectedColor])
  const onHoverColorChanger = () => {
    setselectedColor(colors[Math.floor(Math.random() * colors.length)]);
    
  };
  useEffect(() => {
    setSelectedLogo(logos[selectedColor])
    }, [selectedColor])
  const returnSelectedColor = () => {
    setselectedColor(colors[0]);
    setSelectedLogo(logos[selectedColor])
  };

  return (
      <Link
        to="/"
        className={`title font-title text-${selectedColor}`}
        onMouseEnter={onHoverColorChanger}
        onMouseLeave={returnSelectedColor}
      >
        <img
          className="logo float-left m-4"
          src={selectedLogo}
          alt="Eye Logo"
        />
        The
        <br />
        Cordial <br />
        Eye
      </Link>
  );
};

export default Logo;
