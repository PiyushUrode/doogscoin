import logo from "../assets/images/doglogo.png";
import Twiiter from "../assets/images/footer/logo1.png"
import Telegram from "../assets/images/footer/logo2.png"
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="bg-[#ffffff] z-10 rounded-t-3xl border-y-2 border-y-gray-400 border-2">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 z-10">
                    <div className="  flex flex-col sm:flex-row md:justify-between md:justify-center z-10">
                        <div className="flex flex-col gap-5 items-center sm:items-start mb-6 max-w-[100%] sm:max-w-[60%] tablet:items-center md:mb-0 ">
                            <a href="" className="flex items-center">
                                <img src={logo} className="h-[50px] me-3" alt="FlowBite Logo" />
                            </a>
                            <p className="items-center sm:items-start text-black w-[100%]">
                                Cryptocurrency trading is highly speculative and carries a
                                substantial risk of loss. The value of DOOGS Coin can fluctuate
                                dramatically, and you may lose some or all of your invested
                                capital. It is essential to invest only what you can afford to
                                lose and to fully understand the risks involved. The content
                                provided on this platform is for informational purposes only and
                                should not be construed as financial or investment advice.
                                Before making any investment decisions, consider consulting with
                                a professional financial advisor to assess your individual
                                circumstances and risk tolerance.
                            </p>
                        </div>
                        <div className="mt-16 flex flex-col gap-10  tablet:justify-center sm:max-w-[40%] ">
                            <div
                                className="flex justify-center align-middle text-white justify-center items-center text-5xl   
                                 py-10 px-10 bg-no-repeat bg-center token-background 
                                bg-contain "
                                id="home"
                            >



                                <h1 className='w-[100%] text-4xl text-center '> Follow us on</h1>
                            </div>
          
                            <div className="flex flex-col  justify-center align-middle">
                                <ul className="flex flex-col"> 
                                    <li className="flex flex-row gap-10"> 
                                        <img src={Twiiter} alt="" />
                                        <h1 className="text-orange-500 text-3xl" >Twitter</h1>
                                    </li>
                                    <li className="flex flex-row gap-10" > 
                                        <img src={Telegram} alt="" />
                                        <h1 className="text-orange-500 text-3xl  ">Telegram</h1>
                                    </li>
                                </ul>
                                     
                            </div>



                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
