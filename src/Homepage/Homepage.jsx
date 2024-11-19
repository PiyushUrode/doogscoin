import React from 'react';
import Navbar from "../Component/Navbar"
import Header from '../Component/Header';
import About from '../Component/About';
import Tokenomics from '../Component/Tokenomics';
import Howtobuy from '../Component/Howtobuy';
import Contact from '../Component/Contact';
import Footer from "../Component/Footer"


const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Tokenomics />
      <Howtobuy />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;
