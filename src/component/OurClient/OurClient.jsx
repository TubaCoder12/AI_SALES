import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import logo1 from "../../assets/Icons/Logoispm1.svg";
import logo2 from "../../assets/Icons/Logoispm2.svg";
import companyLogo from "../../assets/Icons/Company.svg";
import startup from "../../assets/Icons/Startup.svg";
import divider from "../../assets/Icons/Divider.svg";

const OurClient = () => {
  const titleRef = useRef(null);
  const taglineRef = useRef(null);

  const logos = [logo1, logo2, companyLogo, startup];

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Tagline animation (after title)
    gsap.fromTo(
      taglineRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      }
    );
  }, []);

  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <div className="py-12 sm:py-16 md:py-[80px] px-4 sm:px-6 md:px-10 lg:px-[12px] bg-[#FE6037]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="bg-white text-[#FE6037] text-[10px] sm:text-xs font-medium px-2 py-1 rounded leading-[16px] tracking-[1px] uppercase">
            Our client’s
          </span>

          {/* Title */}
          <h2
            ref={titleRef}
            className="text-3xl lg:text-[40px] font-medium text-white max-w-[318px] md:max-w-[432px] lg:max-w-xl text-center leading-snug md:leading-[52.8px]"
          >
            Trusted by high-growth startups across industries
          </h2>
        </div>

        {/* Logo Slider */}
        <div className="overflow-hidden mt-[30px]">
          <div className="flex w-max animate-scroll">
            {logos.concat(logos).map((logo, i, arr) => (
              <div
                key={i}
                className="flex items-center flex-shrink-0 px-4 sm:px-6 md:px-8"
              >
                <img
                  src={logo}
                  alt={`logo-${i}`}
                  className="h-[38px] w-auto object-contain grayscale"
                />
                {i !== arr.length - 1 && (
                  <img
                    src={divider}
                    alt="divider"
                    className="h-8 mx-2 object-contain flex-shrink-0"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
