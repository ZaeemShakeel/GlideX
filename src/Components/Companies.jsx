import React from "react";
import Delta from "../assets/Companies/Delta.png";
import Etlix from "../assets/Companies/Etlix.png";
import happenz from "../assets/Companies/happenz.png";
import lastica from "../assets/Companies/lastica.png";
import Orion from "../assets/Companies/Orion.png";
import wars from "../assets/Companies/wars.png";

function Companies() {
  const comLogo = [
    {
      Img: Delta,
    },
    {
      Img: Etlix,
    },
    {
      Img: happenz,
    },
    {
      Img: lastica,
    },
    {
      Img: Orion,
    },
    {
      Img: wars,
    },
  ];

  return (
    <div className="flex items-start justify-center">
      {comLogo.map((item, index) => (
        <div className="border-2 border-gray-500 p-10 hover:bg-green-700 group transition-all duration-300 cursor-pointer w-1/6 flex justify-center items-center">
          <img
            src={item.Img}
            alt="Delta"
            className="w-[120px] h-[35px] opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default Companies;
