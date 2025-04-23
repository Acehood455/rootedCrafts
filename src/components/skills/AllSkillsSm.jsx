import { GiWoodenCrate, GiHammerNails, GiWrappedSweet, GiGreekTemple, GiRecycle } from 'react-icons/gi';
import { FaPaintBrush, FaPalette, FaHandsHelping } from 'react-icons/fa';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BsScissors } from 'react-icons/bs';
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

const AllSkillsSm = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 '>
        {skills.map((skill, i) => {
            return <motion.div 
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.7}}
                    key={i} className='flex flex-col items-center' 
                    >
                        <span className='text-7xl text-amber'>
                            {skill.icon}
                        </span>

                        <p className='text-center mt-4 text-ivory'>
                            {skill.label}
                        </p>
                   </motion.div>
        })}
    </div>
  );
};

export default AllSkillsSm;
