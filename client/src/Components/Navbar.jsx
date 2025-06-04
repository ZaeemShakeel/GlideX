import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center px-10">
        {/* <ul className="flex justify-between gap-4 items-center">
          <li className="font-semibold text-[#2DFF28]">Home </li>
          <li className="font-semibold">Shop</li>
          <li className="font-semibold">About</li>
          <li className="font-semibold">Contact</li>
        </ul> */}

        <ul className="flex justify-between gap-4 items-center">
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
          <li className="font-semibold">About</li>
          <li className="font-semibold">Contact</li>
        </ul>

        <img
          src={logo}
          alt="GlideX"
          className="rounded-3xl w-[10%] mr-20 py-5"
        />

        <div className="flex justify-between gap-4 items-center">
          <IoSearchSharp className="text-2xl" />
          <CgProfile className="text-2xl" />
          <MdOutlineShoppingBag className="text-2xl" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
