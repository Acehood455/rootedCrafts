import React from "react";
import {motion} from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
        <motion.h2 
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0}}
        className="lg:text-2xl md:text-xl uppercase text-teal"
        >
          Crafted by Hand, Rooted in Heart
        </motion.h2>

        <motion.h1 
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0}}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-amber "
        >
          Where Stories Are Woven Into Every Creation
        </motion.h1>

        <motion.p 
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0}}
        className="text-xl mt-4 text-ivory"
        >
          Unique handmade creations tailored to your story. Made with care, for keeps.
        </motion.p>
    </div>);
};

export default HeroText;
