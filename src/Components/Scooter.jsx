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
    <div className="py-20">
      <h1
        ref={titleRef}
        className={Style.title}
        style={{ opacity: 0, transform: "translateY(30px)" }}
      >
        Scooter Excellence: Futuristic Insights
      </h1>
      <p
        ref={paraRef}
        className={Style.para}
        style={{ opacity: 0, transform: "translateY(30px)" }}
      >
        Stay updated with the latest kick back scooter trends, news, and
        insights in our trendy blog section.
      </p>

      <div className="flex items-center justify-between flex-wrap">
        {imgData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="w-[33%] rounded-md mt-10 p-4 opacity-0"
            style={{ transform: "translateY(50px)" }}
          >
            <img src={item.Image} alt="blogImage" className="rounded-md" />
            <p className="font-bold py-2">
              Author:{" "}
              <span className="font-normal text-gray-400">{item.author}</span>
            </p>
            <h2 className="font-bold text-2xl">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scooter;
