

import token1 from "../assets/images/token/tokenchart.webp";
import token2 from "../assets/images/token/tokenimg2.webp";
import token3 from "../assets/images/token/dogsplit.png";

const Tokenomics = () => {
 

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
      <div className="token py-10  overflow-x-hidden">
  <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-8">
    {/* Image Section */}
    <div className="w-full sm:w-1/2 flex justify-center">
      <img
        src={token3}
        alt="Tokenomics Image 3"
        className="w-full max-w-[100%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[90%] object-contain rounded-lg"
      />
    </div>

    {/* Text Section */}
    <div className="w-full sm:w-1/2 flex flex-col  align-middle  justify-center text-center md:text-left gap-6">
      <h1 className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug">
       <span className="text-orange-500"> Outdated Dreams – </span>  The Fall of Yesterday's Meme Coins
      </h1>
      <h1 className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug">
       <span className="text-orange-500">  Zero Utility, Zero Future – </span>The Reality Check
      </h1>
      <h1 className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug">
        <span className="text-orange-500"> Meme Supremacy – </span>  Leading the Meme Coin Revolution
      </h1>
    </div>
  </div>
</div>

    </>
  );
};

export default Tokenomics;
