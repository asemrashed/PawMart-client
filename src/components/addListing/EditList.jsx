import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import OutlineActionBtn from "../buttons/OutlineSubmitBtn";
import Swal from 'sweetalert2'

const EditList = ({modalRef, listItem}) => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const {_id, title, category, price, location, description, image, seller_name, email} = listItem
  const handleEdit = e => {
    e.preventDefault();
    const title = e.target.title.value
    const category = e.target.category.value
    const price = Number(e.target.price.value)
    const location = e.target.location.value
    const image = e.target.product_img.value
    const description = e.target.description.value
    const seller_name = e.target.name.value
    const email = e.target.email.value
    const editedList = {
        title, 
        category, 
        price, 
        image, 
        description,
        seller_name,
        email, 
        location,
    }
    axiosSecure
  .patch(`/listings/${_id}`, editedList)
  .then(res => {
    if (res?.data?.modifiedCount === 1) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Edited Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
      navigate(`/pets&supplies/${_id}`);
    } else {
      modalRef.current.close()
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Not updated",
      });
    }
  })

  };
//   console.log('user', user)
  return (
    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-xl md:text-2xl text-center mb-2">
          Edit your post
        </h3>
        <hr />

      <form
        onSubmit={handleEdit}
        className="fieldset w-full mx-auto flex flex-col gap-2 text-base md:text-lg mt-2 p-5 shadow-sm md:shadow-md shadow-primary rounded-xl"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="w-1/2">
            <label className="">Pet/Product Name</label>
            <input
              name="title"
              type="text"
              className="input w-full mt-1"
              defaultValue={title}
              required
            />
          </div>
          <div className="w-1/2">
            <label className="">Category</label>
            <select name="category" className="select mt-1" defaultValue={category}>
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
              defaultValue={price}
              required
            />
          </div>
          <div className="w-1/2">
            <label className="">Location</label>
            <input
                name="location"
                type="text"
                className="input w-full mt-2"
                defaultValue={location}
            />
          </div>
        </div>
        <div>
          <label className="">Description</label>
          <textarea 
            name="description"
            type="text"
            className="textarea mt-1 w-full"
            defaultValue={description}
          />
        </div>
        <div>
          <label className="img">Image url</label>
          <input
            name="product_img"
            type="text"
            className="input w-full mt-1"
            defaultValue={image}
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
                defaultValue={seller_name}
                readOnly
            />
          </div>
          
          <div className="w-1/2">
            <label className="">Your Email</label>
            <input 
                name="email" 
                type="email" 
                className="input w-full mt-1" 
                defaultValue={email}
                readOnly
            />
          </div>
        </div>

        <div className="flex justify-center mt-2 modal-action">
            <button
              type="button"
              onClick={() => modalRef.current.close()}
              className="btn btn-outline btn-error rounded-lg px-3 py-1"
            >
              Cancel
            </button>
          <OutlineActionBtn value={'Done'}/>
        </div>
      </form>
    </div>
    </dialog>
  );
};

export default EditList;
