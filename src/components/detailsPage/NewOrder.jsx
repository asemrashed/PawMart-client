import React, { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const NewOrder = ({ modalRef, post}) => {
  const { user, loading } = use(AuthContext);
  const [orders, setOrders] = useState([]);
  const secureAxios = useAxiosSecure()
  const {_id, title, image, price} = post
  if (loading) {
    return (
      "Loading", (<span className="loading loading-spinner loading-xl"></span>)
    );
  }


  const handleSubmit = e => {
    e.preventDefault();
    const buyer_name = e.target.name.value;
    const buyer_email = e.target.email.value;
    const price = e.target.price.value;
    const buyer_contact = e.target.contact.value;
    const productId = _id;
    const title = e.target.title.value;
    const imageUrl= e.target.imgUrl.value;
    const location = e.target.location.value;
    const date = e.target.date.value
    const quantity = e.target.quantity.value

    const currentOrder = {
      title,
      imageUrl,
      productId,
      price,
      location,
      date,
      quantity,
      buyer_name,
      buyer_email,
      buyer_contact
    };
    secureAxios.post("/orders", currentOrder)
      .then(res => {
        console.log("Bid placed successfull", res.data);
        if(res.data.insertedId){
          currentOrder._id = res.data.insertedId
          e.target.reset();
          modalRef.current.close();
        }
      })
  };

  return (
    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-xl md:text-2xl text-center mb-2">
          Adopt the Pet Or Buy Product
        </h3>
        <hr />
        <form
          onSubmit={handleSubmit}
          className="fieldset w-full flex flex-col gap-3 text-base md:text-lg mt-2"
        >
          <div>
            <label>Title</label>
          <input
            name="title"
            type="text"
            className="input w-full"
            defaultValue={title}
            readOnly
          />
          </div>
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <img
              src={image}
              alt="product"
              className="w-16 rounded-md bg-gray-200 border border-gray-400"
            />
            <div className="grow">
              <label className="img">Image url</label>
              <input
                name="imgUrl"
                type="text"
                className="input w-full"
                readOnly
                defaultValue={image}
              />
            </div>
          </div>


          <div className="flex items-center-justify-between gap-3">
            <div>
                <label className="">Price</label>
                <input
                    name="price"
                    type="number"
                    className="input w-full"
                    defaultValue={price}
                    readOnly
                />
            </div>
            <div>
                <label>Quantity</label>
                <input 
                    type="number" 
                    className="input" 
                    name="quantity"
                    required
                />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div>
                <label>Pick up Date</label>
                <input name="date" type="datetime-local" className="input" />
            </div>
          <div>
            <label className="contact">Contact Number</label>
          <input
            name="contact"
            type="number"
            className="input w-full"
            defaultValue={user?.contact || ''}
            required
          />
          </div>        
          </div>
            <div>
            <label className="">Location</label>
            <input
                name="location"
                type="text"
                className="input w-full"
                required
            />    
            </div>
          <div>
            <label className="name">Buyer Name</label>
          <input
            name="name"
            type="name"
            className="input w-full"
            readOnly
            defaultValue={user?.displayName}
          />
          </div>
          <div>
            <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input w-full"
            readOnly
            defaultValue={user?.email}
          />
          </div>

          <div className="modal-action">
            <button
              type="button"
              onClick={() => modalRef.current.close()}
              className="btn btn-outline btn-error rounded-lg px-3 py-1"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary rounded-lg px-3 py-1"
            >
              Adopt/Buy now
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
export default NewOrder;
