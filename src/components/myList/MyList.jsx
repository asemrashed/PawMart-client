import React from "react";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ListTableItem from "../listCard/ListTableItem";

const MyList = () => {
  const { user } = use(AuthContext);
  const [list, setList] = useState([]);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    if (user) {
      const email = user.email;
      axiosSecure.get(`/my-list/?user_email=${email}`)
      .then(res => {
        setList(res.data)
      })
    }
  }, [user, axiosSecure]);


  return (
    <div className="max-w-[1200px] min-h-[60vh] mx-auto py-5 md:py-10 px-3 md:px-5">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-5 text-secondary">My List :<span className="text-primary"> {list.length}</span></h1>
      <div>
        {/* Header */}
        <div className="hidden md:grid grid-cols-[60px_2fr_1fr_1fr_1fr] items-center px-4 py-3 bg-base-300 font-semibold text-secondary text-sm">
          <span>SL No</span>
          <span>Pet/Product</span>
          <span>Price</span>
          <span>Category</span>
          <span>Actions</span>
        </div>

        {/* Body */}
        {list.length > 0 ? (
            list.map((listItem, index) => (
            <ListTableItem 
              key={listItem._id} 
              listItem={listItem} 
              index={index + 1} 
            />
            ))
        ) : (
            <p className="text-center text-gray-500 py-5">
            No list found for this product.
            </p>
        )}
      </div>
    </div>
  );
};

export default MyList;
