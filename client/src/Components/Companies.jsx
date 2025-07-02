import React, { useRef, useEffect } from "react";
import { animate, inView } from "motion";
import Delta from "../assets/Companies/Delta.png";
import Etlix from "../assets/Companies/Etlix.png";
import happenz from "../assets/Companies/happenz.png";
import lastica from "../assets/Companies/lastica.png";
import Orion from "../assets/Companies/Orion.png";
import wars from "../assets/Companies/wars.png";

function Companies() {
  const comLogo = [
    { Img: Delta },
    { Img: Etlix },
    { Img: happenz },
    { Img: lastica },
    { Img: Orion },
    { Img: wars },
  ];

  const logoRefs = useRef([]);

  useEffect(() => {
    logoRefs.current.forEach((logo, idx) => {
      if (logo) {
        logo.style.opacity = 0;
        logo.style.transform = "translateY(30px)";
        inView(logo, () => {
          animate(
            logo,
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.5, delay: idx * 0.15 }
          );
        });
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 py-10 place-items-center">
      {comLogo.map((item, index) => (
        <div
          key={index}
          ref={(el) => (logoRefs.current[index] = el)}
          className="w-full h-[120px] flex justify-center items-center rounded-md border border-gray-500 bg-[#1c1c1c] hover:bg-green-700 group transition-all duration-300"
        >
          <img
            src={item.Img}
            alt="Company Logo"
            className="max-h-[50px] object-contain opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default Companies;
