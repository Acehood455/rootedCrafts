import React from "react";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl h-12 w-12 sm:h-10 sm:w-10 border border-burntAmber text-amber 
                 rounded-full p-3 sm:p-2 flex items-center justify-center 
                 hover:bg-burntAmber hover:border-amber hover:text-black transition-all duration-300
                 shadow-md hover:shadow-lg cursor-pointer"
    >
      <Icon />
    </a>
  );
};

export default SingleContactSocial;
