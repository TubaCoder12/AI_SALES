import React from "react";
import CardContent from "../CardContent/CardContent";

export default function IndustrySection() {
  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <div className="flex flex-col items-center justify-center bg-white lg:py-[80px] lg:px-[120px] md:py-[40px] md:px-[60px] py-[40px] px-[20px]">
        <div className="bg-orange-100 rounded-3xl text-center w-full">
          {/* Heading */}
          <div className="py-[40px] lg:py-[80px] px-[20px] lg:px-[120px]">
            <CardContent label="INDUSTRIES WE SERVE" align="center" />
            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-[500] text-[#242424] mt-4 leading-[120%] tracking-[-0.5px] max-w-4xl mx-auto">
              Industry-specific expertise to drive your success
            </h2>
          </div>
          <div>
            <div className="flex justify-center gap-[1vw] md:gap-4">
              <span className="bg-[#FFBAB9] text-white px-[2vw] py-[0.8vw] md:px-6 md:py-3 rounded-full text-[2vw] md:text-base font-medium lg:px-[14px] whitespace-nowrap">
                Nonprofit
              </span>
              <span className="bg-[#FFD37D] text-white px-[2vw] py-[0.8vw] md:px-6 md:py-3 rounded-full text-[2vw] md:text-base font-medium lg:px-[14px] whitespace-nowrap ml-20 mr-16">
                Tech Company
              </span>
            </div>
            <div className="font-satoshi flex justify-center">
              <span className="bg-[#FFA37C] text-white px-[1.3vw] py-[1vw] lg:px-[14px] md:py-3 xxl:!px-[40px] rounded-full text-[1.8vw] lg:text-base font-medium lg:px-[14px] whitespace-nowrap ml-2">
                Consulting Firm
              </span>

              <span className="bg-[#3758D3] text-white px-[1.3vw] py-[1vw] lg:px-[14px] md:py-3 rounded-full xxl:!px-[40px]  text-[1.8vw] lg:text-base font-medium lg:px-[14px] whitespace-nowrap">
                Corporate
              </span>
              <span className="bg-[#76C6B3] text-white px-[1.3vw] py-[1vw] lg:px-[14px] md:py-3 rounded-full xxl:!px-[40px]  text-[1.8vw] lg:text-base font-medium lg:px-[14px] whitespace-nowrap">
                Small Business
              </span>
              <span className="bg-[#70A2E1] text-white px-[1.3vw] py-[1vw] lg:px-[14px] md:py-3 xxl:!px-[40px]  rounded-full text-[1.8vw] lg:text-base font-medium lg:px-[14px] whitespace-nowrap">
                E-commerce Store
              </span>
              <span className="bg-[#3861F9] text-white px-[1.3vw] py-[1vw] lg:px-[14px] md:py-3 xxl:!px-[40px]   rounded-full text-[1.8vw] lg:text-base font-medium lg:px-[14px] whitespace-nowrap">
                Startup
              </span>
              <span className="bg-[#FE6037] text-white px-[1.3vw] py-[1vw] lg:px-[14px] md:py-3 xxl:!px-[40px]  rounded-full text-[1.8vw] lg:text-base font-medium lg:px-[14px] whitespace-nowrap rotate-[21deg] relative -top-[3vw] -left-[2.5vw] lg:-top-6 md:-left-7 lg:-left-[12px] xxl:-top-[2.25rem]">
                Marketing Agency
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
