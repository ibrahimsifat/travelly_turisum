import React from 'react';
import { NavLink } from 'react-router-dom';
import AboutBanner from './AboutBanner';
import AboutBody from './AboutBody'
import Timeline from './Timeline';

const AboutUs = () => {
    return (
      <div>
            <div className='positio h-4/5 about_banner flex justify-center items-center'>
            <div className="">
              <h1 className="text-2xl  md:text-4xl font-medium font-bold title-font mb-2 text-white">About Us</h1>
              <div className="h-1 w-32 bg-blue-700 rounded mb-2"></div>
            <p>  <NavLink className='hover:text-blue-700 text-white font-semibold' to='/'>Home</NavLink><span className='text-white'> /</span> <span className='font-semibold text-blue-700'>About Us</span></p>
            </div>
         
        </div>
        <Timeline></Timeline>
        <AboutBanner></AboutBanner>
        <AboutBody></AboutBody>
      
      </div>
    );
};

export default AboutUs;