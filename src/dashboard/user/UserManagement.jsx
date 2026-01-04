import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

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
        const res = await axiosSecure.delete(`/users/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Your user has been removed.", "warning");
        }
      }
    });
  };
  
    const makeAdmin = async (user) => {
      const result = await Swal.fire({
        title: "Are you sure to make this user admin?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#f6a11b",
        cancelButtonColor: "red",
        confirmButtonText: "Yes",
      });

      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.patch(`/users/${user._id}`, { role: "admin" });
          if (res.data.modifiedCount > 0) {
            await refetch();
            Swal.fire("Made Admin!", "User has been made admin.", "success");
          }
        } catch (err) {
          console.error(err);
          Swal.fire("Error", "Failed to make user admin", "error");
        }
      }
    }


  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold">USERS LIST</h1>
      {users ? (
        <div className="table table-zebra mt-2 md:mt-3">
          <div className="w-full [text-decoration:none]">
            <div>
              <ul className="hidden md:grid grid-cols-[60px_1.5fr_1.5fr_0.5fr_0.5fr] items-center px-3 py-3 bg-base-300">
                <li className="no-underline">#</li>
                <li className="no-underline">Name</li>
                <li className="no-underline">Email</li>
                <li className="no-underline">Role</li>
                <li className="no-underline">Actions</li>
              </ul>
            </div>

            <div>
              {users.map((user, i) => (
                <ul
                  key={user._id}
                  className="grid grid-cols-2 md:grid-cols-[60px_1.5fr_1.5fr_0.5fr_0.5fr] items-center gap-1 md:gap-0 px-3 py-3 border-b border-base-300"
                >
                  <li className="no-underline order-1">{i + 1}</li>
                  <li className="no-underline order-3 md:order-2 font-semibold">
                    {user.displayName}
                  </li>
                  <li className="no-underline col-span-2 md:col-span-1 order-5 md:order-3">
                    {user.email}
                  </li>
                  <li className="no-underline order-4 md:order-4 flex justify-end md:justify-start text-primary">
                    {user.role || "User"}
                  </li>
                  <li className="no-underline order-7 flex gap-3 md:gap-5 justify-end md:justify-start">
                    <button 
                        title="Make Admin"
                        onClick={() => makeAdmin(user)}
                        className="text-lg flex text-success cursor-pointer"
                        data-tip="Make Admin"
                    >
                      <RiAdminLine/>
                      <p className="hidden md:block text-xs">Admin</p>
                    </button>
                    <button
                      title="Delete User"
                      onClick={() => handleDelete(user._id)}
                      className="text-lg flex text-error cursor-pointer"
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

export default UsersManagement;
