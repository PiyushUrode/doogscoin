import React from 'react';
import Header from '../Component/Header';
import About from '../Component/About';
import Tokenomics from '../Component/Tokenomics';
import Howtobuy from '../Component/Howtobuy';
import Contact from '../Component/Contact';
import Footer from "../Component/Footer"


const Homepage = () => {
  return (
    <>
      <div ><Header /></div>
       <div ><About /></div>
     <div ><Tokenomics /></div>
     <div ><Howtobuy /></div>
     <div ><Contact /></div>
     <div ><Footer /></div> 
    </>
  );
};

export default Homepage;
