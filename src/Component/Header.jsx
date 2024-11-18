import React from 'react';
import Slider1 from "../Component/ImageSlider.jsx";
import "../../src/index.css";

const Header = () => {
  return (
    <>
      <div 
        className="font-comic flex flex-col overflow-hidden pt-20 items-center justify-center phone:text-center bg-[url('./src/assets/images/headerbg.png')] bg-cover bg-center" 
        id="home"
      >
        {/* Animated Heading */}
        <div className="w-full flex flex-row justify-evenly  ">
  <span className="text-gradient md:font-bold  text-5xl sm:text-7xl md:text-8xl -tracking-wider sm:-tracking-widest    ">D</span>
  <span className="text-gradient md:font-bold  text-5xl sm:text-7xl md:text-8xl -tracking-wider sm:-tracking-widest    ">O</span>
  <span className="text-gradient md:font-bold  text-5xl sm:text-7xl md:text-8xl -tracking-wider sm:-tracking-widest    ">O</span>
  <span className="text-gradient md:font-bold  text-5xl sm:text-7xl md:text-8xl -tracking-wider sm:-tracking-widest    ">G</span>
  <span className="text-gradient md:font-bold  text-5xl sm:text-7xl md:text-8xl -tracking-wider sm:-tracking-widest    ">S</span>
  <span className="text-gradient md:font-bold  text-5xl sm:text-7xl md:text-8xl -tracking-wider sm:-tracking-widest    "> </span>
  <span className="text-gradient md:font-bold  text-5xl sm:text-7xl md:text-8xl -tracking-wider sm:-tracking-widest    ">C</span>
  <span className="text-gradient md:font-bold  text-5xl sm:text-7xl md:text-8xl -tracking-wider sm:-tracking-widest    ">O</span>
  <span className="text-gradient md:font-bold  text-5xl sm:text-7xl md:text-8xl -tracking-wider sm:-tracking-widest    ">I</span>
  <span className="text-gradient md:font-bold  text-5xl sm:text-7xl md:text-8xl -tracking-wider sm:-tracking-widest    ">N</span>
  <span className="text-gradient md:font-bold  text-5xl sm:text-7xl md:text-8xl -tracking-wider sm:-tracking-widest    ">!</span>
</div>


<div className="w-full flex flex-col items-center justify-center text-center px-4 pt-10 sm:px-2">
  <p className="text-2xl max-w-[70%]  sm:text-2xl  md:text-3xl  lg:text-4xl xl:text-5xl max-w-[90%] sm:max-w-[70%] -tracking-tighter leading-tight ">
    Join the DOOGS Revolution - Where <br className="hidden md:inline" /> Memes Meet the Blockchain!
  </p>
</div>



        {/* Uncomment if needed */}
        <div className="flex flex-row items-center justify-around w-full px-8 sm:px-4">
          <Slider1 />
        </div>
      </div>

      {/* Uncomment if needed */}
      <div 
        id="about" 
        className="flex flex-col items-center justify-center text-center shadow-inner-custom-head"
      >
        <div className=" font-light     leading-relaxed  -tracking-tighter  border-2 w-full py-3 text-gradient">
         <h1 className=' text-2xl  sm:text-4xl md:text-5xl  '> GET STRONG WITH DOOGS
         </h1>         </div>
      </div>
    </>
  );
};

export default Header;
