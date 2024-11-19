import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contact1 from "../assets/images/contact/contact1.png";
import contact2 from "../assets/images/contact/contact2.png";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-10 py-10"
    >
      {/* Left Section */}
      <div
        className="w-full md:w-1/2 flex justify-center"
        data-aos="fade-right"
      >
        <img
          src={contact1}
          alt="Contact Image 1"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Right Section */}
      <div
        className="w-full md:w-1/2 flex flex-col items-center gap-6"
        data-aos="fade-left"
      >
        {/* Contract Address Section */}
        <div
          className="w-full bg-contain bg-no-repeat bg-center text-white py-6 px-6 sm:py-8 sm:px-12 text-center"
          style={{ backgroundImage: `url(${contact2})` }}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            CONTRACT ADDRESS
          </h1>
        </div>

        {/* Timeless Vibes Section */}
        <div className="relative">
          {/* Triangle */}
          <div
            className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-red-500"
          ></div>

          {/* Rotated Div with Pendulum Animation */}
          <motion.div
            initial={{ rotate: -10 }}
            animate={{
              rotate: [10, -10, 5, -5, 0], // Pendulum effect
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center py-6 px-4 sm:py-8 sm:px-12 border rounded-lg shadow-lg"
            style={{
              boxShadow: 'rgb(6 6 6 / 20%) 0px 0px 11px inset',
              border: '3px solid #ffffff',
            }}
          >
            <h1 className="font-semibold">Timeless Vibes, Endless Laughs!</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
