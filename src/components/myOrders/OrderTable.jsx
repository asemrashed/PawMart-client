import React from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRef } from "react";
import EditList from "../addListing/EditList";

const OrderTable = ({ order, index }) => {
  const {loading }= use(AuthContext)
  const modalRef = useRef()
  
  const { _id, title, price, imageUrl, buyer_name, buyer_email, quantity, location, date, buyer_contact} = order

  if(loading){
    return (
      "Loading", (<span className="loading loading-spinner loading-xl"></span>)
    );
  }
  
  return (
    <div className="border-b border-base-300/80 px-4 py-3 hover:bg-base-300/50 transition 
      grid grid-cols-2 gap-3 md:gap-0
      md:grid-cols-[60px_2fr_2fr_0.7fr_0.7fr_1.3fr] md:items-center">

      {/* Row 1 - Index */}
      <span className="font-semibold my-auto text-secondary">{index}.</span>

      {/* Row 1 - Price */}
      <span className="font-bold text-secondary justify-end order-2 md:order-4 text-right md:text-left">
        ${price}
      </span>

      {/* Row 2 - Product */}
      <div className="flex items-center gap-3 order-3 md:order-2">
        <div className="bg-gray-300 rounded-lg">
          <img src={imageUrl} alt={title} className="w-15 h-12 object-cover rounded-md"/>
        </div>
        <div>
          <Link to={`/pets&supplies/${_id}`} className="font-bold text-primary">{title}</Link>
        </div>
      </div>

      {/* Row 2 - Seller */}
      <div className="flex flex-row-reverse md:flex-row justify-start gap-3 order-5 md:order-3">
        {/* <img
          src={listItem.seller_image}
          alt={listItem.seller_name}
          className="w-10 h-10 rounded-full object-cover"
        /> */}
        <div>
          <p className="font-semibold">{buyer_name}</p>
          <p className="text-xs md:text-sm text-gray-500">{buyer_email}</p>
        </div>
      </div>

      {/* Row 3 - Status */}
      <div className="flex justify-end md:justify-start items-center order-4">
        <p className={``}>
          {quantity}
        </p>
      </div>
      {/* Row 3 - Status */}
      {/* <div className="flex justify-start items-center order-6">
        <p className={``}>
          {location}
        </p>
      </div> */}
      {/* Row 3 - Status */}
      <div className="flex justify-end md:justify-start items-center order-6">
        <p className={``}>
          {new Date(date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default OrderTable;
