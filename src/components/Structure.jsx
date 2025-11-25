import React from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import {Outlet} from "react-router-dom"


function Structure(){
  return (
    <>
          <CustomNavbar />
          
          <Outlet />
          
          <Footer/>
          
    </>
  );
};

export default Structure;