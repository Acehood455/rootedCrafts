import React from "react";
import ContactForm from "./ContactForm";

const ContactLeft = () => {
  return <div className="flex flex-col gap-8 w-full">
    <div>
        <h2 className="text-3xl text-amber mb-4">
            Get In Touch
        </h2>
        <p className="text-ivory">
            Feel free to get in touch with our community,
            <br /> we are just a few clicks away.

        </p>
    </div>
    <ContactForm />
  </div>;
};

export default ContactLeft;
