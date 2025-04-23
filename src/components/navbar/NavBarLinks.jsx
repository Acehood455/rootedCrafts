import React from "react";
import { Link } from "react-scroll";

const links = [
    { link: "Story", section: "about" },
    { link: "Craft", section: "skills" },
    { link: "Journey", section: "experience" },
    { link: "Works", section: "projects" },
    { link: "Connect", section: "contact" },
  ]; 

const NavBarLinks = ({ setMenuOpen  }) => {
  return (
  <ul className="flex gap-6 text-ivory font-bold text-center py-4 
    lg:flex-row flex-col lg:relative absolute top-[110%] left-[50%] 
    -translate-x-[50%] lg:text-md text-xl bg-deepTeal/80
    lg:bg-obsidian w-full transition-all duration-500 z-50 ">
    {
        links.map((link, index) => {
            return (
            <li key={index} 
                className="group"
                smooth={true}
                spy={true}
                duration={500}
                offset={-130}
              >
                <Link onClick={() => setMenuOpen(false)} to={link.link.toLowerCase()} className="cursor-pointer text-ivory hover:text-teal transition-all duration-500">
                    {link.link}
                    <div className="mx-auto cursor-pointer bg-teal w-0 group-hover:w-full h-[1px] transition-all duration-500" />
                </Link>
            </li>)
        })
    }
  </ul>
  );
};

export default NavBarLinks;
