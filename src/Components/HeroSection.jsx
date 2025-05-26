import React from "react";
import hero1 from "../assets/hero1.jpg";
function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${hero1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[720px] w-full"
    >
      <div className="flex flex-col pl-10 w-1/2">
        <div className="mt-[280px]">
          <h1 className="font-bold text-5xl">
            Smooth Ride, Go Green With Our Certified E-vehicles.
          </h1>
          <p className="pt-4 text-lg text-gray-400">
            Go green, Drive clean with our Eco Friendly certified electric
            scoters.
          </p>
          <div className="flex justify-start items-center gap-5 w-1/2 pt-5">
            <button className="bg-[#2DFF28] p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300">
              Shop Now!
            </button>
            <button className="bg-white p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
