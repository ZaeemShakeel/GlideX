import React from "react";
import banner from "../assets/RM.jpg";
import { Style } from "../Components/CSS/Style.js";
function ReadMore() {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[400px] flex flex-col items-center justify-center"
    >
      <h1 className={Style.title}>Glow your ride with energetic E-scooters</h1>
      <p className={Style.para}>
        Empower your ride with strong Electric bikes from us
      </p>
      <button className="bg-white p-3 px-8 rounded-full mt-4 text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300">
        Read more
      </button>
    </div>
  );
}

export default ReadMore;
