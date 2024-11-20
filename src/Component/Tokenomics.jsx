import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import token1 from "../assets/images/token/tokenchart.webp";
import token2 from "../assets/images/token/tokenimg2.webp";
import token3 from "../assets/images/token/tokenimg3.webp";

const Tokenomics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in', // Animation easing
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <>
      <div
        className="token align-middle justify-center py-10 relative overflow-x-hidden" id='token'
        style={{
          background:
            'linear-gradient(155deg, rgba(255,255,255,1) 0%, rgba(255,92,4,0.5055557379201681) 34%, rgba(255,92,4,0.5) 67%, rgba(255,214,192,0.5) 75%, rgba(255,255,255,1) 100%)',
        }}
      >
        {/* Decorative Element */}
        <div className="w-16 h-8 bg-white rounded-b-full absolute top-0 left-[40%] sm:left-1/2"></div>

        {/* Title Section with Zoom-In Animation */}
        <div
          className="flex text-center justify-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
          data-aos="zoom-in"
        >
          <h1 className="tracking-tight leading-snug">
            Tokeno<span className="text-orange-500">mics</span>
          </h1>
        </div>

        {/* Image Section with Zoom-In Effects */}
        <div
          className="flex flex-col  sm:flex-row items-center justify-center text-center py-10  md:py-20 px-2 md:px-10 gap-10 "
          
        >
          <div className="w-full sm:max-w-[70%] px-10 flex justify-center">
            <img
              src={token1}
              alt="Tokenomics Image 1"
              className=""
              width={650}
              height={500}
            />
          </div>
          <div className="w-full sm:max-w-[30%]  flex justify-center">
            <img
              src={token2}
              alt="Tokenomics Image 2"
              className=""
            />
          </div>
        </div>
      </div>

      {/* Second Section with Staggered Zoom-In Animation */}
      <div className="token align-middle justify-center py-10 overflow-x-hidden ">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-6">
          {/* Text Section with Zoom-In Animation */}
          <div
            className="w-full md:w-1/2 flex align-middle justify-center text-center sm:px-10 md:px-10 lg:py-10 lg:px-10 px-4 md:px-3"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h1
              className="token-background w-full text-white font-bold text-3xl sm:text-3xl px-10 py-10  sm:py-10 sm:px-1  sm:text-[20px]   md:mx-8 md:my-8  sm:max-w-[100%] md:max-w-[100%] md:text-3xl lg:text-4xl xl:text-5xl leading-snug bg-contain sm:bg-cover bg-no-repeat bg-center"
              style={{
                minHeight: "150px", // Ensures proper height on small screens
                // md:py-10 md:px-10 px-5 py-8  md:mx-28 md:my-28
              }}
            >
              No jokes, just DOOGS – the meme coin with bite!
            </h1>
          </div>

          {/* Image Section with Zoom-In Animation */}
          <div
            className="w-full md:w-1/2 flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img
              src={token3}
              alt="Tokenomics Image 3"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
