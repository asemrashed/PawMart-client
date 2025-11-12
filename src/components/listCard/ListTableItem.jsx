import React from "react";
import Swal from 'sweetalert2'
// import { useEffect } from "react";
// import { useState } from "react";
import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
// import useAxios from "../../hooks/useAxios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ListTableItem = ({ listItem, index }) => {
  const {loading }= use(AuthContext)
//   const [product, setProduct] = useState([])
//   const {productId} = listItem
//   const axios = useAxios()
  const secureAxios = useAxiosSecure()
//   useEffect(()=>{
//     axios.get(`/products/${productId}`)
//     .then(res =>{
//       setProduct(res.data)
//     })
//   },[productId, axios])
  
  if(loading){
    return (
      "Loading", (<span className="loading loading-spinner loading-xl"></span>)
    );
  }

  const handleDelete=()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
    secureAxios.delete(`/listings/${listItem._id}`)
          .then(res =>{
            if(res.data.deletedCount){
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success"
              });
            //   const currBids = bids.filter(b => b._id !== listItem._id)
            //   setBids(currBids)
            }
          })
        console.log('Post deleted')
      }
    });
  }


  return (
    <div className="border-b border-base-300/80 px-4 py-3 hover:bg-base-300/50 transition 
      grid grid-cols-2 gap-3 
      md:grid-cols-[60px_2fr_1fr_1fr_1fr] md:items-center">

      {/* Row 1 - Index */}
      <span className="font-semibold my-auto text-secondary">{index}.</span>

      {/* Row 1 - Price */}
      <span className="font-bold text-secondary justify-end order-2 md:order-3 text-right md:text-left">
        ${listItem.price}
      </span>

      {/* Row 2 - Product */}
      <div className="flex items-center gap-3 order-3 md:order-2">
        <div className="bg-gray-300 rounded-lg">
          <img src={listItem.image} alt={listItem.title} className="w-10 h-10"/>
        </div>
        <div>
          <Link to={`/products/${listItem._id}`} className="font-bold text-primary">{listItem.title}</Link>
        </div>
      </div>

      {/* Row 2 - Seller */}
      {/* <div className="flex flex-row-reverse md:flex-row justify-start gap-3 order-4 md:order-3">
        <img
          src={listItem.seller_image}
          alt={listItem.seller_name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-800">{listItem.seller_name}</p>
          <p className="text-xs md:text-sm text-gray-500">{listItem.email}</p>
        </div>
      </div> */}

      {/* Row 3 - Status */}
      <div className="flex justify-end md:justify-start items-center order-4">
        <p className={``}>
          {listItem.category}
        </p>
      </div>

      {/* Row 3 - Remove Button */}
      <div className="flex col-span-2 md:col-span-1 justify-between md:justify-start gap-2 order-5">
        <button className="btn btn-sm md:btn-md btn-outline btn-secondary rounded hover:text-white border px-3 py-1 transition">
          Edit post
        </button>
        <button onClick={handleDelete} className="btn btn-sm md:btn-md btn-outline btn-error rounded hover:text-white border px-3 py-1 transition">
          Remove post
        </button>
      </div>
    </div>
  );
};

export default ListTableItem;
