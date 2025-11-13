import React from 'react';

const Error = () => {
    return (
        <div className='max-x-[1200px] min-h-screen gap-5 mx-auto flex flex-col items-center justify-center'>
            <h1 className='text-3xl md:text-6xl text-center text-red-400! font-extrabold'>Page Not Found</h1>
            <img src="https://static.vecteezy.com/system/resources/previews/006/549/647/non_2x/404-landing-page-free-vector.jpg" 
                alt="404" 
                className='w-3/5'
            />
        </div>
    );
};

export default Error;