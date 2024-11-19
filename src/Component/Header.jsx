import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider1 from "../Component/ImageSlider.jsx";
import "../../src/index.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Smooth and longer animation
      easing: 'ease-in-out-cubic', // Smooth easing for 3D effect
      once: true, // Animation triggers once
    });
  }, []);

  return (
    <>
      <div
        className="header-background font-comic flex flex-col overflow-hidden pt-20 items-center justify-center phone:text-center bg-cover bg-center"
        id="home"
      >
        {/* 3D Animated Heading */}
        <div className="w-full flex flex-row justify-evenly">
          {['D', 'O', 'O', 'G', 'S', ' ', 'C', 'O', 'I', 'N', '!'].map((char, index) => (
            <span
              key={index}
              className="text-gradient md:font-bold text-5xl sm:text-7xl md:text-8xl tracking-wider sm:tracking-widest relative transform-gpu"
              style={{
                textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)', // Adding 3D shadow effect
              }}
              data-aos="zoom-in"
              data-aos-delay={`${200 + index * 100}`}
              data-aos-anchor-placement="top-center"
            >
              {char}
              {/* Up and Down Animation */}
              <span
                className="absolute inset-0 animate-bounce-custom"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            </span>
          ))}
        </div>

        {/* Subheading Animation */}
        <div
          className="w-full flex flex-col items-center justify-center text-center px-4 pt-10 sm:px-2"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="text-2xl max-w-[70%] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-[90%] sm:max-w-[70%] -tracking-tighter leading-tight">
            Join the DOOGS Revolution - Where <br className="hidden md:inline" /> Memes Meet
            the Blockchain!
          </p>
        </div>

        {/* Slider Animation */}
        <div
          className="flex flex-row items-center justify-around w-full px-8 sm:px-4"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Slider1 />
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="flex flex-col items-center justify-center text-center shadow-inner-custom-head"
        data-aos="zoom-in"
        data-aos-delay="1000"
      >
        <div className="font-light leading-relaxed -tracking-tighter border-2 w-full py-3 text-gradient">
          <h1 className="text-2xl sm:text-4xl md:text-5xl">GET STRONG WITH DOOGS</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
