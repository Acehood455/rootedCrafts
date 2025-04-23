import React from "react";

const AboutMeText = () => {
  return <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center ">
    <h1 className="text-6xl text-teal mb-10  ">Our Story</h1>
    <p className="text-ivory"> 
        Rooted in tradition, grown with intention. we are artists who find meaning in the small things — the feel of natural fibers, the rhythm of hand tools, the beauty of imperfections. <span className="font-logo text-teal">RootedCrafts.</span> is our space to share soulful creations that carry stories, not just style.
        Every piece we make is a conversation — between material and maker, between past and present. Whether it's hand-carved, stitched, woven, or painted, it's made with care and meant to last. <span className="font-logo text-teal">RootedCrafts.</span> is where tradition meets intention. we create handcrafted pieces with soul — each one unique, purposeful, and made to be cherished.
    </p>
    <button className="border border-amber rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-amber transition-all duration-500 cursor-pointer md:self-start sm:self-center text-ivory hover:text-teal ">
        Our Works
    </button>
  </div>;
};

export default AboutMeText;
