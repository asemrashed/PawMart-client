import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import ListCard from '../../listCard/ListCard';
import PrimaryBtn from '../../buttons/PrimaryBtn';

const LatestListing = () => {
    const [listItems, setListItems] = useState([])
    const axios = useAxios();
    console.log('Rendering LatestListing', listItems)
    useEffect(()=>{
        try{
            axios.get("/latest-listings")
            .then(res => {
                // console.log(res.data)
                setListItems(res.data)
            })
        } catch(err){
            console.log(err)
        }
    },[axios])
    return (
        <div className='max-w-[1200px] mx-auto flex flex-col items-center md:pb-15'>
            <h1 className='text-2xl md:text-4xl font-semibold mb-10 md:mb-15'>Recent Listings</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7 mx-4 md:mx-1">
                {listItems.map(list => <ListCard key={list._id} list={list}/>)}
            </div>
            <div className='mt-5 md:mt-10'>
                <PrimaryBtn to={'/pets&supplies'} value={'Brouse All'}/>
            </div>
        </div>
    );
};

export default LatestListing;