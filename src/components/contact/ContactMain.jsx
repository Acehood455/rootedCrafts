import React from "react";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const ContactMain = () => {
  return <div id="connect" className="max-w-[1300px] mx-auto items-center justify-center mt-[100px] px-4 pt-24 ">
    <h2 className='text-6xl text-teal mb-10 text-center'>Connect With Us</h2>
    
    <div className="flex justify-between gap-24 bg-sand p-8 rounded-2xl lg:flex-row flex-col ">
        <ContactLeft />
        <ContactRight />
    </div>
  </div>;
};

export default ContactMain;
