import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import ListCard from '../../listCard/ListCard';
import SecondaryBtn from '../../buttons/SecondaryBtn';

const LatestListing = () => {
    const [listItems, setListItems] = useState([])
    const axios = useAxios();
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
        <div className='max-w-[1200px] mx-auto flex flex-col items-center gap-5 py-5 md:pb-15'>
            <h1 className='text-2xl md:text-4xl font-semibold mb-10 md:mb-15'>Recent Listings</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
                {listItems.map(list => <ListCard key={list._id} list={list}/>)}
            </div>
            <SecondaryBtn to={'/pets&supplies'} value={'Brouse All'}/>
        </div>
    );
};

export default LatestListing;