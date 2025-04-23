import React from "react";

const NavBarLogo = () => {
  return <div>
    <h1 className="text-teal text-2xl font-logo font-bold hidden md:block pl-4">
        <a href="#">RootedCrafts.</a>
    </h1>
    <h1 className="text-teal text-xl sm:text-2xl font-logo font-extrabold block md:hidden">
        RC.
    </h1>
  </div>;
};

export default NavBarLogo;
