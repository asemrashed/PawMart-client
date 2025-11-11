import React from "react";
import { Link } from "react-router";

const PrimaryBtn = ({ to, value }) => {
  return (
    <Link
      to={to}
      className="
        btn
        btn-sm
        md:btn-md
        shadow-none
        text-gray-700
        px-4 py-2 
        rounded-md 
        transition-all 
        duration-200 
        bg-gradient-to-b
        from-[#fae5a3] 
        to-primary
        hover:from-primary 
        hover:to-[#fae5a3]
        hover:shadow-md
        shadow-yellow-500
        border-0
        hover:-translate-y-[1px]
      "
    >
      {value}
    </Link>
  );
};

export default PrimaryBtn;
