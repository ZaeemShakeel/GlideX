import React from "react";
import hero1 from "../assets/hero1.png";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `url(${hero1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen w-full"
    >
      <div className="flex flex-col pl-10 w-1/2">
        <motion.div
          animate={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-[280px]"
        >
          <motion.h1
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="font-bold text-5xl"
          >
            Smooth Ride, Go Green With Our Certified E-vehicles.
          </motion.h1>

          <motion.p
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.3 }}
            className="pt-4 text-lg text-gray-400"
          >
            Go green, Drive clean with our Eco Friendly certified electric
            scoters.
          </motion.p>

          <motion.div
            animate={{ scale: [0.8, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-start items-center gap-5 w-1/2 pt-5"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2DFF28] p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300"
            >
              Shop Now!
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-3 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300"
            >
              Read more
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
