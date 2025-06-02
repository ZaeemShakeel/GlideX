import React, { useEffect, useRef } from "react";
import card1 from "../assets/Cards/grid-banner.jpg";
import card2 from "../assets/Cards/grid-banner-1.jpg";
import { animate, inView } from "motion";

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

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        inView(card, () => {
          // Animate the whole card div
          animate(
            card,
            { opacity: [0, 1], y: [60, 0] },
            { duration: 0.7, easing: "ease-out" }
          );

          // Animate inner container
          const container = card.querySelector(".card-container");
          animate(
            container,
            { opacity: [0, 1], y: [50, 0] },
            { duration: 0.6, delay: 0.1 }
          );

          // Animate title
          animate(
            card.querySelector(".card-title"),
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.5, delay: 0.2 }
          );

          // Animate text
          animate(
            card.querySelector(".card-text"),
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.5, delay: 0.4 }
          );

          // Animate button if exists
          const btn = card.querySelector(".card-button");
          if (btn) {
            animate(
              btn,
              { opacity: [0, 1], y: [30, 0] },
              { duration: 0.5, delay: 0.6 }
            );
          }
        });
      }
    });
  }, []);

  return (
    <div className="flex justify-between items-center gap-6 p-10 py-20">
      {cardData.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "420px",
            width: "50%",
          }}
          className="rounded-sm opacity-0 translate-y-[60px] overflow-hidden"
        >
          <div className="card-container flex flex-col justify-center p-10 h-full opacity-0 translate-y-[50px]">
            <h1 className="card-title text-5xl font-bold opacity-0 translate-y-[30px]">
              {item.title}
            </h1>
            <p className="card-text text-lg text-gray-400 pt-2 pb-4 opacity-0 translate-y-[30px]">
              {item.text}
            </p>
            {item.button && (
              <button className="card-button bg-[#2DFF28] w-[25%] p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300 opacity-0 translate-y-[30px]">
                {item.button}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
