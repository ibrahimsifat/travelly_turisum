import React from 'react';

import Slider from './Slider/Slider'
import Services from './Services/Services';
import TopDestinations from './TopDestinations/TopDestinations';
import Review from '../Review/Review';
import MassageUs from '../ContactUs/MassageUs';

const Home = () => {
    return (
        <div>
        
            <Slider></Slider>
            <Services></Services>
          <TopDestinations></TopDestinations>
          <Review></Review>
          <MassageUs></MassageUs>
        </div>
    );
};

export default Home;