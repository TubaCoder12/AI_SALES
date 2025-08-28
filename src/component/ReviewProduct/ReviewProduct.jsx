import React from "react";
import CardContent from "../CardContent/CardContent";
import sampleVideo from "../../assets/videos/video1.png"; // apna image path
import circle from "../../assets/Icons/Circle.svg"; // circular text wala svg

const ReviewProduct = () => {
  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <div className="flex flex-col items-center text-center gap-4 lg:py-[80px] lg:px-[120px]  md:py-[40px] md:px-[80px] py-[40px] px-[20px]  bg-[#FEFAF6]">
        {/* Label */}
        <CardContent label="PREVIEW THE PRODUCT" align="center" />

        {/* Title */}
        <h2 className="text-[30px] md:text-[40px] font-medium text-black md:max-w-xl max-w-[296px] text-center leading-[120%] tracking-[0px]">
          A modern interface built for outreach management
        </h2>

        {/* Video Preview Section */}
        <div className="relative rounded-[30px] overflow-hidden  aspect-video w-full max-w-[1200px] mt-[60px] border-[16px] border-[#FAEBDC] shadow-[0px_4px_100px_0px_rgba(254,96,55,0.24)] ">
          {/* Thumbnail image instead of video */}
          <img
            src={sampleVideo}
            alt="Product Preview"
            className="w-full h-full object-cover"
          />

          {/* Circle Button */}
          <div className="absolute inset-0 flex items-end justify-end">
            <div className="relative lg:w-40 lg:h-40 md:w-28 md:h-28 w-20 h-20 flex items-center justify-end ">
              {/* Rotating Circular Text Image */}
              <img
                src={circle}
                alt="Circular Text"
                className="w-full h-full animate-spin-slow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewProduct;
