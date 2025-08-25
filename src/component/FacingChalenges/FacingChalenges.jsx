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
    <section
      id="Challenges"
      className="bg-[#FFFAF6] py-[80px]  md:px-[120px] flex flex-col md:flex-row items-center justify-between "
    >
      <div className="w-[500px] xxl:w-[570px]">
        <span className="bg-[#FE6037] text-white text-xs font-medium px-2 py-1 rounded leading-[16px] tracking-[1px] uppercase">
          Facing Challenges
        </span>

        <h2 className="text-[44px]  font-[500] text-[#242424] mt-4 leading-[120%] tracking-[-0.5px] ">
          Manual outreach work is slowing you down. <br />
          Here&apos;s how we&apos;re fixing it.
        </h2>

        <p className="text-[#595959] text-base  leading-[130%] tracking-normal font-[400] mt-5 mb-[30px]">
          Cold outreach is time-consuming and hard to scale. Writing emails,
          remembering follow-ups, and scheduling calls eat up your day —
          especially when you’re doing it all yourself. For busy founders and
          small teams, it quickly becomes a drain on time, energy, and growth.
        </p>

        <ul className="flex flex-col gap-3 text-lg leading-[130%] tracking-normal font-[500]">
          {features.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-orange-500 mr-2">—</span>
              {item}
            </li>
          ))}
        </ul>

        <button className=" mt-[30px] border-[#FE6037] border text-[#FE6037]  w-[140px] h-[48px] text-sm leading-[26px] rounded-[100px]">
          Learn More
        </button>
      </div>

      <div className="relative  w-[480px] xxl:w-[570px]">
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

        <div
          className="
    absolute 
    xxl:w-[240px]  xxl:h-[256px] 
    w-[200px] h-[200px]
    top-[-45px] left-[200px]    
    lg:left-[300px]            
    xl:left-[340px]            
    xxl:left-[368px]            
  "
        >
          <img src={img2} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
