import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import ListCard from '../listCard/ListCard';
import { useRef } from 'react';
import { BsSearch } from "react-icons/bs";

const PetsAndSupplies = () => {
    const [listings, setListings] = useState([])
    const [fullList, setFullList] = useState([])
    const [search, setSearch] = useState('')
    const axios = useAxios();
    const categoryRef = useRef(null)
    // const searchRef = useRef(null)
    useEffect(()=>{
        try{
            axios.get("/listings")
            .then(res => {
                // console.log(res.data)
                setListings(res.data)
                setFullList(res.data)
            })
        } catch(err){
            console.log(err)
        }
    },[axios, setFullList])

    const handleCategory = (e)=>{
        e.preventDefault();
        const category = categoryRef.current.value
        if(category == 'All Category'){
            setListings(fullList)
        }else{
            axios.get(`/listings/?category=${category}`)
            .then(res => {
                // console.log(res.data)
                setListings(res.data)
            })
        }

    }

    const handleSearch = (e)=>{
        e.preventDefault()
        const filtered = fullList.filter(list => 
            list.title.toLowerCase().includes(search.toLowerCase())
        )
        console.log(filtered)
        if(search){
            setListings(filtered)
        }
        if(search === ''){
            setListings(fullList)
        }
    }

    return (
        <div className='max-w-[1200px] mx-auto  py-5 md:py-15'>
            <h1 className='text-2xl md:text-4xl font-semibold text-center mb-10 md:mb-15'>Pets & Supplies </h1>
            <div className="flex items-center justify-between gap-2 mb-5 md:mb-10">
                <div className='w-1/2 md:w-1/4'>
                    <label className="input">
                        <form onSubmit={handleSearch} className=' w-full flex items-center justify-between'>
                        <input
                        type="text"
                        // ref={searchRef}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Find pets/products..."
                        className="text-secondary"
                        />
                        <BsSearch onClick={handleSearch} className='cursor-pointer hover:-translate-y-0.5 duration-200'/>
                        </form>
                    </label>
                </div>
                <div className="w-1/2 md:1/4 flex justify-end">
                    <select onChange={handleCategory} ref={categoryRef} name="category" className="select">
                        <option>All Category</option>
                        <option>Pets</option>
                        <option>Food</option>
                        <option>Accessories</option>
                        <option>Care Products</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
                {listings.length > 0 ? (
                    listings.map(list => <ListCard key={list._id} list={list}/>)
                ):(
                    <p className="text-center text-secondary py-5">
                        No Pet/Product found for this product.
                    </p>
                )}
            </div>
        </div>
    );
};

export default PetsAndSupplies;