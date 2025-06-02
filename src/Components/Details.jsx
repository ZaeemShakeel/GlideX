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
      title: "24*7 Support",
      detail: "Customer service active 24*7 all-over",
    },
    {
      icon: "fa-solid fa-people-carry-box",
      title: "Fastest Delivery",
      detail: "Trustworthy & reliable service provider",
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        // Set initial state for each card
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
    <div className="flex justify-between items-center gap-3 p-5 py-20 flex-wrap">
      {details.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="w-[350px] h-[200px] p-5 bg-[#252525] flex flex-col justify-center rounded-sm"
        >
          <i className={`${item.icon} text-[#2DFF28] text-2xl`}></i>
          <h2 className="font-bold text-2xl py-2">{item.title}</h2>
          <p className="text-lg text-gray-400 text-wrap">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

export default Details;
