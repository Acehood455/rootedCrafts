import React from "react";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import AllExperience from "./AllExperience";
import {motion} from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  return <div id="journey" className="max-w-[1300px] mx-auto px-4 pt-1">
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.7}}
    >
      <ExperienceText />
    </motion.div>

    <motion.div 
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
    >
      <ExperienceTop />
    </motion.div>

    <div className="w-full h-1 mt-4 bg-sand lg:block sm:hidden" />
    <AllExperience />
  </div>;
};

export default ExperienceMain;
