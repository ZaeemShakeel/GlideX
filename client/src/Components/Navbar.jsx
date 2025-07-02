import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4 gap-4">
      {/* Nav Links */}
      <ul className="flex flex-wrap justify-center md:justify-start gap-4 items-center text-sm md:text-base">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold ${isActive ? "text-[#2DFF28]" : "text-white"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `font-semibold ${isActive ? "text-[#2DFF28]" : "text-white"}`
            }
          >
            Shop
          </NavLink>
        </li>
        <li className="font-semibold text-white">About</li>
        <li className="font-semibold text-white">Contact</li>
      </ul>

      {/* Logo */}
      <img src={logo} alt="GlideX" className="w-24 md:w-[10%] rounded-3xl" />

      {/* Icons */}
      <div className="flex justify-center md:justify-end gap-4 items-center text-white">
        <IoSearchSharp className="text-xl md:text-2xl" />
        <CgProfile className="text-xl md:text-2xl" />
        <MdOutlineShoppingBag className="text-xl md:text-2xl" />
      </div>
    </div>
  );
}

export default Navbar;
