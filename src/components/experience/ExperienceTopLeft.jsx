import React from "react";
import ExperienceInfo from "./ExperienceInfo";
import { FaStore, FaSmile, FaStar, FaGlobe } from "react-icons/fa";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-4 w-[300px]">
      <p className="text-amber font-bold uppercase text-3xl font-special text-center">
        Started in 2018
      </p>

      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1st" text="community market" icon={<FaStore />} />
        <ExperienceInfo number="100+" text="happy customers" icon={<FaSmile />} />
      </div>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="10+" text="features in local events and blogs" icon={<FaStar />} />
        <ExperienceInfo number="2020" text="opened an online store" icon={<FaGlobe />} />
      </div>

      
    </div>
  );
};

export default ExperienceTopLeft;
