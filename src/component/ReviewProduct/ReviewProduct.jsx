import React from "react";
import CardContent from "../CardContent/CardContent";
import sampleVideo from "../../assets/videos/video1.png"; // apna image path
import circle from "../../assets/Icons/Circle.svg"; // circular text wala svg

const ReviewProduct = () => {
  return (
    <div className="flex flex-col items-center text-center gap-4 py-[80px] px-[120px] bg-[#FEFAF6]">
      {/* Label */}
      <CardContent label="PREVIEW THE PRODUCT" align="center" />

      {/* Title */}
      <h2 className="text-3xl md:text-[40px] font-medium text-black max-w-xl text-center leading-[52.8px] tracking-[0px]">
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
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-40 h-40 flex items-center justify-center top-[201px] left-[431px] xxl:top-[245px] xxl:left-[514px]">
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
  );
};

export default ReviewProduct;
