import React from 'react';
import HeroSwiper from './Hero';
import Categories from './category/Categories';

const Home = () => {
    return (
        <div className='max-w-[1600px] mx-auto'>
            <HeroSwiper/>
            <Categories/>
        </div>
    );
};

export default Home;