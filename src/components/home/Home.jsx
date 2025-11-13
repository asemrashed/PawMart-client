import React from 'react';
import HeroSwiper from './Hero';
import Categories from './category/Categories';
import LatestListing from './latest/LatestListing';
import WhyFromUs from './whyUs/WhyFromUs';
import Heros from '../heros/Heros';

const Home = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <HeroSwiper/>
            <Categories/>
            <LatestListing/>
            <WhyFromUs/>
            <Heros/>
        </div>
    );
};

export default Home;