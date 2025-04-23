import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import {motion} from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({projects, index}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle click outside to close modal
    const closeModalOnOutsideClick = (e) => {
        if (e.target.classList.contains("modal-backdrop")) {
        setIsModalOpen(false);
        }
    };

    
  return (
  <div className={`flex w-full sm:flex-col-reverse items-center gap-8 
   ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse' } justify-end `} >
      <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0}}>
          <h2 className={`md:text-3xl sm:text-2xl text-center text-amber ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'} `}>
              {projects.title}
          </h2>
          <h2 className={`text-xl font-thin text-ivory font-special text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}>
              {projects.description}
          </h2>
      </motion.div>

      <motion.div 
       variants={fadeIn('up', 0.2)}
       initial="hidden"
       whileInView="show"
       viewport={{once: false, amount: 0}} 
       onClick={() => setIsModalOpen(true)}
       className="cursor-pointer max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-ivory">
          <div className="w-full h-full bg-teal opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block hidden"></div>
          <img src={projects.image} 
            alt="Project Image"
            className="w-full h-full " />
      </motion.div>

    {/* Modal */}
    {isModalOpen && (
        <div 
          onClick={closeModalOnOutsideClick} 
          className="modal-backdrop fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 ">

          <div className="relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-amber text-4xl hover:text-red-500 transition duration-300 z-10"
            >
              <IoCloseCircleOutline />
            </button>

            <img
              src={projects.image}
              alt="Full Project"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border border-amber"
            />
          </div>
        </div>
      )}
  </div>);
};

export default SingleProject;
