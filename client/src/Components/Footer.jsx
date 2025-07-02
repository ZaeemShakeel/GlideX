import React from "react";
import Logo from "../assets/logo.png";
import { Foot } from "../Components/CSS/Style.js";
import { FaTiktok, FaXTwitter, FaInstagram } from "react-icons/fa6";
import Payment from "../assets/payment.png";

function Footer() {
  const details = [
    {
      icon: "fa-solid fa-location-dot",
      text: "8642 Yule Street, Arvada CO 80007",
    },
    {
      icon: "fa-solid fa-phone-volume",
      text: "+(248) 762-0356",
    },
    {
      icon: "fa-solid fa-envelope-open",
      text: "support@road.com",
    },
  ];

  const midDetails = [
    {
      title: "About Us",
      UL1: "Our Story",
      UL2: "Blogs",
      UL3: "FAQ",
      UL4: "Contact Us",
      UL5: "Privacy Policy",
    },
    {
      title: "Collections",
      UL1: "Adventure Gear",
      UL2: "Eco Essentials",
      UL3: "Scoot Accessories",
      UL4: "Style & Safety",
      UL5: "Urban Rides",
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start px-4 md:px-10 py-10 gap-8">
        {/* Logo and Contact */}
        <div className="w-full md:w-[23%]">
          <img src={Logo} alt="GlideX Logo" className="mb-4" />
          <p className="text-gray-400 text-sm mb-4">
            Street offers government-certified mixed vehicles at affordable
            prices, ensuring quality EVs on the road.
          </p>
          {details.map((item, index) => (
            <p key={index} className="text-gray-400 text-sm py-1">
              <i className={`${item.icon} text-[#2DFF28] mr-2`}></i> {item.text}
            </p>
          ))}
        </div>

        {/* Links Sections */}
        {midDetails.map((item, index) => (
          <div key={index} className="w-full md:w-[23%] flex flex-col">
            <h1 className="font-bold text-xl mb-2">{item.title}</h1>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>{item.UL1}</li>
              <li>{item.UL2}</li>
              <li>{item.UL3}</li>
              <li>{item.UL4}</li>
              <li>{item.UL5}</li>
            </ul>
          </div>
        ))}

        {/* Newsletter & Social */}
        <div className="w-full md:w-[23%]">
          <h1 className="font-bold text-xl mb-2">Sign Up!</h1>
          <div className="bg-[#252525] p-2 flex items-center rounded-md mb-4">
            <input
              type="text"
              placeholder="Your email address"
              className="bg-transparent w-full text-sm px-2 text-white outline-none placeholder:text-gray-400"
            />
            <i className="fa-solid fa-paper-plane text-[#2DFF28] px-2"></i>
          </div>
          <div className="flex items-center gap-4">
            <FaXTwitter className="text-xl" />
            <FaTiktok className="text-xl" />
            <FaInstagram className="text-xl" />
          </div>
        </div>
      </div>

      <hr className="w-[95%] mx-auto border-gray-700" />

      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-5 text-sm text-gray-400 gap-4">
        <p>Created By Zaeem Shakeel © 2025, All Rights Reserved!</p>
        <img src={Payment} alt="payments" className="w-32 md:w-40" />
      </div>
    </div>
  );
}

export default Footer;
