import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaGithubAlt, FaLinkedin, FaInstagramSquare, FaFacebookSquare, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-3 sm:px-2 py-4">
      <SingleContactSocial link="#" Icon={FaGithubAlt} />
      <SingleContactSocial link="#" Icon={FaLinkedin} />
      <SingleContactSocial link="#" Icon={FaInstagramSquare} />
      <SingleContactSocial link="#" Icon={FaFacebookSquare} />
      <SingleContactSocial link="#" Icon={FaSquareXTwitter} />
      <SingleContactSocial link="#" Icon={FaTelegramPlane} />
      <SingleContactSocial link="#" Icon={FaWhatsapp} />
    </div>
  );
};

export default ContactSocial;
