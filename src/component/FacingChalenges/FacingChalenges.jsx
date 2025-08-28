import React from "react";
import img from "../../assets/images/FacingImg.png";
import img2 from "../../assets/images/FacingImg2.png";

export default function FacingChalenges() {
  const features = [
    "Comment and tag teammates directly within contracts",
    "Assign tasks and review notes in real-time",
    "Keep all communication contextually linked to clauses",
  ];

  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <section
        id="Challenges"
        className="bg-[#FFFAF6] py-[40px]  md:py-[80px] px-[20px] md:px-10 lg:px-[120px] flex flex-col md:flex-row items-center justify-between md:gap-10 gap-[78px]"
      >
        {/* Left Text Section */}
        <div className="w-full md:w-[500px] xxl:w-[570px]">
          <span className="bg-[#FE6037] text-white text-[10px] sm:text-xs font-medium px-2 py-1 rounded leading-[16px] tracking-[1px] uppercase">
            Facing Challenges
          </span>

          <h2 className=" text-[32px] lg:text-[44px] md:text-[30px] font-[500] text-[#242424] mt-4 leading-[120%] tracking-[-0.5px]">
            Manual outreach work is slowing you down. Here&apos;s how we&apos;re
            fixing it.
          </h2>

          <p className="text-[#595959] text-base leading-[130%] tracking-[-0.5px] font-[400] mt-4 sm:mt-5 mb-6 sm:mb-[30px]">
            Cold outreach is time-consuming and hard to scale. Writing emails,
            remembering follow-ups, and scheduling calls eat up your day —
            especially when you’re doing it all yourself. For busy founders and
            small teams, it quickly becomes a drain on time, energy, and growth.
          </p>

          <ul className="flex flex-col gap-2 sm:gap-3 text-lg leading-[130%] tracking-normal font-[500]">
            {features.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-2">—</span>
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-6 sm:mt-[30px] border-[#FE6037] border text-[#FE6037] w-[120px] sm:w-[140px] h-[42px] sm:h-[48px] text-sm leading-[26px] rounded-[100px]">
            Learn More
          </button>
        </div>

        {/* Right Image Section */}
        <div className="relative  w-[320px] md:w-[480px] xxl:w-[570px]">
          <img
            src={img}
            alt="Outreach Work"
            className="rounded-xl w-full object-cover grayscale"
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(254, 96, 55, 0), rgb(254, 96, 55 ,0.3) 100%)",
            }}
          ></div>

          {/* Floating Image */}
          <div
            className="
            absolute 
            w-[186px] h-[198px] 
            md:w-[200px] md:h-[200px] 
            xxl:w-[240px] xxl:h-[256px] 
             top-[-93px] md:top-[-92px] 
             lg:top-[-81px]
            left-[143px] md:left-[154px] 
            lg:left-[225px] xl:left-[340px] xxl:left-[368px]
          "
          >
            <img src={img2} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
