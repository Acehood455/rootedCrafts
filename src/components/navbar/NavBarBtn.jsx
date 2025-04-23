import React from "react";
import { BsBoxArrowInDownRight } from "react-icons/bs";

const NavBarBtn = () => {
  return (
        <button className="px-[3px] sm:px-4 py-[3px] sm:py-2 rounded-full text-xs sm:text-xl font-bold text-ivory border-teal border flex items-center gap-1 bg-gradient-to-r from-amber to-teal hover:border-amber hover:scale-110 transition-all duration-500 hover:shadow-tealShadow">
            Craft A Piece
            <div className="">
                <BsBoxArrowInDownRight />
            </div>
                
        </button>
    );
};

export default NavBarBtn;
