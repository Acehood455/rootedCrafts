import React from "react";
import SingleExperience from "./SingleExperience";
import { PiArrowBendDoubleUpRightThin } from "react-icons/pi";
import { PiArrowBendRightDownThin } from "react-icons/pi";
import { GiSmallFire, GiTreeRoots, GiWorld  } from "react-icons/gi";
import {motion} from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experience = [
    {
    date: '2018 - 2020',
    title: 'Humble Beginnings',
    icon: <GiSmallFire />,
    achievements: ['Participated in the local community market for the first time.',
                   'Sold handcrafted items like recycled decor, miniature boxes, and fabric accessories.',
                    'Built the first loyal customer base from neighbors and local artisans.',
                    'Started collaborating with nearby artisans to expand product variety.',
                    'Introduced seasonal collections and improved packaging aesthetics.',
                    'Featured in a local newsletter highlighting sustainable craftsmanship'
                ],
    },
    {
    date: '2021 - 2023',
    title: 'Rooting Deeper',
    icon: <GiTreeRoots />,
    achievements: ['Grew to over 100 happy customers, many of them returning.',
                    'Started using eco-friendly materials in more than 70% of products.',
                    'Hosted a stall at the annual Local Makers Fair.',
                    'Received a craftsmanship award from a regional cultural event.',
                    'Featured in 3 local blogs and artisan showcases.',
                    'Introduced custom order options and gift packaging.'
                ]
    },
    {
    date: '2024 - Present',
    title: 'Expansion & Events',
    icon: <GiWorld />,
    achievements: ['Partnered with two local NGOs to train women in rural areas on basic crafting.',
                    'Started shipping nationally via curated bundles.',
                    'Participated in monthly art & craft pop-ups in major cities.',
                    'Rebranded with a new logo and design language.',
                    'Launched a limited series of heritage-inspired crafts.',
                    'Planning an international collaboration with a slow fashion brand.'
                ]
    },
    
]
const AllExperience = () => {
  return <div className="flex md:flex-row sm:flex-col items-center justify-between">
    {experience.map((exp, index) => {
        return <>
          <SingleExperience 
            key={index} 
            date={exp.date}
            title={exp.title}
            icon={exp.icon}
            achievements={exp.achievements} 
            />
          {index < 2 ? (
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{once: false, amount: 0}}
              className="flex justify-center"
            >
                <PiArrowBendDoubleUpRightThin className="text-6xl text-amber md:block hidden" />
                <PiArrowBendRightDownThin className="text-6xl text-amber md:hidden block" />
            </motion.div>) : ('')}
        </>
    })}
  </div>;
};

export default AllExperience;
