import React, { useRef, useEffect } from "react";
import { animate, inView } from "motion";
import { Style } from "./CSS/Style";
import Img1 from "../assets/scooter.jpg";
import Img2 from "../assets/scooter2.jpg";
import Img3 from "../assets/scooter3.jpg";

function Scooter() {
  const imgData = [
    {
      Image: Img1,
      author: "Zaeem Shakeel",
      title: "Buying an Electric Scooter",
    },
    {
      Image: Img2,
      author: "Zaeem Shakeel",
      title: "Electric scooters for all ages",
    },
    {
      Image: Img3,
      author: "Zaeem Shakeel",
      title: "Must have Accessories",
    },
  ];

  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (titleRef.current) {
      animate(
        titleRef.current,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.6 }
      );
    }
    if (paraRef.current) {
      animate(
        paraRef.current,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.6, delay: 0.15 }
      );
    }

    cardRefs.current.forEach((card, idx) => {
      if (card) {
        inView(card, () => {
          animate(
            card,
            { opacity: [0, 1], y: [50, 0] },
            { duration: 0.6, delay: idx * 0.2 }
          );
        });
      }
    });
  }, []);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-10">
      <h1
        ref={titleRef}
        className={`${Style.title} text-2xl sm:text-3xl md:text-4xl text-center mb-2`}
        style={{ opacity: 0, transform: "translateY(30px)" }}
      >
        Scooter Excellence: Futuristic Insights
      </h1>
      <p
        ref={paraRef}
        className={`${Style.para} text-center max-w-3xl mx-auto text-base sm:text-lg text-gray-400`}
        style={{ opacity: 0, transform: "translateY(30px)" }}
      >
        Stay updated with the latest kick back scooter trends, news, and
        insights in our trendy blog section.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {imgData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="rounded-md p-4 opacity-0 bg-[#1e1e1e] hover:shadow-xl transition-all duration-300"
            style={{ transform: "translateY(50px)" }}
          >
            <img
              src={item.Image}
              alt="blogImage"
              className="rounded-md w-full h-56 object-cover"
            />
            <p className="font-bold py-2 text-sm text-white">
              Author:{" "}
              <span className="font-normal text-gray-400">{item.author}</span>
            </p>
            <h2 className="font-bold text-xl sm:text-2xl text-white">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scooter;
