import React from "react";
import CardContent from "../CardContent/CardContent";
import tradionalSvg from "../../assets/Icons/Traditional.svg";
import tradionalCartoon from "../../assets/Icons/TraditionalCartoon.svg";
import AiSitesvg from "../../assets/Icons/AiSite.svg";
import AiCartoon from "../../assets/Icons/AiSiteCartoon.svg";
import vs from "../../assets/Icons/Vs.svg";
import logo from "../../assets/Icons/Logo.svg";
const AiPower = () => {
  const points = [
    "Manually finding leads.",
    "Writing every email from scratch.",
    "Inconsistent follow-ups.",
    "Manual meeting scheduling.",
    "Scaling means hiring.",
    "Burnout and fatigue.",
    "Generic messaging.",
  ];

  return (
    <section id="use-cases">
      <div className="text-center py-[80px]  md:px-[120px] bg-[#FEFAF6] ">
        <CardContent label="Our client’s" align="center" />
        <h2
          className={`text-3xl md:text-6xl font-medium text-[#242424] max-w-[72rem] mt-3 mx-auto leading-[100%] tracking-[-0.5px]`}
        >
          Traditional outreach vs AI-powered sales What’s the real difference?
        </h2>
        <div className=" relative flex flex-row pt-[60px] gap-[160px]">
          <div className="flex-1 bg-[#FAEBDC]  flex flex-col justify-between rounded-[24px]">
            <div className=" p-[30px]">
              <h2 className="text-4xl font-[500]  text-left text-[#242424] leading-[120%] tracking-[0.2px]">
                Traditional outreach
              </h2>
              <div className="border-t-[1px] border-[#DDD5D2] my-6 "></div>
              <p className="text-base   text-left mb-6 text-[#595959] leading-[130%] tracking-normal font-[400]">
                From endless back-and-forths to missed deadlines and hidden
                risks, traditional contact management is outdated. Our AI
                automates the heavy lifting—so your team can move faster, stay
                compliant, and focus on what matters.
              </p>
              <ul className="flex flex-col gap-4 text-lg text-[#595959] leading-[130%] tracking-normal font-[500] ">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <img src={tradionalSvg} alt="" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center mt-8  ">
              <img
                src={tradionalCartoon}
                alt="Stressed person"
                className=" xxl:w-[427.2px] xxl:h-[360.2px]  w-[400px] h-[320px] "
              />
            </div>
          </div>

          <div className="absolute top-[122px] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={vs} alt="VS" className="" />
          </div>

          <div className="flex-1 bg-[#FFFFFF]  flex flex-col justify-between rounded-[24px]">
            <div className=" p-[30px] ">
              <div className="flex flex-row gap-3">
                <img src={logo} alt="" className="w-[33.84px] h-[36px]" />
                <h2 className="text-4xl font-[500]  text-left text-[#242424] leading-[120%] tracking-[0.2px]">
                  With AI sales
                </h2>
              </div>

              <div className="border-t-[1px] border-[#DDD5D2] my-6 "></div>
              <p className="text-base   text-left mb-6 text-[#595959] leading-[130%] tracking-normal font-[400]">
                From endless back-and-forths to missed deadlines and hidden
                risks, traditional contract management is outdated. Our AI
                automates the heavy lifting—so your team can move faster, stay
                compliant, and focus on what matters.
              </p>
              <ul className="flex flex-col gap-4 text-lg text-[#595959] leading-[130%] tracking-normal font-[500] ">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <img src={AiSitesvg} alt="" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end mt-8 ">
              <img
                src={AiCartoon}
                alt="Stressed person"
                className="w-[325.73px] h-[398px] mr-[22px] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiPower;
