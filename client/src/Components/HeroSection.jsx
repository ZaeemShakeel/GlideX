import React from "react";
import hero1 from "../assets/hero1.png";
import { motion } from "motion/react";
import Button from "../Utils/Button";

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
      <div className="flex flex-col px-4 md:px-10 w-full md:w-1/2">
        <motion.div
          animate={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-24 md:mt-[280px]"
        >
          <motion.h1
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white text-center md:text-left"
          >
            Smooth Ride, Go Green With Our Certified E-vehicles.
          </motion.h1>

          <motion.p
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.3 }}
            className="pt-4 text-base sm:text-lg text-gray-300 text-center md:text-left"
          >
            Go green, Drive clean with our Eco Friendly certified electric
            scooters.
          </motion.p>

          <motion.div
            animate={{ scale: [0.8, 1], opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 pt-6"
          >
            <Button title="Shop Now!" />
            <Button title="Read more" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
