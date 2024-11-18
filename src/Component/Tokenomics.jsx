import React from 'react';
import token1 from "../assets/images/token/tokenomicsimg.png";
import token2 from "../assets/images/token/tokenimg2.png";
import token3 from "../assets/images/token/tokenimg3.png";

const Tokenomics = () => {
  return (
    <>
      <div
        className="token align-middle justify-center py-10 relative"
        style={{
          background:
            'linear-gradient(155deg, rgba(255,255,255,1) 0%, rgba(255,92,4,0.5055557379201681) 34%, rgba(255,92,4,0.5) 67%, rgba(255,214,192,0.5) 75%, rgba(255,255,255,1) 100%)',
        }}
      >
        <div className="w-16 h-8 bg-white rounded-b-full absolute top-0 left-1/2"></div>

        {/* Title */}
        <div className="flex text-center justify-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          <h1 className="tracking-tight leading-snug">
            Tokeno<span className="text-orange-500">mics</span>
          </h1>
        </div>

        {/* First Image Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center text-center px-2 md:px-10 gap-4">
          <div className="w-full sm:max-w-[70%] flex justify-center">
            <img src={token1} alt="Tokenomics Image 1" className="" />
          </div>
          <div className="w-full sm:max-w-[30%] flex justify-center">
            <img src={token2} alt="Tokenomics Image 2" className="" />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="token align-middle justify-center py-10">
  <div className="flex flex-col sm:flex-row  items-center justify-center text-center  gap-6">
    {/* H1 Section */}
    <div className="w-full md:w-1/2 flex align-middle justify-center text-center sm:px-10 md:px-0 lg:py-10 lg:px-10 px-4 md:px-3  " >
      <h1
        className="w-full text-white font-bold text-3xl  sm:text-3xl  sm:max-w-[100%] md:max-w-[100%] md:text-3xl lg:text-4xl xl:text-5xl leading-snug md:py-10 md:px-10 px-5 py-8  sm:bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: "url('./src/assets/images/token/tokensec.png')",
          minHeight: "150px", // Ensures proper height on small screens
        }}
      >
        No jokes, just DOOGS – the meme coin with bite!
      </h1>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
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
