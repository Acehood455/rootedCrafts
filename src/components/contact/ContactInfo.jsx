import { MdOutlinePhoneEnabled } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import SingleInfo from "./SingleInfo";


const ContactInfo = () => {
  return <div className='flex flex-col gap-4 text-burntAmber'>
    <a href="mailto:acetaiwo8@gmail.com">
      <SingleInfo  text='RootedCrafts@Contact.com' Image={MdOutlineAlternateEmail} />
    </a>
    <a href="tel:+2348136546116">
      <SingleInfo  text='+234 813 6546 116' Image={MdOutlinePhoneEnabled} />
    </a>
    <SingleInfo text='Nigeria' Image={TfiLocationPin} />
  </div>;
};

export default ContactInfo;
