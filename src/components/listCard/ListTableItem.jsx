import React from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useRef } from "react";
import EditList from "../addListing/EditList";

const ListTableItem = ({ listItem, index, list, setList }) => {
  const {loading }= use(AuthContext)
        const modalRef = useRef()
  const secureAxios = useAxiosSecure()
  
  if(loading){
    return (
      "Loading", (<span className="loading loading-spinner loading-xl"></span>)
    );
  }
  
  const handleModalOpen=()=>{
    Swal.fire({
      title:"Do you want to edit the post!",
      confirmButtonText: "Yes, Edit it!",
      showCancelButton: true,
    }).then(result => {
      if(result.isConfirmed){
        modalRef.current.showModal()
      }
    });
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
              const currItem = list.filter(b => b._id !== listItem._id)
              setList(currItem)
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
          <img src={listItem.image} alt={listItem.title} className="w-15 h-12 object-cover rounded-md"/>
        </div>
        <div>
          <Link to={`/pets&supplies/${listItem._id}`} className="font-bold text-primary">{listItem.title}</Link>
        </div>
      </div>

      {/* Row 3 - Status */}
      <div className="flex justify-end md:justify-start items-center order-4">
        <p className={``}>
          {listItem.category}
        </p>
      </div>

      {/* Row 3 - Remove Button */}
      <div className="flex col-span-2 md:col-span-1 justify-between md:justify-start gap-2 order-5">
        <button onClick={handleModalOpen} className="btn btn-sm md:btn-md btn-outline btn-secondary rounded hover:text-white border px-3 py-1 transition">
          Edit post
        </button>
        <button onClick={handleDelete} className="btn btn-sm md:btn-md btn-outline btn-error rounded hover:text-white border px-3 py-1 transition">
          Remove post
        </button>
      </div>
      <EditList modalRef={modalRef} listItem={listItem}/>
    </div>
  );
};

export default ListTableItem;
