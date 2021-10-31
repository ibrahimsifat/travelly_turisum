import React from 'react';

import Slider from './Slider/Slider'
import Services from './Services/Services';
import TopDestinations from './TopDestinations/TopDestinations';
import Review from '../Review/Review';
import MassageUs from '../ContactUs/MassageUs';
import WantDiscount from '../WantDiscount/WantDiscount';

const Home = () => {
    return (
        <div>
        
            <Slider></Slider>
            <Services></Services>
          <TopDestinations></TopDestinations>
          <Review></Review>
          <MassageUs></MassageUs>
          <WantDiscount></WantDiscount>
        </div>
    );
};

export default Home;