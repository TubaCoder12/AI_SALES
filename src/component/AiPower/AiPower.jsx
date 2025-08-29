import React from "react";
import CardContent from "../CardContent/CardContent";
import tradionalSvg from "../../assets/Icons/Traditional.svg";
import tradionalCartoon from "../../assets/Icons/TraditionalCartoon.svg";
import AiSitesvg from "../../assets/Icons/AiSite.svg";
import AiCartoon from "../../assets/Icons/AiSiteCartoon.svg";
import vs from "../../assets/Icons/Vs.svg";
import vsSm from "../../assets/Icons/VsSm.svg";
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
  const features = [
    "Automated lead discovery.",
    "AI-written, human-sounding emails.",
    "Smart, timed follow-ups.",
    "Calendar syncing and auto-scheduling.",
    "Scales with you.",
    "More time for high-impact work.",
    "Dynamic personalization.",
  ];

  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <section id="use-cases">
        <div
          className="
          text-center 
          py-[40px]
          px-[20px]
          md:py-16       
          lg:py-[120px]   
          md:px-[80px] 
          bg-[#FEFAF6]
        "
        >
          <CardContent label="Our client’s" align="center" />
          <h2 className="text-[30px] md:text-6xl font-medium text-[#242424] max-w-[72rem] mt-3 mx-auto leading-[120%] tracking-[-0.5px]">
            Traditional outreach vs AI-powered sales What’s the real difference?
          </h2>

          <div className="relative flex flex-col lg:flex-row pt-[40px] lg:pt-[60px] gap-[0px] md:gap-[0px] lg:gap-[160px]">
            {/* Traditional Outreach */}
            <div className="flex-1 bg-[#FAEBDC] flex flex-col justify-between rounded-[24px]">
              <div className="p-[30px]">
                <h2 className="text-[32px] md:text-4xl font-[500] text-left text-[#242424] leading-[120%] tracking-[0.2px]">
                  Traditional outreach
                </h2>
                <div className="border-t-[1px] border-[#DDD5D2] my-6"></div>
                <p className="text-base text-left mb-6 text-[#595959] leading-[130%] tracking-normal font-[400]">
                  From endless back-and-forths to missed deadlines and hidden
                  risks, traditional contact management is outdated. Our AI
                  automates the heavy lifting—so your team can move faster, stay
                  compliant, and focus on what matters.
                </p>
                <ul className="flex flex-col gap-4 text-lg text-[#595959] leading-[130%] tracking-normal font-[500]">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <img src={tradionalSvg} alt="" />
                      <span className="text-left">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center mt-8">
                <img
                  src={tradionalCartoon}
                  alt="Stressed person"
                  className="xxl:w-[427.2px] xxl:h-[360.2px] w-[300px] md:w-[400px] h-[260px] md:h-[320px]"
                />
              </div>
            </div>

            {/* VS Image (Responsive) */}
            <div
              className="
    flex justify-center  
    lg:absolute lg:top-[122px] lg:left-1/2 
    lg:-translate-x-1/2 lg:-translate-y-1/2 
    lg:my-0 w-full lg:w-auto
  "
            >
              {/* Mobile/Tablet (vsSm) */}
              <img
                src={vsSm}
                alt="VS Small"
                className="block lg:hidden w-[213.46px] h-auto"
              />
              {/* Desktop (vs) */}
              <img src={vs} alt="VS" className="hidden lg:block" />
            </div>

            {/* With AI Sales */}
            <div className="flex-1 bg-[#FFFFFF] gradient-border flex flex-col justify-between rounded-[24px]">
              <div className="p-[30px]">
                <div className="flex flex-row gap-3">
                  <img src={logo} alt="" className="w-[33.84px] h-[36px]" />
                  <h2 className="text-2xl md:text-4xl font-[500] text-left text-[#242424] leading-[120%] tracking-[0.2px]">
                    With AI sales
                  </h2>
                </div>

                <div className="border-t-[1px] border-[#DDD5D2] my-6"></div>
                <p className="text-base text-left mb-6 text-[#595959] leading-[130%] tracking-normal font-[400]">
                  From endless back-and-forths to missed deadlines and hidden
                  risks, traditional contract management is outdated. Our AI
                  automates the heavy lifting—so your team can move faster, stay
                  compliant, and focus on what matters.
                </p>
                <ul className="flex flex-col gap-4 text-lg text-[#595959] leading-[130%] tracking-normal font-[500]">
                  {features.map((point, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <img src={AiSitesvg} alt="" />
                      <span className="text-left">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end mt-8">
                <img
                  src={AiCartoon}
                  alt="AI person"
                  className="w-[240px] md:w-[325.73px] h-[300px] md:h-[398px] mr-[22px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiPower;
