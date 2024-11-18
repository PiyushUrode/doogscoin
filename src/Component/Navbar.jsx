import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/doglogo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeMenu = () => {
    setIsNavVisible(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <nav className={`w-full overflow-x-hidden  top-0 border-b border-none dark:border-gray-600`}>
        <div className="relative max-w-full flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:p-4 md:px-8">
          <Link to="/" onClick={closeMenu}>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img loading="lazy" src={logo} className="w-[9rem] phone:w-[5.5rem] h-auto" alt="smartBCpresale" />
            </div>
          </Link>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className='flex gap-3 phone:gap-1 items-center'>
              <a target="blank" href="https://smartbcconcept.net/MemberPanel/Login.aspx" className="rbtn h-fit rounded-full">
                <span className="text rounded-full px-5 py-2 phone:py-1 phone:px-2 phone:text-sm">Sign In</span>
              </a>
              <a target="blank" href="https://smartbcconcept.net/" className="rbtn h-fit rounded-full">
                <span className="text rounded-full px-5 py-2 phone:py-1 phone:px-2 phone:text-sm">Sign Up</span>
              </a>
            </div>

            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center p-1 w-9 h-9 justify-center text-sm text-red-100 bg-gray-900 border border-[--primary-color] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-[--prime-color] hover:bg-gray-900"
              aria-controls="navbar-sticky1"
              aria-expanded={isNavVisible}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-4 h-5"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            id="navbar-sticky1"
            className={`items-center justify-between w-[99%] md:flex md:w-auto md:order-1 ${isNavVisible ? 'block' : 'hidden'}`}
          >
            <ul className="navcar flex flex-col p-4 md:py-1.5 mt-4 font-medium border border-[--primary-color] md:rounded-[50px] rounded-lg md:space-x-[3vmax] md:flex-row md:mt-0 md:border-0 text-black tablet:bg-gray-900">
              <li className="md:border-none border-b-[1px] border-gradient">
                <Link to="/#home" onClick={closeMenu}>
                  <div className="font-normal block py-2 px-3 text-black rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-[#8AFADE] font-outfit">Home</div>
                </Link>
              </li>
              <li className="md:border-none border-b-[1px] border-gradient">
                <Link to="/#about" onClick={closeMenu}>
                  <div className="font-normal block py-2 px-3 text-black rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-[#8AFADE] font-outfit">About</div>
                </Link>
              </li>
              <li className="md:border-none border-b-[1px] border-gradient">
                <Link to="/#token" onClick={closeMenu}>
                  <div className="font-normal block py-2 px-3 text-black rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-[#8AFADE] font-outfit">Tokenomics</div>
                </Link>
              </li>
              <li className="md:border-none border-b-[1px] border-gradient">
                <Link to="/#roadmap" onClick={closeMenu}>
                  <div className="font-normal block py-2 px-3 text-black rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-[#8AFADE] font-outfit">Roadmap</div>
                </Link>
              </li>
              <li className="md:border-none border-b-[1px] border-gradient">
                <Link to="/Privacypolicy" onClick={closeMenu}>
                  <div className="font-normal block py-2 px-3 text-black rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:text-[#8AFADE] font-outfit">Privacy Policy</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
