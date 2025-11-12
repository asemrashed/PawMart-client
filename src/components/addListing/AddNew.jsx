import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import OutlineActionBtn from "../buttons/OutlineSubmitBtn";

const AddNew = () => {
    const {user}= useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
  const handleNewProduct = e => {
    e.preventDefault();
    const title = e.target.title.value
    const category = e.target.category.value
    const price = Number(e.target.price.value)
    const location = e.target.location.value
    const image = e.target.product_img.value
    const description = e.target.description.value
    const seller_name = e.target.name.value
    const email = e.target.email.value
    const newList = {
        title, 
        category, 
        price, 
        image, 
        description,
        seller_name,
        email, 
        location,
    }
    console.log(newList);
    axiosSecure.post(`/listings`, newList)
    .then(res =>{
        console.log(res)
        e.target.reset()
        navigate('/')
    })
  };
//   console.log('user', user)
  return (
    <div className="max-w-[1440px] mx-auto my-5 md:my-10">
      <h1 className="font-bold text-2xl md:text-4xl text-center mb-3">
        Create Pet Adotion/Product Post
      </h1>

      <form
        onSubmit={handleNewProduct}
        className="fieldset w-11/12 md:w-1/3 mx-auto flex flex-col gap-2 text-base md:text-lg mt-2 p-5 shadow-sm md:shadow-md shadow-primary rounded-xl"
      >
        <h2 className="text-xl md:text:2xl font-semibold">Product Details</h2><hr/>
        <div className="flex items-center justify-between gap-3">
          <div className="w-1/2">
            <label className="">Product/Pet Name</label>
            <input
              name="title"
              type="text"
              className="input w-full mt-1"
              placeholder="Product name"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="">Category</label>
            <select name="category" className="select mt-1">
              <option>Pets</option>
              <option>Food</option>
              <option>Accessories</option>
              <option>Care Products</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="w-1/2">
            <label className=""> Price</label>
            <input
              name="price"
              type="number"
              className="input w-full mt-1"
              placeholder="$$$"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="">Location</label>
            <input
                name="location"
                type="text"
                className="input w-full mt-2"
                placeholder="Uttara Dhaka "
            />
          </div>
        </div>
        <div>
          <label className="">Description</label>
          <textarea 
            name="description"
            type="text"
            className="textarea mt-1 w-full"
            placeholder="Product details..."
          />
        </div>
        <div>
          <label className="img">Image url</label>
          <input
            name="product_img"
            type="text"
            className="input w-full mt-1"
            placeholder="Product image link"
          />
        </div>
        {/* seller deatails */}
        <div className="flex items-center justify-between gap-3">
          <div className="w-1/2">
            <label className="">Your Name</label>
            <input 
                name="name" 
                type="text" 
                className="input w-full mt-1"
                defaultValue={user?.displayName}
                readOnly
            />
          </div>
          <div className="w-1/2">
            <label className="">Your Email</label>
            <input 
                name="email" 
                type="email" 
                className="input w-full mt-1" 
                defaultValue={user?.email}
                readOnly
            />
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <OutlineActionBtn value={'Add Now'}/>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
