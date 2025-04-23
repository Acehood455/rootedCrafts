import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    // State to manage the form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [succes, setSuccess] =useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_5kxpzun', 'template_9wmlzv8', form.current, {
            publicKey: 'RJsSL249H6pIFfzLw',
          })
          .then(
            () => {
              setName('');
              setEmail('');
              setMessage('');
              setSuccess('Message Sent Successfully!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
  <div>
    <p className='text-teal'>{succes}</p>
    <form ref={form} onSubmit={sendEmail} action="" className="flex flex-col gap-4 text-deepTeal">
        <input name='name' value={name} onChange={handleName} type="text" placeholder="Your Name" required className="h-12 rounded-lg px-2" />
        <input name='from_email' value={email} onChange={handleEmail}  type="email" placeholder="Your Email" className="h-12 rounded-lg px-2" />
        <textarea name='message' value={message} onChange={handleMessage}  type="text" placeholder="Message" cols="30" rows="10" required className="rounded-lg p-2"></textarea>
        <button type="submit" className="w-full rounded-lg border border-amber text-ivory font-bold text-xl h-12 hover:bg-burntAmber bg-amber transition-all duration-500">
            Send
        </button>
    </form>
  </div>);
};

export default ContactForm;
