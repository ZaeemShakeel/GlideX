import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";

function Offer() {
  const offerRef = useRef(null);

  useEffect(() => {
    if (offerRef.current) {
      inView(offerRef.current, () => {
        animate(
          offerRef.current,
          { opacity: [0, 1], x: [-100, 0] },
          { duration: 0.8, easing: "ease-out" }
        );
      });
    }
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-10 py-10">
      <div
        ref={offerRef}
        className="bg-[#252525] opacity-0 -translate-x-[100px] p-6 sm:p-8 rounded-md"
      >
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl hover:text-[#2DFF28] transition-all duration-300 cursor-pointer">
          Grab It Soon! Offer Ends
        </h1>
        <p className="text-base sm:text-lg text-gray-400 pt-2">
          Charge up your future with an electric vehicle at the best affordable
          price.
        </p>
      </div>
    </div>
  );
}

export default Offer;
