import React, { useEffect, useRef } from "react";
import hero1 from "../assets/advance.jpg";
import { animate, inView } from "motion";

function AdvanceProduct() {
  const cardRefs = useRef([]);
  const headerRef = useRef(null);
  const textRefs = useRef([]);

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

  useEffect(() => {
    // Animate all header texts with stagger
    if (headerRef.current) {
      inView(headerRef.current, () => {
        textRefs.current.forEach((el, i) => {
          animate(
            el,
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.7, delay: i * 0.2 }
          );
        });
      });
    }

    // Animate each card individually
    cardRefs.current.forEach((card, i) => {
      if (card) {
        inView(card, () => {
          animate(
            card,
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.7, delay: i * 0.15 }
          );
        });
      }
    });
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        style={{
          backgroundImage: `url(${hero1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[520px] w-full"
      >
        <div className="w-[30%] pl-16 pt-20 text-white">
          <p
            ref={(el) => (textRefs.current[0] = el)}
            className="text-lg text-[#2DFF28] opacity-0 translate-y-[30px]"
          >
            Swift Recharge
          </p>
          <h1
            ref={(el) => (textRefs.current[1] = el)}
            className="font-bold text-5xl opacity-0 translate-y-[30px]"
          >
            3-Hour
          </h1>
          <h1
            ref={(el) => (textRefs.current[2] = el)}
            className="font-bold text-5xl opacity-0 translate-y-[30px]"
          >
            Rapid Charging
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-between p-6">
        {cardData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="w-[25%] p-5 border-l-2 border-gray-400 opacity-0 translate-y-[30px] text-white"
          >
            <h1 className="font-bold text-2xl text-gray-200">{item.title}</h1>
            <p className="text-gray-400 py-3">{item.text}</p>
            <span className="font-bold text-5xl hover:text-[#2DFF28] transition-all duration-300 cursor-pointer">
              {item.number}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default AdvanceProduct;
