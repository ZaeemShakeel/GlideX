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
      {/* Header */}
      <div className="bg-[#1B1B1B] py-16 px-4 text-center">
        <h1
          ref={titleRef}
          className={`${Style.title} text-3xl sm:text-4xl md:text-5xl`}
        >
          Explore our best collections
        </h1>
        <p
          ref={paraRef}
          className="text-base sm:text-lg text-gray-400 pt-6 max-w-3xl mx-auto"
        >
          With electric power shaping the future of the globe, explore our most
          reliable products now.
        </p>
      </div>

      {/* Products */}
      <div className="flex flex-wrap justify-center gap-6 px-4 sm:px-6 md:px-10 pb-16">
        {proData.map((product, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="w-full sm:w-[48%] lg:w-[30%] bg-[#252525] rounded-sm overflow-hidden"
          >
            <img src={product.Image} alt="Product" className="w-full h-auto" />
            <div className="p-4">
              <h2 className="font-bold text-xl md:text-2xl text-white">
                {product.title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 py-2">
                {product.text}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {product.details.map((detail, i) => (
                  <div key={i} className="flex items-center space-x-2 w-[48%]">
                    <i className={`${detail.icon} text-xl text-[#2DFF28]`}></i>
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
          </div>
        ))}
      </div>

      {/* Offer Section */}
      <Offer />
    </>
  );
}

export default Products;
