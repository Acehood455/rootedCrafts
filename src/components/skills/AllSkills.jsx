import { GiWoodenCrate, GiHammerNails, GiWrappedSweet, GiGreekTemple, GiRecycle } from 'react-icons/gi';
import { FaPaintBrush, FaPalette, FaHandsHelping } from 'react-icons/fa';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BsScissors } from 'react-icons/bs';
import SingleSkill from './SingleSkill';
import {motion} from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { label: "Material Crafting", icon: <GiWoodenCrate /> },
  { label: "Tool Proficiency", icon: <GiHammerNails /> },
  { label: "Surface Finishing", icon: <FaPaintBrush /> },
  { label: "Pattern Making", icon: <BsScissors /> },
  { label: "Color Harmony", icon: <FaPalette /> },
  { label: "Hand Assembly", icon: <FaHandsHelping /> },
  { label: "Heritage Techniques", icon: <GiGreekTemple /> },
  { label: "Custom Work", icon: <HiOutlinePencilAlt /> },
  ]

const AllSkills = () => {
  return <div>
    <div className='flex items-center justify-center relative gap-2 max-w-[1300px] mx-auto '>
        {skills.map((skill, i) => {
                return (
                    <motion.div
                    variants={fadeIn('up', `0.${i}`)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.7}}
                    >
                      <SingleSkill key={i} text={skill.label} imgSvg={skill.icon} />
                    </motion.div>
                  )
        })}
    </div>
  </div>;
};

export default AllSkills;
