import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: myOrders = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["my-orders", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?user_email=${user.email}`);
      return res.data;
    },
  });

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f6a11b",
      cancelButtonColor: "red",
      confirmButtonText: "Yes, cancel it!",
    }).then(async result => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/orders/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", "Order has been cancelled.", "success");
        }
      }
    });
  }

  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold">My Orders</h1>
      {myOrders.length > 0 ? (
        <div className="table table-zebra mt-2 md:mt-3">
          <div className="w-full [text-decoration:none]">
            <div>
              <ul className="hidden md:grid grid-cols-[60px_1.5fr_0.5fr_0.7fr_0.8fr] items-center px-3 py-3 bg-base-300">
                <li className="no-underline">#</li>
                <li className="no-underline">Product</li>
                <li className="no-underline">Price</li>
                <li className="no-underline">Date</li>
                <li className="no-underline">Actions</li>
              </ul>
            </div>

            <div>
              {myOrders.map((order, i) => (
                <ul
                  key={order._id}
                  className="grid grid-cols-2 md:grid-cols-[60px_1.5fr_0.5fr_0.7fr_0.8fr] items-center gap-1 md:gap-0 px-3 py-3 border-b border-base-300"
                >
                  <li className="no-underline order-1">{i + 1}</li>
                  <li className="no-underline order-3 md:order-2 font-semibold flex items-center gap-2">
                    <img src={order?.image} alt={order?.productName} className="w-12 h-10 rounded-md object-cover" />
                    <p className="text-sm text-primary">{order?.productName}</p>
                  </li>
                  <li className="no-underline order-2 md:order-3 flex justify-end md:justify-start text-primary">
                    ${order?.price}
                  </li>
                  <li className="no-underline order-4 md:order-4 flex justify-end md:justify-start text-secondary">
                    {new Date(order?.date).toLocaleDateString()}
                  </li>
                  <li className="no-underline order-5 col-span-2 md:col-span-1 flex gap-3 md:gap-5 justify-between md:justify-start">
                    <button
                      title="Cancel Order"
                      onClick={() => handleDelete(order._id)}
                      className="text-lg text-error cursor-pointer flex items-center gap-1"
                    >
                      <RiDeleteBin6Line />
                      <p className="hidden md:block text-xs">Cancel</p>
                    </button>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-lg md:text-xl text-center mt-10">
          No orders placed yet.
        </div>
      )}
    </div>
  );
};

export default MyOrders;
