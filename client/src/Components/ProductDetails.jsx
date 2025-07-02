import React, { useEffect, useRef } from "react";
import Image from "../assets/midBanner.jpg";
import { animate, inView, stagger } from "motion";
import Button from "../Utils/Button";

function ProductDetails() {
  const containerRef = useRef(null);
  const statsRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Animate entire section
    inView(containerRef.current, () => {
      animate(
        containerRef.current,
        { opacity: [0, 1], y: [50, 0] },
        { duration: 1, easing: "ease-out" }
      );
    });

    // Animate stat items staggered
    inView(statsRef.current, () => {
      animate(
        statsRef.current.querySelectorAll(".stat-item"),
        { opacity: [0, 1], y: [30, 0] },
        { delay: stagger(0.2), duration: 0.8, easing: "ease-out" }
      );
    });

    // Animate buttons
    inView(buttonsRef.current, () => {
      animate(
        buttonsRef.current,
        { scale: [0.9, 1], opacity: [0, 1] },
        { duration: 0.8 }
      );
    });
  }, []);

  const statsData = [
    { title: "60mph", text: "4-Speed Mode" },
    { title: "120mi", text: "Km Range" },
    { title: "440lbs", text: "Frame Weight" },
    { title: "24kw", text: "Per Charge" },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#1B1B1B] py-16 px-4 sm:px-6 lg:px-10 opacity-0 translate-y-[50px]"
    >
      <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl text-center">
        Spark Your Ride With Electric Power
      </h1>

      <p className="text-base sm:text-lg text-gray-400 text-center py-4 max-w-3xl mx-auto">
        With electric power shaping the future of the globe, explore our most
        reliable products now.
      </p>

      <img src={Image} alt="banner" className="w-full max-w-6xl mx-auto pt-4" />

      <div
        ref={statsRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 w-full max-w-6xl mx-auto"
      >
        {statsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between opacity-0 translate-y-[30px] stat-item"
          >
            <h1 className="font-bold text-3xl sm:text-4xl text-white">
              {item.title}
            </h1>
            <p className="pt-2 text-gray-300 text-sm sm:text-base">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <p className="text-gray-400 text-base sm:text-lg text-center max-w-2xl mx-auto pt-6">
        Are you ready to take your ride to new heights? Say goodbye to noisy
        engines. Explore the future of transportation with our awe-inspiring
        electric vehicle.
      </p>

      <div
        ref={buttonsRef}
        className="flex flex-col sm:flex-row justify-center items-center pt-10 gap-4 relative opacity-0 scale-[0.9]"
      >
        <Button title="Buy Now!" />
        <button className="bg-white p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300 z-10">
          View Shop
        </button>
        <hr className="hidden sm:block text-gray-200 h-[1px] w-[90%] absolute top-[65px]" />
      </div>
    </div>
  );
}

export default ProductDetails;
