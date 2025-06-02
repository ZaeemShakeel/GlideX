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
        // Set initial state
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
    <div className="flex items-start justify-center gap-4">
      {comLogo.map((item, index) => (
        <div
          key={index}
          ref={(el) => (logoRefs.current[index] = el)}
          className="border-2 border-gray-500 p-10 hover:bg-green-700 group transition-all duration-300 cursor-pointer w-1/6 flex justify-center items-center"
        >
          <img
            src={item.Img}
            alt="Company Logo"
            className="w-[120px] h-[35px] opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default Companies;
