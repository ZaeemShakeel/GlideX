import React from "react";
import Image from "../assets/midBanner.jpg";
function ProductDetails() {
  const statsData = [
    {
      title: "60mph",
      text: "4-Speed Mode",
    },
    {
      title: "120mi",
      text: "Km Range",
    },
    {
      title: "440lbs",
      text: "Frame Weight",
    },
    {
      title: "24kw",
      text: "Per Charge",
    },
  ];

  return (
    <div className="bg-[#1B1B1B] py-20">
      <h1 className="text-white font-bold text-5xl text-center ">
        Spark Your Ride With Electric Power
      </h1>
      <p className="text-lg text-gray-400 text-center py-4">
        With electric power shaping the future of the globe, explore our most
        reliable products now.
      </p>
      <img src={Image} alt="banner" className="px-10" />
      <div className="flex justify-between items-center pt-10 w-[70%] m-auto">
        {statsData.map((item, index) => (
          <div className="w-1/4 flex flex-col items-center justify-between">
            <h1 className="font-bold text-5xl">{item.title}</h1>
            <p className="pt-2">{item.text}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-400 text-lg text-center w-[50%] m-auto pt-6">
        Are you ready to take your ride to new heights? Say goodbye to noisy
        engines. Explore the future of transportation with our awe-inspiring
        electric vehicle
      </p>
      <div className="flex justify-center pt-10 gap-4 relative">
        <button className="bg-[#2DFF28] p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300 z-10">
          Buy Now!
        </button>
        <button className="bg-white p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300 z-10">
          View Shop
        </button>
        <hr className="text-gray-200 h-[1px] w-[90%] absolute top-[65px]" />
      </div>
    </div>
  );
}

export default ProductDetails;
