import React from "react";

const PrimaryActionBtn = ({ action, value }) => {
  return (
    <button
      onClick={action}
      className="
        btn
        btn-xs
        md:btn-sm
        shadow-none
        text-gray-700
        px-3 py-1 
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
    </button>
  );
};

export default PrimaryActionBtn;
