import React from "react";
import { Link } from "react-router";

const SecondaryBtn = ({ to, value }) => {
  return (
    <Link
      to={to}
      className="
        btn
        btn-xs
        md:btn-sm
        shadow-none
        px-3 py-1 
        rounded-md 
        text-primary-content
        transition-all 
        duration-200 
        bg-gradient-to-b
        from-[#d1a71d] 
        to-[#f2d598]
        hover:shadow-md
        shadow-yellow-700
        hover:font-bold
        border-0
        hover:-translate-y-px
      "
    >
      {value}
    </Link>
  );
};

export default SecondaryBtn;
