import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutBanner from './AboutBanner';
import AboutBody from './AboutBody'

const AboutUs = () => {
    return (
      <div>
            <div className='positio h-4/5 about_banner flex justify-center items-center'>
            <div className="">
              <h1 className="text-2xl  md:text-4xl font-medium font-bold title-font mb-2 text-white">About Us</h1>
              <div className="h-1 w-32 bg-indigo-400 rounded mb-2"></div>
            <p>  <NavLink className='hover:text-indigo-400 text-white font-semibold' to='/'>Home</NavLink><span className='text-white'> /</span> <span className='font-semibold text-indigo-400'>About Us</span></p>
            </div>
         
        </div>
        <AboutBanner></AboutBanner>
        <AboutBody></AboutBody>
      
      </div>
    );
};

export default AboutUs;