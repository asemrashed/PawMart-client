import React from 'react';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className='max-w-[1440px] mx-auto bg-base-200/50'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;