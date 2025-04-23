import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradient from "./HeroGradient";

const HeroMain = () => {
  return (
    <div className="pt-28 pb-16 pl-6">
        <div className="flex md:flex-row flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
            <HeroText />
            <HeroPic />
            <HeroGradient />
        </div>
    </div>
  );
};

export default HeroMain;
