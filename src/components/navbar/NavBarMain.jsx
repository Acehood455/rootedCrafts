import React, { useState } from "react";
import NavBarLinks from "./NavBarLinks";
import NavBarLogo from "./NavBarLogo";
import NavBarBtn from "./NavBarBtn";
import { RiMenuAddLine } from "react-icons/ri";

const NavBarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    
    
  return (
    <nav className="max-w-[1300px] mx-auto px-1 sm:px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
        <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-obsidian items-center p-2 rounded-r-full rounded-l-full border-[0.5px] border-amber">
            <NavBarLogo />

            <div className={`${menuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 `}>
                <NavBarLinks setMenuOpen={setMenuOpen}  />
            </div>

            <div className="flex items-center gap-4 ml-auto">
                <NavBarBtn />
                <button className="text-xl sm:text-2xl p-1 sm:p-3 sm:border-[0.5px] sm:border-amber rounded-full text-ivory lg:hidden"
                onClick={toggleMenu}>
                    <RiMenuAddLine />   
                </button>
            </div>
        </div>

    </nav>
  );
};

export default NavBarMain;
