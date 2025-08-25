import React from "react";

const CardContent = ({ label, align }) => {
  return (
    <div className={`flex flex-col items-${align} text-${align} gap-4`}>
      {label && (
        <span className="bg-[#FE6037] text-white text-xs font-medium px-2 py-1 rounded leading-[16px] tracking-[1px] uppercase">
          {label}
        </span>
      )}
    </div>
  );
};

export default CardContent;
