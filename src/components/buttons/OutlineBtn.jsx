import React from "react";
import { Link } from "react-router";

const OutlineBtn = ({ to, value }) => {
  return (
    <Link
      to={to}
      className="
        btn
        btn-ghost
        btn-sm
        md:btn-md
        shadow-none
        px-4 py-2 
        rounded-md 
        border-primary
        border-2
        transition-all 
        duration-200 
        hover:shadow-md
        hover:bg-gradient-to-b
        from-primary
        to-[#f7ebd0] 
        shadow-yellow-700
        hover:text-gray-700
        hover:-translate-y-px
      "
    >
      {value}
    </Link>
  );
};

export default OutlineBtn;
