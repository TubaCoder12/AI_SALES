import React, { useEffect, useRef } from "react";
import CardContent from "../CardContent/CardContent";
import hero1 from "../../assets/images/Hero1.png";
import hero2 from "../../assets/images/Hero2.png";
import hero3 from "../../assets/images/Hero3.png";
import hero4 from "../../assets/images/Hero4.jpg";
import { gsap } from "gsap";

const HeroSection = () => {
  const paraRef = useRef(null);
  const buttonsRef = useRef([]);
  const imagesRef = useRef([]);
  const headingWordsRef = useRef([]);

  const headingText = "Let AI handle outreach, So you can focus on closing";

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

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.6 },
    });

    // Animate heading words one by one
    tl.fromTo(
      headingWordsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.1 }
    )
      // Paragraph
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        "-=0.3"
      )
      // Buttons
      .fromTo(
        buttonsRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, stagger: 0.2 },
        "-=0.3"
      )
      // Images
      .fromTo(
        imagesRef.current,
        { opacity: 0, y: 60, rotate: 10 },
        { opacity: 1, y: 0, rotate: 0, stagger: 0.25 },
        "-=0.2"
      );
  }, []);

  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <div className="bg-[#FEFAF6] pt-40">
        <CardContent label="business & solution" align="center" />

        {/* Heading + Text */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl md:text-6xl font-medium text-[#242424] md:max-w-3xl max-w-[324px] leading-[100%] tracking-[-0.5px] pt-3">
            {headingText.split(" ").map((word, i) => (
              <span
                key={i}
                ref={(el) => (headingWordsRef.current[i] = el)}
                className="inline-block opacity-0 mr-2"
              >
                {word}
              </span>
            ))}
          </h2>

          <p
            ref={paraRef}
            className="md:max-w-[584px] max-w-[356px] pt-5 pb-[30px] text-base leading-[130%] font-[400] text-[#595959]"
          >
            Stop spending hours drafting cold emails and chasing leads. Our
            AI-powered sales assistant does the heavy lifting for you — from
            writing personalized outreach to scheduling meetings directly in
            your calendar.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              ref={(el) => (buttonsRef.current[0] = el)}
              className="bg-[#FE6037] text-white w-[140px] h-[48px] text-sm leading-[26px] rounded-[100px] hover:bg-[#e7542f] transition"
            >
              Let’s talk
            </button>
            <button
              ref={(el) => (buttonsRef.current[1] = el)}
              className="border-[#FE6037] border text-[#FE6037] w-[140px] h-[48px] text-sm leading-[26px] rounded-[100px] hover:bg-[#FE6037] hover:text-white transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Images Section */}
        <div
          className="
          flex 
          md:flex-wrap md:justify-center 
          gap-3 md:py-20 py-[40px] relative 
          overflow-x-auto md:overflow-visible
          scrollbar-hide
        "
        >
          {images.map((img, i) => (
            <div
              key={i}
              ref={(el) => (imagesRef.current[i] = el)}
              className={`relative flex-shrink-0 w-[280px] xll:w-[280px] xll:h-[280px] h-[280px] lg:w-[230px] lg:h-[230px] md:w-[170px] md:h-[170px]  xxl:w-[335px] xxl:h-[335px] overflow-hidden group ${img.shape}`}
            >
              <img
                src={img.src}
                alt={`hero-${i}`}
                loading="lazy"
                className="w-full h-full object-cover grayscale"
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
