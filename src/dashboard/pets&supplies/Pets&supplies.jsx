import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuView } from "react-icons/lu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";

const PetsSupplies = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    data: petsAndSupplies = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["pets-supplies"],
    queryFn: async () => {
      const res = await axiosSecure.get("/listings");
      return res.data;
    },
  });
  console.log('fsfsf', petsAndSupplies);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f6a11b",
      cancelButtonColor: "red",
      confirmButtonText: "Yes, delete it!",
    }).then(async result => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/listings/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your pet/Product has been removed.", "warning");
        }
      }
    });
  }

  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold">All Pets & Supplies</h1>
      {petsAndSupplies ? (
        <div className="table table-zebra mt-2 md:mt-3">
          <div className="w-full [text-decoration:none]">
            <div>
              <ul className="hidden md:grid grid-cols-[60px_1.5fr_0.5fr_0.7fr_1.2fr_0.8fr] items-center px-3 py-3 bg-base-300">
                <li className="no-underline">#</li>
                <li className="no-underline">Name</li>
                <li className="no-underline">Price</li>
                <li className="no-underline">Category</li>
                <li className="no-underline">Seller Email</li>
                <li className="no-underline">Actions</li>
              </ul>
            </div>

            <div>
              {petsAndSupplies.map((pet, i) => (
                <ul
                  key={pet._id}
                  className="grid grid-cols-2 md:grid-cols-[60px_1.5fr_0.5fr_0.7fr_1.2fr_0.8fr] items-center gap-1 md:gap-0 px-3 py-3 border-b border-base-300"
                >
                  <li className="no-underline order-1">{i + 1}</li>
                  <li className="no-underline order-3 md:order-2 font-semibold flex items-center gap-2">
                    <img src={pet?.image} alt={pet?.title} className="w-12 h-10 rounded-md object-cover" />
                    <p className="text-sm text-primary">{pet?.title}</p>
                  </li>
                  <li className="no-underline order-2 md:order-3 flex justify-end md:justify-start text-primary">
                    {pet?.price}
                  </li>
                  <li className="no-underline order-4 md:order-4 flex justify-end md:justify-start">
                    {pet?.category}
                  </li>
                  <li className="no-underline col-span-2 md:col-span-1 order-5">
                    {pet?.email}
                  </li>
                  <li className="no-underline order-7 col-span-2 md:col-span-1 flex gap-3 md:gap-5 justify-between md:justify-start">
                    <button 
                        title="View"
                        onClick={() => navigate(`/pets&supplies/${pet._id}`)}
                        className="text-lg text-success cursor-pointer flex items-center gap-1"
                    >
                      <LuView />
                      <p className="hidden md:block text-xs">View</p>
                    </button>
                    <button
                      title="Delete User"
                      onClick={() => handleDelete(pet._id)}
                      className="text-lg text-error cursor-pointer flex items-center gap-1"
                    >
                      <RiDeleteBin6Line />
                      <p className="hidden md:block text-xs">Delete</p>
                    </button>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-lg md:text-xl text-center">
          No parcel sends yet
        </div>
      )}
    </div>
  );
};

export default PetsSupplies;
