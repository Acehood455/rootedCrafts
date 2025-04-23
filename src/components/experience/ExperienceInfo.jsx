const ExperienceInfo = ({ number, text, icon }) => {
    return (
      <div className="flex flex-col items-center text-center gap-2 w-[150px]">
        <div className="text-teal text-3xl">{icon}</div>
        <p className="text-2xl text-amber font-bold">{number}</p>
        <p className="text-ivory font-medium">{text}</p>
      </div>
    );
  };
  
  export default ExperienceInfo;
  