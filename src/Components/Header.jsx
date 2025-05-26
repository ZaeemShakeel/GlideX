import React from "react";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Dropdown from "./DropDown";

function Header() {
  return (
    <div className="flex justify-between  px-10 pt-5 border-b-[1px] border-white pb-3">
      <div className="flex justify-between items-center gap-4 ">
        <FaXTwitter className="text-xl" />
        <FaTiktok className="text-xl" />
        <FaInstagram className="text-xl" />
      </div>

      <div className="flex justify-between items-center gap-4">
        <MdArrowBackIos />
        <p className="text-lg">Free Shipping on Order over $140</p>
        <MdArrowForwardIos />
      </div>

      <div>
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;
