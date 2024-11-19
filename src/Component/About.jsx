import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutimg from "../assets/images/aboutus/aboutimg.png";
import "../../src/index.css";


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <div className="about-2" id='about'>
        <div
          className="flex flex-col md:flex-row justify-center align-middle py-4 md:py-10 md:px-1 tablet:py-10 tablet:px-2"
          id="about"
        >
          {/* Left Image Section */}
          <div
            className="flex justify-center w-full md:w-1/2 px-4 md:px-8"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={aboutimg}
              alt="About Image"
              className="w-full max-w-2xl h-auto transform scale-x-[-1]"
            />
          </div>

          {/* Right Text Section */}
          <div className="flex flex-col w-full md:w-1/2 justify-center items-start md:px-8 px-4 py-6 space-y-6">
            {/* Title */}
            <div
              className="md:text-left w-full text-center"
              data-aos="flip-up"
              data-aos-delay="300"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl non-italic font-bold tracking-tight leading-snug">
                ABOUT <span className="text-orange-600">US</span>
              </h1>
            </div>

            {/* Paragraphs */}
            <p
              className="text-base md:text-lg lg:text-xl xl:text-2xl md:text-left w-full text-center font-light tracking-wide leading-relaxed text-slate-500 xl:max-w-[70%]"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              DOOGS Coin is more than just a meme token; it’s a community-driven project designed to bring fun, engagement, and opportunity to crypto enthusiasts around the world. Built on the Binance Smart Chain (BEP-20), DOOGS Coin is inspired by the viral charm of PEPE and aims to create a sustainable ecosystem with rewards, staking, and community incentives.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
