import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import img from "../../assets/images/FacingImg.png";
import img2 from "../../assets/images/FacingImg2.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FacingChalenges() {
  const features = [
    "Comment and tag teammates directly within contracts",
    "Assign tasks and review notes in real-time",
    "Keep all communication contextually linked to clauses",
  ];

  // Refs
  const sectionRef = useRef(null);
  const taglineRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const listRefs = useRef([]);
  const btnRef = useRef(null);
  const mainImgRef = useRef(null);
  const floatingImgRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
      scrollTrigger: {
        trigger: sectionRef.current, // jab section viewport me aaye
        start: "top 80%", // jab section ka top 80% viewport me aaye
        toggleActions: "play none none none",
        // play = jab aaye animation chale
        // none = dobara scroll back pe repeat na ho
      },
    });

    tl.fromTo(taglineRef.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0 })
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "-=0.5"
      )
      .fromTo(
        paraRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        "-=0.4"
      )
      .fromTo(
        listRefs.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.2 },
        "-=0.4"
      )
      .fromTo(
        btnRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        "-=0.3"
      )
      .fromTo(
        mainImgRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1 },
        "-=0.6"
      )
      .fromTo(
        floatingImgRef.current,
        { opacity: 0, y: -50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1 },
        "-=0.5"
      );
  }, []);

  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <section
        id="Challenges"
        ref={sectionRef}
        className="bg-[#FFFAF6] py-[40px] md:py-[80px] px-[20px] md:px-10 lg:px-[120px] flex flex-col md:flex-row items-center justify-between md:gap-10 gap-[78px]"
      >
        {/* Left Text Section */}
        <div className="w-full md:w-[500px] xxl:w-[570px]">
          <span
            ref={taglineRef}
            className="bg-[#FE6037] text-white text-[10px] sm:text-xs font-medium px-2 py-1 rounded leading-[16px] tracking-[1px] uppercase"
          >
            Facing Challenges
          </span>

          <h2
            ref={titleRef}
            className=" text-[32px] lg:text-[44px] md:text-[30px] font-[500] text-[#242424] mt-4 leading-[120%] tracking-[-0.5px]"
          >
            Manual outreach work is slowing you down. Here&apos;s how we&apos;re
            fixing it.
          </h2>

          <p
            ref={paraRef}
            className="text-[#595959] text-base leading-[130%] tracking-[-0.5px] font-[400] mt-4 sm:mt-5 mb-6 sm:mb-[30px]"
          >
            Cold outreach is time-consuming and hard to scale. Writing emails,
            remembering follow-ups, and scheduling calls eat up your day —
            especially when you’re doing it all yourself. For busy founders and
            small teams, it quickly becomes a drain on time, energy, and growth.
          </p>

          <ul className="flex flex-col gap-2 sm:gap-3 text-lg leading-[130%] tracking-normal font-[500]">
            {features.map((item, index) => (
              <li
                key={index}
                ref={(el) => (listRefs.current[index] = el)}
                className="flex items-start"
              >
                <span className="text-orange-500 mr-2">—</span>
                {item}
              </li>
            ))}
          </ul>

          <button
            ref={btnRef}
            className="mt-6 sm:mt-[30px] border-[#FE6037] border text-[#FE6037] w-[120px] sm:w-[140px] h-[42px] sm:h-[48px] text-sm leading-[26px] rounded-[100px]"
          >
            Learn More
          </button>
        </div>

        {/* Right Image Section */}
        <div className="relative w-[320px] md:w-[480px] xxl:w-[570px]">
          <img
            ref={mainImgRef}
            src={img}
            alt="Outreach Work"
            className="rounded-xl w-full object-cover grayscale"
          />
          <div
            ref={mainImgRef}
            className="absolute inset-0 z-10 rounded-xl"
            style={{
              background:
                "linear-gradient(to bottom, rgba(254, 96, 55, 0), rgb(254, 96, 55 ,0.3) 100%)",
            }}
          ></div>

          {/* Floating Image */}
          <div
            ref={floatingImgRef}
            className="absolute 
            w-[186px] h-[198px] 
            md:w-[200px] md:h-[200px] 
            xxl:w-[240px] xxl:h-[256px] 
            top-[-93px] md:top-[-92px] 
            lg:top-[-65px]
            left-[143px] md:left-[154px] 
            lg:left-[225px] xl:left-[340px] xxl:left-[368px]
            xxl:top-[-53px]"
          >
            <img src={img2} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
