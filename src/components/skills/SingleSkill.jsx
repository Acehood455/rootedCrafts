import React from "react";

const SingleSkill = ({ imgSvg, text }) => {
  return (
  <div className="hover:-translate-y-10 transition-all duration-500">
    <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-ivory text-teal h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-obsidian hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-amber ">
            {imgSvg}
        </div>

        <p className="flex flex-col text-ivory font-bold text-center">
            {text}
        </p>
    </div>

    <div className="h-[200px] w-[100px] bg-amber absolute top-[50px] -z-10 "></div>
  </div>
  );
};

export default SingleSkill;
