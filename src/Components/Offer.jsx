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
    <div className="p-10">
      <div
        ref={offerRef}
        className="bg-[#252525] h-[150px] p-8 opacity-0 -translate-x-[100px]"
      >
        <h1 className="text-white font-bold text-5xl hover:text-[#2DFF28] transition-all duration-300 cursor-pointer hover:scale-y-100">
          Grab It Soon! Offer Ends
        </h1>
        <p className="text-lg text-gray-400 pt-2">
          Charge up your future with an electric vehicle at the best affordable
          price
        </p>
      </div>
    </div>
  );
}

export default Offer;
