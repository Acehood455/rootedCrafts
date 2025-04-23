import {motion} from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ date, title, icon, achievements }) => {
  return (
    <motion.div
    variants={fadeIn('right', 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0}}
    className="mb-10 border-2 border-amber border-dashed rounded-2xl mt-12 p-4 w-full md:min-h-[800px]"
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="text-3xl text-amber">{icon}</span>
        
        <div>
          <p className="text-teal font-bold text-xl">{title}</p>
          <p className="text-sm text-amber">{date}</p>
        </div>
      </div>

      <ul className="list-disc pl-8 text-ivory space-y-1">
        {achievements.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};


export default SingleExperience;
