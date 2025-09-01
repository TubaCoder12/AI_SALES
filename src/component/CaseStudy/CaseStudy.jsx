import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardContent from "../CardContent/CardContent";
import img1 from "../../assets/images/caseStudy1.png";
import img2 from "../../assets/images/caseStudy2.png";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudies() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate the button
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.2,
        ease: "power2.out",
      });

      // Animate the cards with stagger
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  const addCardToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div
      id="case-study"
      className="lg:max-w-[1440px] w-full mx-auto"
      ref={sectionRef}
    >
      <section className="bg-[#fff7f5] lg:py-[80px] lg:px-[120px]  md:py-[40px] md:px-[80px] py-[40px] px-[20px]">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-end md:justify-between gap-6">
          <div>
            <CardContent label="Case study" align="start" />
            <h2
              ref={headingRef}
              className="text-[32px] sm:text-[36px] lg:text-[44px] text-left font-[500] text-[#242424] mt-4 leading-[120%] tracking-[-0.5px] max-w-[295px] md:max-w-2xl"
            >
              Client success stories through our solutions
            </h2>
            <p className="text-[16px] font-normal mt-3 leading-[130%] max-w-3xl ">
              Cold outreach is time-consuming and hard to scale. Writing emails,
              remembering follow-ups, and scheduling calls eats up your day.
            </p>
          </div>

          <button
            ref={buttonRef}
            className=" self-start flex flex-row lg:self-auto text-[#ff5722] border border-[#ff5722] rounded-full px-6 py-2 font-medium hover:bg-[#ff5722] hover:text-white transition "
          >
            Explore all
          </button>
        </div>

        {/* Cards Section */}
        <div className="mt-12 grid md:grid-cols-2 xxl:gap-[170px] gap-[30px]">
          {/* Card 1 */}
          <div ref={addCardToRefs}>
            <div className="relative rounded-[20px] w-full xxl:w-[654px] overflow-hidden">
              <img
                src={img2}
                alt="Healthcare"
                className="h-[385px] w-full xxl:w-[654px] object-cover grayscale"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(254,96,55,0)] to-[rgba(254,96,55,0.3)]"></div>
            </div>

            {/* Content outside */}
            <div className="py-4">
              <CardContent label="Healthcare" align="start" />
              <h3 className="mt-4 text-[30px] md:text-[28px] lg:text-[30px] font-[500] text-[#242424] leading-[130%] tracking-normal">
                Making an Impact: Transforming a Healthcare Platform's Rebuild
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div ref={addCardToRefs}>
            <div className="relative rounded-[20px] w-full xxl:w-[516px] overflow-hidden">
              <img
                src={img1}
                alt="Startup"
                className="h-[385px] w-full xxl:w-[516px] object-cover grayscale"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(254,96,55,0)] to-[rgba(254,96,55,0.3)]"></div>
            </div>

            {/* Content outside */}
            <div className="py-4">
              <CardContent label="Startup" align="start" />
              <h3 className="mt-4 text-[30px] md:text-[28px] lg:text-[30px] font-[500] text-[#242424] leading-[130%] tracking-normal">
                Optimizing Conversions: A Tech Startup's Leap
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
