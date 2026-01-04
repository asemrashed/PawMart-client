import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router";
import NewOrder from "./NewOrder";
import PrimaryActionBtn from "../buttons/PrimaryActionBtn";

export default function ProductDetails() {
  const modalRef = useRef()
  const post = useLoaderData()

  const handleModalOpen=()=>{
    modalRef.current.showModal()
  }
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-5 md:my-10">
      {/* Left Image */}
      <div className="flex flex-col items-center justify-cneter gap-3 md:gap-5">
        <div className="w-full bg-white rounded-lg h-[400px] flex items-center justify-center">
          {post?.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover rounded-lg"
            />
          ) : (
            <div className="bg-gray-300 w-full h-full rounded-lg" />
          )}
        </div>
        {/* Product Description */}
        <div className="w-full hidden md:flex flex-col gap-4 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Pet/Product Description
          </h2>
          <p className="text-gray-700 leading-relaxed">{post.description}</p>
        </div>
      </div>

      {/* Right Title Section */}
      <div className="flex flex-col gap-3 md:gap-5">
        <div>
          <div className="flex items-center justify-between">
            <div className="inline-block px-3 py-2 rounded-full bg-primary/50 text-secondary font-semibold text-sm uppercase">
              {post.category}
            </div>
            <Link
              to="/pets&supplies"
              className="text-secondary font-bold inline-flex items-center gap-1 outline-1 rounded-full px-2 hover:bg-base-300"
            >
              <span className="text-lg">&#8592;</span>
              <span>Back To Pets & Supplies</span>
            </Link>
          </div>
          <h1 className="mt-2 font-bold text-[32px] lg:text-[48px] text-gray-900">
            {post.title}
          </h1>
        </div>
        {/* Price */}
        <div className="w-full flex flex-col gap-4 bg-white p-6 rounded-md shadow-sm">
          <div className="">
          <p className="text-gray-500">Price</p>
          <p className="text-green-600 font-semibold text-2xl md:text-3xl">
            $ {post.price}
          </p>
          </div>
        <hr />
        {/* Product Details */}
        <div>
          <h3 className="font-semibold text-xl md:text-2xl text-gray-900 mb-4">
            Pet/Product Details
          </h3>
          <p className="text-gray-700 font-semibold md:text-base mb-2">
            <span className="font-bold">Pet/Product ID:</span> {post._id}
          </p>
          <p className="text-gray-700 font-semibold md:text-base">
            <span className="font-bold">Posted:</span>{" "}
            {new Date(post.created_at).toLocaleDateString()}
          </p>
          </div>
          <hr className="block md:hidden"/>
          <div className="w-full flex flex-col md:hidden gap-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                Pet/Product Description
            </h2>
            <p className="text-gray-700 leading-relaxed">{post.description}</p>
        </div>
        <hr />
        {/* Seller Information */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-xl md:text-2xl text-gray-900">
              Seller Information
            </h3>
            <div className="flex items-center space-x-4">
              {/* <img
                src={product.seller_image}
                alt={product.seller_name}
                className="w-14 h-14 rounded-full object-cover border"
              /> */}
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  {post.seller_name}
                </p>
                <p className="text-gray-600 text-sm">{post.email}</p>
              </div>
            </div>
            <p className=" text-gray-600 text-sm md:text-base font-semibold">
              <span className="font-bold">Location:</span> {post.location}
            </p>
            {/* <p className="text-gray-600 text-sm md:text-base font-semibold break-all">
              <span className="font-bold">Contact:</span>{" "}
              {product.seller_contact}
            </p> */}
          </div>
        </div>
        {/* Button */}
        {/* <button
          onClick={handleModalOpen}
          className={` w-full rounded-lg text-white py-3 text-center`}>
          {product.status === 'sold'? 'Sold': 'Bid on This Product'}
        </button> */}
        <PrimaryActionBtn action={handleModalOpen} value={'Adopt / Buy'}/>
        {/* Bid Modal */}
        <NewOrder modalRef={modalRef} post={post}/>
      </div>
    </div>
  );
}
