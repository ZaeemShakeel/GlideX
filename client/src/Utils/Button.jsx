import React from "react";
import { motion } from "motion/react";

function Button({ title }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#2DFF28] p-3 z-10 px-8 rounded-full text-black font-medium hover:bg-black hover:text-[#2DFF28] hover:scale-110 transition-all duration-300"
    >
      {title}
    </motion.button>
  );
}

export default Button;
