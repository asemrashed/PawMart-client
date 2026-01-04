import React from 'react';
import notFound from '../../assets/404.png'
import PrimaryBtn from '../buttons/PrimaryBtn';

const NotFound = () => {
    return (
        <div className='max-x-[1200px] bg-secondary/70 min-h-screen gap-5 mx-auto flex flex-col items-center justify-center'>
            <h2 className='text-2xl md:text-4xl text-center text-primary font-extrabold'>Oooops...</h2>
            <img src={notFound} 
                alt="404" 
                className='w-2/5'
            />
            <h1 className='text-center text-secondary text-3xl md:text-6xl mt-2'>Page Not Found</h1>
            <PrimaryBtn to={'/'} value="Back To Home"/>
        </div>
    );
};

export default NotFound;