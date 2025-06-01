import React from "react";
import { Style } from "../Components/CSS/Style.js";

function AboutRoad() {
  return (
    <div className="relative flex flex-col justify-between items-center gap-5 w-[70%] m-auto py-24">
      <h1 className="text-8xl font-bold text-center text-gray-700 text-opacity-30 absolute top-10 italic">
        ROAD
      </h1>
      <h1 className="text-5xl font-bold text-center z-10">About Road</h1>
      <p className="text-lg text-gray-400 text-center">
        Rev up the green revolution and join the Road family! Having over a
        decade of expertise in producing top-notch electric vehicles worldwide .
        Our quality-assured electric vehicles boast impressive CC power,
        ensuring a smooth and exhilarating ride every time. Best of all, our
        prices are affordable, making sustainable transportation accessible to
        all eco-warriors. Take a stand against global warming and start your
        journey with Road today! Read more
      </p>
      <button className="bg-[#2DFF28] w-[25%] p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300">
        Read more
      </button>
    </div>
  );
}

export default AboutRoad;
