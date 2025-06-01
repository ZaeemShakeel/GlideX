import React from "react";
import card1 from "../assets/Cards/grid-banner.jpg";
import card2 from "../assets/Cards/grid-banner-1.jpg";

function Cards() {
  const cardData = [
    {
      image: card1,
      title: "New Arrivals",
      text: "Check out our new arrivals here",
      button: "Book Today!",
    },
    {
      image: card2,
      title: "CX-340",
      text: "Ride to the max with CX-340's powerful engine.",
    },
  ];
  return (
    <div className="flex justify-between items-center gap-6 p-10 py-20">
      {cardData.map((item, index) => (
        <div
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[420px] w-1/2 flex flex-col justify-center p-10 rounded-sm"
        >
          <h1 className="text-5xl font-bold">{item.title}</h1>
          <p className="text-lg text-gray-400 pt-2 pb-4">{item.text}</p>
          {item.button && (
            <button className="bg-[#2DFF28] w-[25%] p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300">
              {item.button}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Cards;
