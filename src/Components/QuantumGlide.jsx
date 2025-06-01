import React from "react";
import Image from "../assets/Products/QuantumGlide.jpg";

function QuantumGlide() {
  return (
    <div className="flex items-center justify-center gap-5">
      <img src={Image} alt="e-scoter" className="w-1/2" />
      <div className="flex flex-col justify-between h-screen p-20 bg-[#242424]">
        <h1 className="font-bold text-5xl">QuantumGlide Z3</h1>
        <p className="text-lg text-gray-400">Effortless City Adventures</p>
        <p className="font-bold text-3xl">€447,95 EUR</p>
        <p>Tax included.</p>
        <hr />
        <div></div>
        <p className="text-lg text-gray-400">
          Power: <span className="font-bold text-white">350W</span>
        </p>
        <div>
          <button className="border-2 border-white rounded-lg p-2 bg-black hover:border-green-500 transition-all duration-200 hover:scale-105 mx-4">
            350W
          </button>
          <button className="border-2 border-white rounded-lg p-2 bg-black hover:border-green-500 transition-all duration-200 hover:scale-105">
            550W
          </button>
        </div>

        <p className="text-lg text-gray-400">
          Color: <span className="font-bold text-white">Green</span>
        </p>
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="w-10 h-10 bg-green-500 rounded-full hover:border-4 hover:border-white hover:scale-105 transition-all duration-300 cursor-pointer"></div>
          <div className="w-10 h-10 bg-white rounded-full hover:border-4 hover:border-green-500 hover:scale-105 transition-all duration-300 cursor-pointer"></div>
        </div>
        <div className="flex justify-start items-center gap-2 pt-5 pl-4">
          <button className="bg-[#2DFF28] p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300">
            Add to cart
          </button>
          <button className="bg-white p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuantumGlide;
