import React from "react";

const links = [
    { link: "Story", section: "about" },
    { link: "Craft", section: "skills" },
    { link: "Journey", section: "experience" },
    { link: "Works", section: "projects" },
    { link: "Connect", section: "contact" },
  ]; 

const FooterMain = () => {
  return <div className="px-4">
    <div className="w-full h-[1px] bg-taupe mt-24 "></div>
    <div className="md:flex hidden justify-between mt-4 max-w-[1300px] mx-auto ">
        <p className="font-logo text-3xl text-taupe">RootedCrafts.</p>
        <ul className="flex gap-4 text-taupe text-xl">
            {links.map((link, i) => {
                return <li key={i} >
                    <a href='#' className="hover:text-ivory transition-all duration-500 cursor-pointer">{link.link}</a>
                </li>
            })}
        </ul>
    </div>
    <p className="max-w-[1300px] mx-auto text-right mt-2 mb-12 text-sm text-sand ">
        &copy; {new Date().getFullYear()} Built with 💡 & ☕ by Ace Taiwo
    </p>
  </div>;
};

export default FooterMain;
