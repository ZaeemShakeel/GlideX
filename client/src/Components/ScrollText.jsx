import React from "react";

function ScrollText() {
  const content =
    "* Eco-Friendly * Fast Delivery * Long Battery * Smooth Ride * Certified Quality * Clean Energy Revolution";

  return (
    <div className="overflow-hidden whitespace-nowrap py-3 bg-black">
      <div className="flex animate-scroll-loop">
        <span className="text-white font-bold text-xl sm:text-2xl md:text-4xl mr-10">
          {content}
        </span>
        <span className="text-white font-bold text-xl sm:text-2xl md:text-4xl mr-10">
          {content}
        </span>
      </div>
    </div>
  );
}

export default ScrollText;
