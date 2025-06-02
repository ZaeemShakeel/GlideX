import React, { useEffect, useRef } from "react";
import { Style } from "../Components/CSS/Style.js";
import { animate, inView } from "motion";

function AboutRoad() {
  const containerRef = useRef(null);
  const bigTextRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      inView(containerRef.current, () => {
        animate(
          containerRef.current,
          { opacity: [0, 1], y: [40, 0] },
          { duration: 0.6 }
        );
        animate(bigTextRef.current, { opacity: [0, 0.3] }, { duration: 0.8 });
        animate(
          titleRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: 0.2 }
        );
        animate(
          paraRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: 0.4 }
        );
        animate(
          buttonRef.current,
          { opacity: [0, 1], y: [30, 0] },
          { duration: 0.6, delay: 0.6 }
        );
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col justify-between items-center gap-5 w-[70%] m-auto py-24 opacity-0"
    >
      <h1
        ref={bigTextRef}
        className="text-8xl font-bold text-center text-gray-700 text-opacity-30 absolute top-10 italic opacity-0"
      >
        ROAD
      </h1>
      <h1
        ref={titleRef}
        className="text-5xl font-bold text-center z-10 opacity-0 translate-y-[30px]"
      >
        About Road
      </h1>
      <p
        ref={paraRef}
        className="text-lg text-gray-400 text-center opacity-0 translate-y-[30px]"
      >
        Rev up the green revolution and join the Road family! Having over a
        decade of expertise in producing top-notch electric vehicles worldwide.
        Our quality-assured electric vehicles boast impressive CC power,
        ensuring a smooth and exhilarating ride every time. Best of all, our
        prices are affordable, making sustainable transportation accessible to
        all eco-warriors. Take a stand against global warming and start your
        journey with Road today! Read more
      </p>
      <button
        ref={buttonRef}
        className="bg-[#2DFF28] w-[25%] p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300 opacity-0 translate-y-[30px]"
      >
        Read more
      </button>
    </div>
  );
}

export default AboutRoad;
