import React from "react";
import { Link } from "react-router";

const OutlineActionBtn = ({ value }) => {
  return (
    <button
        type="submit"
      className="
        btn
        btn-xs
        md:btn-sm
        btn-ghost
        shadow-none
        px-3 py-1 
        rounded-md 
        border-[#ce8d02]
        transition-all 
        duration-200 
        hover:shadow-sm
        hover:bg-gradient-to-r
        from-primary
        to-[#f7ebd0] 
        shadow-yellow-700
        hover:text-black
        hover:border-yellow-600
      "
    >
      {value}
    </button>
  );
};

export default OutlineActionBtn;
