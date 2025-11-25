import React from 'react';
import ImageCarousel from './Slider';
import logo from "../assets/image/logo.png"
import {Promotion,Promotion2,Promotion3,Promotion4, Promotion5} from './promotions';
// import off


function Home(){
  return (
      <>
      <ImageCarousel /> 
      <Promotion />
      <Promotion2 />
      <Promotion3 />
      <Promotion4 />
      <Promotion5/>

      {/* <OfferBanner/> */}
      
    </>
  );
};


export default Home;

