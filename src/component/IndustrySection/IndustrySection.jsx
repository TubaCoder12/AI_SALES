import React from "react";
import CardContent from "../CardContent/CardContent";

const industries = [
  { name: "Nonprofit", color: "bg-pink-200" },
  { name: "Consulting Firm", color: "bg-orange-200" },
  { name: "Corporate", color: "bg-blue-600 text-white" },
  { name: "Small Business", color: "bg-green-200" },
  { name: "E-commerce Store", color: "bg-blue-200" },
  { name: "Startup", color: "bg-blue-600 text-white" },
  { name: "Tech Company", color: "bg-yellow-200" },
  { name: "Marketing Agency", color: "bg-red-400 text-white" },
];

export default function IndustrySection() {
  return (
    <div className="flex flex-col items-center justify-center  bg-white py-[80px] px-[120px] ">
      <div className="bg-orange-100 rounded-3xl    mx-auto   text-center">
        <div className="py-[80px] px-[220px]">
          <CardContent label="INDUSTRIES WE SERVE" align="center" />

          <h2 className="text-[44px] text-center font-[500] mx-auto text-[#242424] mt-4 leading-[120%]  tarcking-[-0.5px] max-w-4xl">
            Industry-specific expertise to drive your success
          </h2>
        </div>

        <div className="flex  items-end   px-[30px]  mt-6 relative  text-[16.88px] leading-[28px] text-white ">
          <span className="absolute left-[6rem] xxl:-top-[76px] -top-[60px] py-[15px] px-[28px] xxl:py-[23.01px] xxl:px-[40.01px] rounded-full bg-[#FFBAB9] font-medium shadow">
            Nonprofit
          </span>
          <span className="  rounded-full bg-[#FFA37C] text-white font-medium py-[15px] px-[28px] xxl:py-[23.01px] xxl:px-[40.01px] ">
            Consulting Firm
          </span>
          <span className="xx:py-[23.01px] xxl:px-[40.01px] py-[15px] px-[28px] rounded-full bg-[#3758D3] text-white font-medium shadow">
            Corporate
          </span>
          <span className="xxl:py-[23.01px] xxl:px-[40.01px] py-[15px] px-[28px] rounded-full bg-[#76C6B3] font-medium shadow">
            Small Business
          </span>
          <span className=" xxl:py-[23.01px] xxl:px-[40.01px]  py-[15px] px-[28px] rounded-full bg-[#70A2E1] font-medium shadow">
            E-commerce Store
          </span>
          <span className="xxl:py-[23.01px] xxl:px-[40.01px]  py-[15px] px-[28px] rounded-full bg-[#3861F9] text-white font-medium shadow">
            Startup
          </span>
          <span className="absolute right-[288px] xxl:-top-[76px]  -top-[60px] py-[15px] px-[28px] xxl:py-[23.01px]  xxl:px-[40.01px] rounded-full bg-[#FFD37D] font-medium shadow text-black">
            Tech Company
          </span>
          <span className="absolute right-[32px] bottom-[28px] rotate-[19.84deg]  py-[15px] px-[28px] xxl:py-[23.01px]  xxl:px-[47px] rounded-full bg-[#FE6037] text-white font-medium shadow">
            Marketing Agency
          </span>
        </div>
      </div>
    </div>
  );
}
