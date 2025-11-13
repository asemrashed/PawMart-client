import React from 'react';
import PrimaryBtn from '../../buttons/PrimaryBtn';

const WhyFromUs = () => {
    return (
        <div className='w-full bg-base-300/50 py-5 md:py-15'>
            <div className="max-w-[1200px] mx-auto px-5 md:px-5 gap-4 md:gap-15">
                <div className={`flex items-center w-full md:px-0 gap-2 md:gap-4 relative transition-l-r duration-300 rounded-md `}>
                    <div className="m-10 md:w-1/2 z-2 bg-black/70 md:bg-transparent rounded-md px-4 py-4 md:px-10 flex flex-col gap-2 md:gap-4  text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-semibold mb-5 md:mb-10">Why Adopt from PawMart!</h2>
                        <h3 className='text-lg md:text-xl'>🐾 What We Do</h3>
                        <p className="text-sm md:text-lg text-neutral-content">
                            {` At PawMart, we connect kind hearts with pets in need.
                            Our mission is to rescue, care for, and rehome abandoned animals.
                            Every adoption helps build a world where all pets are loved.`}
                        </p>
                        <h3 className='text-lg md:text-xl mt-3 md:mt-5'>🐾 Rescue & Adopt</h3>
                        <p className="text-sm md:text-lg text-neutral-content">
                            {` We believe pets deserve families, not cages.
                            When you adopt, you give a second chance and save a life.
                            Choose compassion — bring home a friend, not a purchase.`}
                        </p>
                        <div className='mt-5 md:mt-10 flex justify-center md:justify-start'>
                            <PrimaryBtn to={'/pets&supplies/?category=Pets'} value={'See more pets'}/>
                        </div>
                    </div>
                    <img src='https://i.ibb.co.com/VpNF7STL/petCare.png' alt='petcare' className="w-full md:w-1/2 h-full rounded-md object-cover absolute top-0 left-0 md:static" />
                </div>
            </div>
        </div>
    );
};

export default WhyFromUs;