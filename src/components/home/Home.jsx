import React from 'react';
import HeroSwiper from './Hero';
import Categories from './category/Categories';
import LatestListing from './latest/LatestListing';

const Home = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <HeroSwiper/>
            <Categories/>
            <LatestListing/>
        </div>
    );
};

export default Home;