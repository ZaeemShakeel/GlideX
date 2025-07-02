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
          // Animate card container
          animate(
            card,
            { opacity: [0, 1], y: [60, 0] },
            { duration: 0.7, easing: "ease-out" }
          );

          // Inner content animations
          const container = card.querySelector(".card-container");
          animate(
            container,
            { opacity: [0, 1], y: [50, 0] },
            { duration: 0.6, delay: 0.1 }
          );

          animate(
            card.querySelector(".card-title"),
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.5, delay: 0.2 }
          );

          animate(
            card.querySelector(".card-text"),
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.5, delay: 0.4 }
          );

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-8 md:px-10 py-16">
      {cardData.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="rounded-sm overflow-hidden opacity-0 translate-y-[60px] h-[400px] md:h-[420px] w-full"
        >
          <div className="card-container flex flex-col justify-center h-full px-6 sm:px-10 opacity-0 translate-y-[50px] bg-black bg-opacity-50">
            <h1 className="card-title text-3xl sm:text-4xl md:text-5xl font-bold text-white opacity-0 translate-y-[30px]">
              {item.title}
            </h1>
            <p className="card-text text-sm sm:text-base md:text-lg text-gray-300 pt-2 pb-4 opacity-0 translate-y-[30px]">
              {item.text}
            </p>
            {item.button && (
              <button className="card-button bg-[#2DFF28] w-fit px-6 py-2 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300 opacity-0 translate-y-[30px]">
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
