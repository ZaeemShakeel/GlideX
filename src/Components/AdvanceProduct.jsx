import React from "react";
import Image from "../assets/advance.jpg";
import hero1 from "../assets/advance.jpg";

function AdvanceProduct() {
  const cardData = [
    {
      title: "Anti theft measures",
      text: "Our Kick Back Scooter prioritizes security with GPS and remote locking",
      number: "01",
    },
    {
      title: "72 VOLT SCRAMBLER",
      text: "The 72 VOLT SCRAMBLER redefines power with 72V dominance",
      number: "02",
    },
    {
      title: "3 hours fast charge",
      text: "Our Kick Back Scooter offers a swift 3-hour charge for rapid adventures",
      number: "03",
    },
    {
      title: "26 MPH Speed",
      text: "With a maximum velocity of 26 MPH, make them hurdle through the roads quickly",
      number: "04",
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${hero1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[520px] w-full"
      >
        <div className="w-[30%] pl-16 pt-20 ">
          <p className="text-lg text-[#2DFF28]">Swift Recharge</p>
          <h1 className="font-bold text-5xl">3-Hour</h1>
          <h1 className="font-bold text-5xl">Rapid Charging</h1>
        </div>
      </div>
      <div className="flex items-center justify-between p-6">
        {cardData.map((item, index) => (
          <div className="w-[25%] p-5 border-l-2 border-gray-400">
            <h1 className="font-bold text-2xl text-gray-200">{item.title}</h1>
            <p className="text-gray-400 py-3">{item.text}</p>
            <span className="font-bold text-5xl  hover:text-[#2DFF28] transition-all duration-300 cursor-pointer ">
              {item.number}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdvanceProduct;
