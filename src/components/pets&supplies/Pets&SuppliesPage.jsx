import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import ListCard from "../listCard/ListCard";
import { BsSearch } from "react-icons/bs";
import { useSearchParams } from "react-router";

const PetsAndSupplies = () => {
  const axios = useAxios();

  const [fullList, setFullList] = useState([]);
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Category");

    const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const cat = searchParams.get("category") || "All Category";
    setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get("/listings");
        setFullList(res.data);
        setListings(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchListings();
  }, [axios]);

  useEffect(() => {
    let filtered = [...fullList];

    if (category !== "All Category") {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (search.trim()) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setListings(filtered);
  }, [fullList, category, search]);

    const handleCategoryChange = (e) => {
    const cat = e.target.value;
    setCategory(cat);
    setSearchParams(cat !== "All Category" ? { category: cat } : {});
  };

  return (
    <div className="max-w-[1200px] mx-auto py-5 md:py-15">
      <h1 className="text-2xl md:text-4xl font-semibold text-center mb-10 md:mb-15">
        Pets & Supplies
      </h1>

      <div className="flex items-center justify-between gap-2 mb-5 md:mb-10 mx-3 md:mx-1">
        <div className="w-1/2 md:w-1/4">
          <div className="input flex items-center">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Find pets/products..."
              className="text-secondary flex-1"
            />
            <BsSearch className="cursor-pointer hover:-translate-y-0.5 duration-200" />
          </div>
        </div>

        <div className="w-1/2 md:w-1/4 flex justify-end">
          <select
            value={category}
            onChange={handleCategoryChange }
            className="select"
          >
            <option>All Category</option>
            <option>Pets</option>
            <option>Food</option>
            <option>Accessories</option>
            <option>Care Products</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7 mx-3 md:mx-1">
        {listings.length > 0 ? (
          listings.map((list) => <ListCard key={list._id} list={list} />)
        ) : (
          <p className="text-center text-secondary py-5">
            No Pet/Product found.
          </p>
        )}
      </div>
    </div>
  );
};

export default PetsAndSupplies;
