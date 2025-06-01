import React from "react";
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

  return (
    <div className="py-20">
      <h1 className={Style.title}>Scooter Excellence: Futuristic Insights</h1>
      <p className={Style.para}>
        Stay updated with the latest kick back scooter trends, news, and
        insights in our trendy blog section.
      </p>

      <div className="flex items-center justify-between flex-wrap">
        {imgData.map((item, index) => (
          <div className="w-[33%] rounded-md mt-10 p-4">
            <img src={item.Image} alt="blogImage" className="" />
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
