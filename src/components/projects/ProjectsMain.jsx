import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import {motion} from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const works = [
    {
      image: "/images/custom/project1.jpg",
      title: "Handwoven Wall Art",
      description: "A tapestry crafted from recycled yarn and natural dyes, featured in the Artisan Weekly 2023.",
    },
    {
      image: "/images/custom/project2.jpg",
      title: "Miniature Garden Kit",
      description: "A collaborative piece built with local clay artists and herbalists.",
    },
    {
      image: "/images/custom/project3.jpg",
      title: "Heritage-Inspired Tote",
      description: "Combining tradition and function, this piece used hand-block printing and organic cotton.",
    },
    {
        image: "/images/custom/project4.jpg",
        title: "Recycled Bottle Lanterns",
        description: "Upcycled glass bottles turned into vibrant, solar-powered lanterns for patios and cozy corners.",
      },
      {
        image: "/images/custom/project5.jpg",
        title: "Hand-Painted Grandparents Piece",
        description: "Intricately designed boxes perfect for keepsakes or gifting — each one painted with natural dyes.",
      },
      {
        image: "/images/custom/project6.jpg",
        title: "Botanical Fabric Totes",
        description: "Tote bags made of natural cotton, printed with hand-collected botanical impressions and patterns.",
      },
      {
        image: "/images/custom/project7.jpg",
        title: "Rural Artisan Collab: Thread Bangles",
        description: "Collaborative project with rural artisans to create colorful, thread-wrapped bangles using traditional techniques.",
      },
      {
        image: "/images/custom/project8.jpg",
        title: "Heritage-Inspired Wall Art",
        description: "A collection of framed artworks inspired by regional motifs and folk patterns, made with mixed media.",
      },
  ];

const ProjectsMain = () => {
  return (
  <div id="works" className="max-w-[1300px] mx-auto px-4 pt-1 ">
    <motion.div
    variants={fadeIn('up', 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0}}
    >
      <ProjectsText />
    </motion.div>
    <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12 ">
        {works.map((project, index) => {
            return <SingleProject key={index} index={index} projects={project} />;

        })}
    </div>
  </div>);
};

export default ProjectsMain;
