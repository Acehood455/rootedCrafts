import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSm from "./AllSkillsSm";
import {motion} from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
  <div id="craft" className="">
    <div className="max-w-[1300px] px-4 mx-auto min-h-[600px] relative overflow-hidden ">
      <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.7}}
      >
        <SkillsText />
      </motion.div>

        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block hidden ">
            <AllSkills />
        </div>

        <div className="block lg:hidden">
            <AllSkillsSm />
        </div>
    </div>
  </div>);
};

export default SkillsMain;
