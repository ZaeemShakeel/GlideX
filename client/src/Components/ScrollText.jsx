import React from "react";

function ScrollText() {
  const content =
    "* Eco-Friendly * Fast Delivery * Long Battery * Smooth Ride * Certified Quality * Clean Energy Revolution";

  return (
    <div className="overflow-hidden whitespace-nowrap py-3">
      <div className="flex animate-scroll-loop">
        <span className="text-gray-400 font-bold text-5xl mr-10">
          {content}
        </span>
        <span className="text-gray-400 font-bold text-5xl mr-10">
          {content}
        </span>
      </div>
    </div>
  );
}

export default ScrollText;
