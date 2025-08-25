import React from "react";
import LogoSlider from "../LogoSlider/LogoSlider";

const OurClient = () => {
  return (
    <div
      className={`flex flex-col items-center text-center gap-4  py-[80px]  px-[120px] bg-[#FE6037]`}
    >
      {/* Label */}

      <span className="bg-[white] text-[#FE6037] text-xs font-medium px-2 py-1 rounded leading-[16px] tracking-[1px] uppercase">
        Our client’s
      </span>

      {/* Title */}
      <h2
        className={`text-3xl md:text-[40px] font-medium text-white max-w-xl text-center leading-[52.8px] tracking-[0px] `}
      >
        Trusted by high-growth startups across industries
      </h2>
      <LogoSlider />
    </div>
  );
};

export default OurClient;
