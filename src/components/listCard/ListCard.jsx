import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";

const ListCard = ({ list }) => {
  return (
    <div className="bg-white/80 rounded-xl shadow-md p-4 flex flex-col justify-between gap-3 hover:-translate-y-1 duration-200">
      <div className="w-full h-60 md:h-80 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
        <img src={list.image} alt={list.title} className="w-full h-full object-cover"/>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold line-clamp-2 text-gray-800!">
            {list.title}
        </h3>
        <h3 className="text-md md:text-lg lg:text-xl font-semibold text-gray-800!">
            ${list.price}
        </h3>
      </div>
      <div className="flex items-center justify-between text-base lg:text-lg font-semibold text-gray-700">      
        <p>{list.category}</p>
        <p>{list.location}</p>
      </div>
      <PrimaryBtn to={`/pets&supplies/${list._id}`} value={'See Details'}/>
    </div>
  );
};

export default ListCard;
