import React from "react";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import OrderTable from "./OrderTable";

const MyOrders = () => {
  const { user } = use(AuthContext);
  const [orders, setOrders] = useState([]);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    if (user) {
      const email = user.email;
      axiosSecure.get(`/orders/?user_email=${email}`)
      .then(res => {
        setOrders(res.data)
      })
    }
  }, [user, axiosSecure]);
  console.log(orders);

  return (
    <div className="max-w-[1200px] min-h-[60vh] mx-auto py-5 md:py-10 px-3 md:px-5">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-5 text-secondary">My List :<span className="text-primary"> {orders.length}</span></h1> <hr />
      <div>
        {/* Header */}
        <div className="hidden md:grid grid-cols-[60px_2fr_1.5fr_0.7fr_0.7fr_1.3fr_1.3fr_2fr] items-center px-4 py-3 bg-base-300 font-semibold text-secondary text-sm">
          <span>SL No</span>
          <span>Pet/Product</span>
          <span>Buyer Name</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Address</span>
          <span>Date</span>
          <span>Phone</span>
        </div>

        {/* Body */}
        {orders.length > 0 ? (
            orders.map((order, index) => (
            <OrderTable
              key={order._id} 
              order={order} 
              index={index + 1} 
            />
            ))
        ) : (
            <p className="text-center text-gray-500 py-5">
            No order found.
            </p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
