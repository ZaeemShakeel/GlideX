import React from "react";
import Logo from "../assets/logo.png";
import { Foot } from "../Components/CSS/Style.js";
import { FaTiktok } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
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
    <div>
      <div className="flex justify-evenly items-center px-5 py-10">
        <div className="w-[24%]">
          <img src={Logo} alt="GlideX Logo" />
          <p className="text-gray-400    text-lg py-4">
            Street offers government-certified mixed vehicles at affordable
            prices, ensuring quality EVs on the road.
          </p>
          {details.map((item, index) => (
            <p className="text-gray-400 text-lg py-2">
              <i className={`${item.icon} text-[#2DFF28]`}></i> {item.text}
            </p>
          ))}
        </div>

        {midDetails.map((item, index) => (
          <div className="w-[24%] flex flex-col justify-between    ">
            <h1 className="font-bold text-2xl pb-2">{item.title}</h1>
            <ul className={Foot.text}>{item.UL1}</ul>
            <ul className={Foot.text}>{item.UL2}</ul>
            <ul className={Foot.text}>{item.UL3}</ul>
            <ul className={Foot.text}>{item.UL4}</ul>
            <ul className={Foot.text}>{item.UL5}</ul>
          </div>
        ))}

        <div className="w-[24%] flex flex-col justify-start">
          <h1 className="font-bold text-2xl">Sign Up!</h1>
          <div className="bg-[#252525] p-4 my-4 flex justify-between items-center">
            <input
              type="text"
              placeholder="Your email address"
              className="bg-transparent"
            />
            <i class="fa-solid fa-paper-plane text-[#2DFF28]"></i>
          </div>
          <div className="flex justify-start items-center gap-4 ">
            <FaXTwitter className="text-xl" />
            <FaTiktok className="text-xl" />
            <FaInstagram className="text-xl" />
          </div>
        </div>
      </div>
      <hr className="w-[95%] m-auto" />
      <div className="flex justify-between items-center px-10 py-5">
        <p>Created By Zaeem Shakeel © 2025, All Rights Reserved!</p>
        <img src={Payment} alt="payments" />
      </div>
    </div>
  );
}

export default Footer;
