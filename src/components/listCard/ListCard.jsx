import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";

const ListCard = ({ list }) => {
  return (
    <div className="bg-white/50 rounded-xl shadow-md p-4 flex flex-col justify-between gap-3 hover:-translate-y-1 duration-200">
      <div className="w-full h-50 md:h-40 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
        <img src={list.image} alt={list.title} className="w-full h-full object-cover"/>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-md md:text-lg lg:text-xl font-semibold line-clamp-2 text-gray-800!">
            {list.title}
        </h3>
        <h3 className="text-md md:text-lg lg:text-xl font-semibold text-gray-800!">
            ${list.price}
        </h3>
      </div>
      <div className="flex items-center justify-between text-sm lg:text-md font-semibold text-gray-700">      
        <p>{list.category}</p>
        <p>{list.location}</p>
      </div>
      <PrimaryBtn to={`/pets&supplies/${list._id}`} value={'See Details'}/>
    </div>
  );
};

export default ListCard;
