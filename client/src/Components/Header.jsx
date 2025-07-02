import React from "react";
import { FaTiktok, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Dropdown from "./DropDown";

function Header() {
  return (
    <div className="hidden md:flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-10 py-4 border-b border-white">
      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <FaXTwitter className="text-lg md:text-xl" />
        <FaTiktok className="text-lg md:text-xl" />
        <FaInstagram className="text-lg md:text-xl" />
      </div>

      {/* Shipping Message */}
      <div className="flex items-center gap-2 text-center text-sm md:text-base">
        <MdArrowBackIos />
        <p className="whitespace-nowrap">Free Shipping on Order over $140</p>
        <MdArrowForwardIos />
      </div>

      {/* Dropdown */}
      <div>
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;
