import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import howimg from '../assets/images/howtobuy/ball.png';

import str1img from "../assets/images/startegic/bscscan.png"
import str2img from "../assets/images/startegic/metamask.png"
import str3img from "../assets/images/startegic/trustwallet.png"
import str4img from "../assets/images/startegic/pancakeswap.png"

const steps = [
  'Download Metamask or your wallet of choice from the app store or Google Play store for free. Desktop users, download the Google Chrome extension by going to metamask.io.',
  'Have BNB in your wallet to switch to $Doogs coin. If you don’t have any BNB, you can buy directly on MetaMask, transfer from another wallet.',
  'Connect your wallet to the platform of choice. Go to the exchange and connect your wallet.',
  'Swap BNB for $Doogs on the selected exchange and confirm the transaction in your wallet.',
];

const Howtobuy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div
      className="flex flex-col px-6 py-16 md:px-10 lg:px-20 xl:px-32" id='howtobuy'
      style={{
        background:
          'linear-gradient(155deg, rgba(255,255,255,1) 0%, rgba(255,92,4,0.5055557379201681) 34%, rgba(255,92,4,0.5) 67%, rgba(255,214,192,0.5) 75%, rgba(255,255,255,1) 100%)',
      }}
    >
      {/* Title Section */}
      <div className="flex justify-center items-center mb-12" data-aos="fade-up">
        <h1 className="tracking-tight leading-snug text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center">
          HOW TO <span className="text-orange-500">BUY</span>
        </h1>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 md:px-8 lg:px-12 xl:px-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative py-12 px-6 md:py-16 md:px-10 lg:py-20 lg:px-12"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <img
              src={howimg}
              alt={`Step ${index + 1}`}
              className="absolute top-7 left-5 z-10 w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20"
            />
            <div className="htb-sec flex flex-col items-stretch bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              {/* Step Number with Animation */}
              <div
                className="flex justify-center z-0 items-center rounded-full text-black bg-white shadow-lg"
                style={{
                  width: '80px',
                  height: '80px',
                  boxShadow: 'rgb(6 6 6 / 20%) 0px 0px 11px inset',
                  border: '3px solid rgb(255, 127, 0)',
                }}
              >
                <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">{index + 1}</h1>
              </div>

              {/* Step Description */}
              <div className="text-center text-orange-600 mt-6">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl px-4 md:px-6 lg:px-8 xl:px-10">
                  {step}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center text-center py-5 px-4 md:px-20">
  {/* Heading */}
  <div className="tracking-tight leading-snug text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-center font-bold tracking-normal w-full mb-6">
    <h1>Strategic <span className='text-orange-500'> Partners </span> </h1>
  </div>

  {/* Image Section */}
  <div className="relative overflow-hidden w-full">
    <div
      className="flex items-stretch flex-wrap justify-around gap-0 animate-circle-scroll whitespace-nowrap"
      id="img-section"
    >
      {/* Partner Images */}
      <img
        src={str1img}
        alt="Strategic Partner 1"
        className="h-16 w-24 sm:h-24 sm:w-40 md:h-32 md:w-40 lg:h-40 lg:w-60 object-contain"
      />
      <img
        src={str2img}
        alt="Strategic Partner 2"
        className="h-16 w-24 sm:h-24 sm:w-40 md:h-32 md:w-40 lg:h-40 lg:w-60 object-contain"
      />
      <img
        src={str3img}
        alt="Strategic Partner 3"
        className="h-16 w-24 sm:h-24 sm:w-40 md:h-32 md:w-40 lg:h-40 lg:w-60 object-contain"
      />
      <img
        src={str4img}
        alt="Strategic Partner 4"
        className="h-16 w-24 sm:h-24 sm:w-40 md:h-32 md:w-40 lg:h-40 lg:w-60 object-contain"
      />

    </div>
  </div>
</div>


    </div>
  );
};

export default Howtobuy;
