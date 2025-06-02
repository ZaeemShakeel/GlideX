import React, { useEffect, useRef } from "react";
import Image from "../assets/Products/QuantumGlide.jpg";
import { animate, inView } from "motion";

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
        // Animate image sliding in from left
        animate(
          imageRef.current,
          { opacity: [0, 1], x: [-100, 0] },
          { duration: 0.7 }
        );

        // Animate container sliding in from right
        animate(
          containerRef.current,
          { opacity: [0, 1], x: [100, 0] },
          { duration: 0.7 }
        );

        // Animate each item inside with staggered delay and fade + slide up
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

  // Initial hidden + translated styles inline or via Tailwind classes
  // Here I use inline styles for clarity, but you can add Tailwind classes too.

  return (
    <div className="flex items-center justify-center gap-5 p-10">
      <img
        ref={imageRef}
        src={Image}
        alt="e-scooter"
        className="w-1/2"
        style={{ opacity: 0, transform: "translateX(-100px)" }}
      />
      <div
        ref={containerRef}
        className="flex flex-col justify-between h-screen p-20 bg-[#242424]"
        style={{ opacity: 0, transform: "translateX(100px)" }}
      >
        <h1
          ref={titleRef}
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="font-bold text-5xl"
        >
          QuantumGlide Z3
        </h1>
        <p
          ref={subtitleRef}
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="text-lg text-gray-400"
        >
          Effortless City Adventures
        </p>
        <p
          ref={priceRef}
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="font-bold text-3xl"
        >
          €447,95 EUR
        </p>
        <p ref={taxRef} style={{ opacity: 0, transform: "translateY(30px)" }}>
          Tax included.
        </p>
        <hr />
        <div></div>
        <p
          ref={powerRef}
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="text-lg text-gray-400"
        >
          Power: <span className="font-bold text-white">350W</span>
        </p>
        <div
          ref={powerButtonsRef}
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <button className="border-2 border-white rounded-lg p-2 bg-black hover:border-green-500 transition-all duration-200 hover:scale-105 mx-4">
            350W
          </button>
          <button className="border-2 border-white rounded-lg p-2 bg-black hover:border-green-500 transition-all duration-200 hover:scale-105">
            550W
          </button>
        </div>

        <p
          ref={colorRef}
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="text-lg text-gray-400"
        >
          Color: <span className="font-bold text-white">Green</span>
        </p>
        <div
          ref={colorCirclesRef}
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="flex items-center justify-start gap-2 p-2"
        >
          <div className="w-10 h-10 bg-green-500 rounded-full hover:border-4 hover:border-white hover:scale-105 transition-all duration-300 cursor-pointer"></div>
          <div className="w-10 h-10 bg-white rounded-full hover:border-4 hover:border-green-500 hover:scale-105 transition-all duration-300 cursor-pointer"></div>
        </div>
        <div
          ref={actionButtonsRef}
          style={{ opacity: 0, transform: "translateY(30px)" }}
          className="flex justify-start items-center gap-2 pt-5 pl-4"
        >
          <button className="bg-[#2DFF28] p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300">
            Add to cart
          </button>
          <button className="bg-white p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuantumGlide;
