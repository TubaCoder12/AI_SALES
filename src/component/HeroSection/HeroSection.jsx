import React from "react";
import CardContent from "../CardContent/CardContent";
import hero1 from "../../assets/images/Hero1.png";
import hero2 from "../../assets/images/Hero2.png";
import hero3 from "../../assets/images/Hero3.png";
import hero4 from "../../assets/images/Hero4.jpg";

const HeroSection = () => {
  const images = [
    {
      src: hero1,
      shape: "rounded-[1000px]",
      gradient:
        "linear-gradient(rgba(254, 96, 55, 0), rgb(254, 96, 55 ,0.3) 100%)",
      overlay: (
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#FEFAF6] to-transparent pointer-events-none z-10" />
      ),
    },
    {
      src: hero2,
      shape: "rounded-tl-[1000px] rounded-tr-[1000px]",
      gradient:
        "linear-gradient(to top, rgba(254, 96, 55, 0), rgb(254, 96, 55 ,0.3) 100%)",
    },
    {
      src: hero3,
      shape: "rounded-[1000px]",
      gradient:
        "linear-gradient(to bottom,rgba(254, 96, 55, 0), rgb(254, 96, 55 ,0.3) 100%)",
    },
    {
      src: hero4,
      shape: "rounded-tl-[1000px] rounded-tr-[1000px]",
      gradient:
        "linear-gradient(to top, rgba(254, 96, 55, 0), rgb(254, 96, 55 ,0.3) 100%)",
      overlay: (
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#FEFAF6] to-transparent pointer-events-none z-10" />
      ),
    },
  ];

  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <div className="bg-[#FEFAF6] pt-40">
        <CardContent label="business & solution" align="center" />

        {/* Heading + Text */}
        <div className="flex flex-col items-center text-center space-y-4 ">
          <h2 className="text-3xl md:text-6xl font-medium text-[#242424] md:max-w-3xl max-w-[324px] leading-[100%] tracking-[-0.5px] pt-3">
            Let AI handle outreach, So you can focus on closing
          </h2>
          <p className="md:max-w-[584px] max-w-[356px] pt-5 pb-[30px] text-base leading-[130%] font-[400] text-[#595959] ">
            Stop spending hours drafting cold emails and chasing leads. Our
            AI-powered sales assistant does the heavy lifting for you — from
            writing personalized outreach to scheduling meetings directly in
            your calendar.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-[#FE6037] text-white w-[140px] h-[48px] text-sm leading-[26px] rounded-[100px] hover:bg-[#e7542f] transition">
              Let’s talk
            </button>
            <button className="border-[#FE6037] border text-[#FE6037] w-[140px] h-[48px] text-sm leading-[26px] rounded-[100px] hover:bg-[#FE6037] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Images Section */}
        <div
          className="
          flex 
          md:flex-wrap md:justify-center 
          gap-3 py-20 relative 
          overflow-x-auto md:overflow-visible
          scrollbar-hide
        "
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative flex-shrink-0 w-[280px] h-[280px] lg:w-[230px] lg:h-[230px] md:w-[170px] md:h-[170px] l xxl:w-[335px] xxl:h-[335px] overflow-hidden group ${img.shape}`}
            >
              <img
                src={img.src}
                alt={`hero-${i}`}
                loading="lazy"
                className="w-full h-full object-cover opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-500"
              />
              <div
                className="absolute inset-0 z-10"
                style={{ background: img.gradient }}
              ></div>
              {img.overlay && img.overlay}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
