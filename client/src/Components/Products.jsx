import React, { useEffect, useRef } from "react";
import Product1 from "../assets/Products/Product1.jpg";
import Product2 from "../assets/Products/Product2.jpg";
import Product3 from "../assets/Products/Product3.jpg";
import Offer from "./Offer";
import { Style } from "./CSS/Style.js";
import { animate, inView } from "motion";

function Products() {
  const cardRefs = useRef([]);
  const titleRef = useRef(null);
  const paraRef = useRef(null);

  const proData = [
    {
      Image: Product1,
      title: "VeloWave M5",
      text: "Urban Commuting Evolution",
      details: [
        { icon: "fa-regular fa-clock", title: "Duration", text: "6.30 hrs" },
        { icon: "fa-solid fa-bolt", title: "Range", text: "126 km" },
        {
          icon: "fa-solid fa-battery-full",
          title: "Battery",
          text: "Full Charge",
        },
      ],
    },
    {
      Image: Product2,
      title: "Segway - Ninebot Z40X12",
      text: "Efficiency Meets Style",
      details: [
        { icon: "fa-regular fa-clock", title: "Duration", text: "5 hrs" },
        { icon: "fa-solid fa-bolt", title: "Range", text: "90 km" },
        { icon: "fa-solid fa-battery-full", title: "Battery", text: "75%" },
      ],
    },
    {
      Image: Product3,
      title: "Electric Scooter",
      text: "Charging Convenience Included",
      details: [
        { icon: "fa-regular fa-clock", title: "Duration", text: "7 hrs" },
        { icon: "fa-solid fa-bolt", title: "Range", text: "100 km" },
        { icon: "fa-solid fa-battery-full", title: "Battery", text: "Full" },
      ],
    },
  ];

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = 0;
      titleRef.current.style.transform = "translateY(40px)";
      inView(titleRef.current, () => {
        animate(
          titleRef.current,
          { opacity: [0, 1], y: [40, 0] },
          { duration: 0.7 }
        );
      });
    }

    if (paraRef.current) {
      paraRef.current.style.opacity = 0;
      paraRef.current.style.transform = "translateY(40px)";
      inView(paraRef.current, () => {
        animate(
          paraRef.current,
          { opacity: [0, 1], y: [40, 0] },
          { duration: 0.7, delay: 0.3 }
        );
      });
    }

    cardRefs.current.forEach((card, i) => {
      if (card) {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        inView(card, () => {
          animate(
            card,
            { opacity: [0, 1], y: [50, 0] },
            { duration: 0.8, delay: i * 0.15 }
          );
        });
      }
    });
  }, []);

  return (
    <>
      <div className="bg-[#1B1B1B] py-16">
        <h1 ref={titleRef} className={Style.title}>
          Explore our best collections
        </h1>
        <p
          ref={paraRef}
          className="text-lg text-gray-400 text-center pt-6 max-w-3xl mx-auto"
        >
          With electric power shaping the future of the globe, explore our most
          reliable products now.
        </p>
      </div>

      <div className="flex justify-evenly items-start gap-3 flex-wrap px-4">
        {proData.map((product, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="w-[28%] min-w-[280px] bg-[#252525] overflow-hidden rounded-sm"
          >
            <img src={product.Image} alt="Product" className="w-full" />
            <h2 className="font-bold text-2xl pt-2 pl-3 text-white">
              {product.title}
            </h2>
            <p className="text-gray-400 py-2 pl-3">{product.text}</p>

            <div className="flex gap-4 px-3 py-4">
              {product.details.map((detail, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <i className={`${detail.icon} text-2xl text-[#2DFF28]`}></i>
                  <div className="text-white">
                    <span className="block font-semibold text-sm">
                      {detail.title}
                    </span>
                    <span className="block text-xs text-gray-400">
                      {detail.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Offer />
    </>
  );
}

export default Products;
