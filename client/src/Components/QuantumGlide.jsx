import React, { useEffect, useRef } from "react";
import Image from "../assets/Products/QuantumGlide.jpg";
import { animate, inView } from "motion";
import Button from "../Utils/Button";

function QuantumGlide() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const priceRef = useRef(null);
  const taxRef = useRef(null);
  const powerRef = useRef(null);
  const powerButtonsRef = useRef(null);
  const colorRef = useRef(null);
  const colorCirclesRef = useRef(null);
  const actionButtonsRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      inView(containerRef.current, () => {
        animate(
          imageRef.current,
          { opacity: [0, 1], x: [-100, 0] },
          { duration: 0.7 }
        );
        animate(
          containerRef.current,
          { opacity: [0, 1], x: [100, 0] },
          { duration: 0.7 }
        );

        animate(
          titleRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: 0.1 }
        );
        animate(
          subtitleRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: 0.2 }
        );
        animate(
          priceRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: 0.3 }
        );
        animate(
          taxRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: 0.4 }
        );
        animate(
          powerRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: 0.5 }
        );
        animate(
          powerButtonsRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: 0.6 }
        );
        animate(
          colorRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: 0.7 }
        );
        animate(
          colorCirclesRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: 0.8 }
        );
        animate(
          actionButtonsRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: 0.9 }
        );
      });
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 md:px-10 py-16">
      <img
        ref={imageRef}
        src={Image}
        alt="e-scooter"
        className="w-full lg:w-1/2 rounded-md"
        style={{ opacity: 0, transform: "translateX(-100px)" }}
      />
      <div
        ref={containerRef}
        className="w-full lg:w-1/2 bg-[#242424] p-6 sm:p-10 rounded-md flex flex-col gap-4"
        style={{ opacity: 0, transform: "translateX(100px)" }}
      >
        <h1
          ref={titleRef}
          className="font-bold text-3xl sm:text-4xl md:text-5xl text-white"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          QuantumGlide Z3
        </h1>
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg text-gray-400"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          Effortless City Adventures
        </p>
        <p
          ref={priceRef}
          className="font-bold text-2xl sm:text-3xl text-white"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          €447.95 EUR
        </p>
        <p
          ref={taxRef}
          className="text-sm text-gray-400"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          Tax included.
        </p>
        <hr className="border-gray-700 my-2" />

        <p
          ref={powerRef}
          className="text-base text-gray-400"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          Power: <span className="font-bold text-white">350W</span>
        </p>
        <div
          ref={powerButtonsRef}
          className="flex gap-4"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <button className="border-2 border-white rounded-lg px-4 py-2 bg-black text-white hover:border-[#2DFF28] transition-all duration-200 hover:scale-105">
            350W
          </button>
          <button className="border-2 border-white rounded-lg px-4 py-2 bg-black text-white hover:border-[#2DFF28] transition-all duration-200 hover:scale-105">
            550W
          </button>
        </div>

        <p
          ref={colorRef}
          className="text-base text-gray-400"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          Color: <span className="font-bold text-white">Green</span>
        </p>
        <div
          ref={colorCirclesRef}
          className="flex gap-3"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <div className="w-10 h-10 bg-green-500 rounded-full hover:ring-2 hover:ring-white hover:scale-105 transition-all duration-300 cursor-pointer"></div>
          <div className="w-10 h-10 bg-white rounded-full hover:ring-2 hover:ring-green-500 hover:scale-105 transition-all duration-300 cursor-pointer"></div>
        </div>

        <div
          ref={actionButtonsRef}
          className="flex flex-wrap gap-3 pt-4"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <Button title="Add to Cart" />
          <button className="bg-white text-black font-medium rounded-full px-6 py-3 hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuantumGlide;
