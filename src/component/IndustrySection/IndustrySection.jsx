import React, { useEffect, useRef } from "react";
import CardContent from "../CardContent/CardContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndustrySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const spansRefs = useRef([]);

  spansRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(spansRefs.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
        opacity: 0,
        y: 30,
        duration: 3,
        stagger: 0.1,
        ease: "power2.out",
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  const addToRefs = (el) => {
    if (el && !spansRefs.current.includes(el)) {
      spansRefs.current.push(el);
    }
  };

  return (
    <div className="lg:max-w-[1440px] w-full mx-auto" ref={sectionRef}>
      <div className="flex flex-col items-center justify-center bg-[#FEFAF6] lg:py-[80px] lg:px-[120px] md:py-[40px] md:px-[60px] py-[40px] px-[20px]">
        <div className="bg-[#FAEBDC] rounded-3xl text-center w-full overflow-hidden">
          {/* Heading */}
          <div className="py-[40px] lg:py-[80px] px-[20px] lg:px-[120px]">
            <CardContent label="INDUSTRIES WE SERVE" align="center" />
            <h2
              ref={headingRef}
              className="text-[20px] md:text-[36px] lg:text-[44px] font-[500] text-[#242424] mt-4 leading-[120%] tracking-[-0.5px] max-w-xl mx-auto"
            >
              Industry-specific expertise to drive your success
            </h2>
          </div>

          {/* First Row */}
          <div className="flex justify-center gap-[1vw]  ">
            <span
              ref={addToRefs}
              className="bg-[#FFBAB9] text-white px-[2vw] py-[0.8vw]     xll:px-[21px]   md:px-6 md:py-3 rounded-full text-[2vw] md:text-base font-medium lg:px-[14px] whitespace-nowrap"
            >
              Nonprofit
            </span>
            <span
              ref={addToRefs}
              className="bg-[#FFD37D] text-white px-[2vw] py-[0.8vw]      xll:px-[21px]   md:px-6 md:py-3 rounded-full text-[2vw] md:text-base font-medium lg:px-[14px] whitespace-nowrap ml-20 mr-16"
            >
              Tech Company
            </span>
          </div>

          {/* Second Row */}
          <div className="font-satoshi flex justify-center ">
            <span
              ref={addToRefs}
              className="bg-[#FFA37C] text-white px-[1.3vw] py-[1vw] lg:px-[14px]     xll:px-[21px]   md:py-3 xxl:!px-[40px] rounded-full text-[1.8vw] lg:text-base font-medium lg:px-[14px] whitespace-nowrap ml-2"
            >
              Consulting Firm
            </span>

            <span
              ref={addToRefs}
              className="bg-[#3758D3] text-white px-[1.3vw] py-[1vw] lg:px-[14px]     xll:px-[21px]    md:py-3 rounded-full xxl:!px-[40px]  text-[1.8vw] lg:text-base font-medium lg:px-[14px] whitespace-nowrap"
            >
              Corporate
            </span>
            <span
              ref={addToRefs}
              className="bg-[#76C6B3] text-white px-[1.3vw] py-[1vw] lg:px-[14px]      xll:px-[21px]   md:py-3 rounded-full xxl:!px-[40px]  text-[1.8vw] lg:text-base font-medium lg:px-[14px] whitespace-nowrap"
            >
              Small Business
            </span>
            <span
              ref={addToRefs}
              className="bg-[#70A2E1] text-white px-[1.3vw] py-[1vw] lg:px-[14px] md:py-3      xll:px-[21px]   xxl:!px-[40px]  rounded-full text-[1.8vw] lg:text-base font-medium lg:px-[14px] whitespace-nowrap"
            >
              E-commerce Store
            </span>
            <span
              ref={addToRefs}
              className="bg-[#3861F9] text-white px-[1.3vw] py-[1vw] lg:px-[14px] md:py-3 xxl:!px-[40px]      xll:px-[21px]    rounded-full text-[1.8vw] lg:text-base font-medium lg:px-[14px] whitespace-nowrap"
            >
              Startup
            </span>
            <span
              ref={addToRefs}
              className="bg-[#FE6037] text-white px-[1.3vw] py-[1vw] lg:px-[14px] md:py-3 xxl:!px-[40px]      xll:px-[21px]   rounded-full text-[1.8vw] lg:text-base font-medium lg:px-[14px] whitespace-nowrap rotate-[21deg] relative -top-[3vw] -left-[2.5vw] lg:-top-6 md:-left-7 lg:-left-[12px] xxl:-top-[2.25rem]"
            >
              Marketing Agency
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
