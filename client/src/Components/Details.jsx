import React, { useRef, useEffect } from "react";
import { animate, inView } from "motion";

function Details() {
  const details = [
    {
      icon: "fa-solid fa-truck-fast",
      title: "Fastest Delivery",
      detail: "Delivery ordered within 24 hours",
    },
    {
      icon: "fa-solid fa-credit-card",
      title: "Secure Payments",
      detail: "Payment protected by billdesk pro",
    },
    {
      icon: "fa-solid fa-headset",
      title: "24/7 Support",
      detail: "Customer service active 24/7 all-over",
    },
    {
      icon: "fa-solid fa-people-carry-box",
      title: "Trusted Service",
      detail: "Trustworthy & reliable service provider",
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = 0;
        card.style.transform = "translateY(40px)";
        inView(card, () => {
          animate(
            card,
            { opacity: [0, 1], y: [40, 0] },
            { duration: 0.6, delay: index * 0.2 }
          );
        });
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 py-20">
      {details.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="bg-[#252525] p-6 rounded-lg shadow-md h-[200px] flex flex-col justify-center"
        >
          <i className={`${item.icon} text-[#2DFF28] text-xl md:text-2xl`}></i>
          <h2 className="font-bold text-lg md:text-xl py-2 text-white">
            {item.title}
          </h2>
          <p className="text-sm md:text-base text-gray-400">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

export default Details;
