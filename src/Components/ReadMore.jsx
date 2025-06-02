import React, { useEffect, useRef } from "react";
import banner from "../assets/RM.jpg";
import { Style } from "../Components/CSS/Style.js";
import { animate, inView } from "motion";

function ReadMore() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      inView(containerRef.current, () => {
        // Animate the whole card container (fade in + slide from left)
        animate(
          containerRef.current,
          { opacity: [0, 1], x: [-50, 0] },
          {
            duration: 0.6,
            easing: "ease-out",
            // When container animation completes, animate inner elements
            onComplete: () => {
              animate(
                titleRef.current,
                { opacity: [0, 1], y: [30, 0] },
                { duration: 0.5 }
              );
              animate(
                paraRef.current,
                { opacity: [0, 1], y: [30, 0] },
                { duration: 0.5, delay: 0.15 }
              );
              animate(
                buttonRef.current,
                { opacity: [0, 1], y: [30, 0] },
                { duration: 0.5, delay: 0.3 }
              );
            },
          }
        );
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[400px] flex flex-col items-center justify-center opacity-0 mt-10"
    >
      <h1
        ref={titleRef}
        className={`${Style.title} opacity-0 translate-y-[30px]`}
      >
        Glow your ride with energetic E-scooters
      </h1>
      <p ref={paraRef} className={`${Style.para} opacity-0 translate-y-[30px]`}>
        Empower your ride with strong Electric bikes from us
      </p>
      <button
        ref={buttonRef}
        className="bg-white p-3 px-8 rounded-full mt-4 text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300 opacity-0 translate-y-[30px]"
      >
        Read more
      </button>
    </div>
  );
}

export default ReadMore;
