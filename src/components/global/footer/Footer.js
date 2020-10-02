import React from "react";
import { Link } from "react-router-dom";
import Logo from "../navbar/Logo";
const Footer = () => {
  return (
    <div className="grid grid-cols-4 divide-x divide-gray-400 font-thin text-base static">
      <div >
        <Logo />
        <Link className="text-right">Contact</Link>
      </div>
      <div class="text-center">About</div>
      <div class="text-center">Programming</div>
      <div class="text-center">Donate</div>
    </div>
  );
};

export default Footer;
