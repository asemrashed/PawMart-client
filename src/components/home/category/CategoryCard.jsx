import React from "react";
import { useNavigate } from "react-router";
import OutlineBtn from "../../buttons/OutlineBtn";

const CategoryCard = ({category}) => {
  const navigate = useNavigate()
  const { name, image} = category
  return (
    <div onClick={()=> navigate(`/pets&supplies/?category=${name}`)} className="card card-sm shadow-sm bg-white cursor-pointer hover:-translate-y-1.5 transition duration-200">
      <div className="card-body">
        <figure>
          <img src={image} alt="image" className="rounded-md w-full h-60 object-cover " />
        </figure>
        <OutlineBtn to={`/pets&supplies/?category=${name}`} value={name}/>
      </div>
    </div>
  );
};

export default CategoryCard;
