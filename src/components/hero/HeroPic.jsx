import React from "react";
import { GoCircle } from "react-icons/go";
import {motion} from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div 
    variants={fadeIn('left', 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0}}
    className="relative flex items-center justify-center w-full max-w-[500px]"
    >
      {/* Custom Hex Ping */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="animate-[hexPing_3s_ease-out_infinite] blur-md">
          <GoCircle className="text-teal h-[400px] w-auto" />
        </div>
      </div>

      {/* Main Hero Image */}
      <div className="bg-gradient-to-br from-espresso via-espresso to-[#3a2d2d] ring-4 ring-offset-4 ring-burntAmber  max-w-[300px] mx-auto p-32 mt-32 md:mt-20  rounded-full relative">
        <img
          src="./images/custom/heroSlide2.png"
          alt="hero_pic"
          className="w-full absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
        />
      </div>
    </motion.div>
  );
};

export default HeroPic;
