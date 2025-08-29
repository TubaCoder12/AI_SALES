import React from "react";
import CardContent from "../CardContent/CardContent";

const steps = [
  {
    id: 1,
    title: "Reach out",
    desc: "We start by understanding your goals and creating a clear, actionable plan tailored to your needs.",
  },
  {
    id: 2,
    title: "Follow up",
    desc: "We start by understanding your goals and creating a clear, actionable plan tailored to your needs.",
  },
  {
    id: 3,
    title: "Book meetings",
    desc: "We start by understanding your goals and creating a clear, actionable plan tailored to your needs.",
  },
  {
    id: 4,
    title: "Scale more",
    desc: "We start by understanding your goals and creating a clear, actionable plan tailored to your needs.",
  },
];

const HowItWorks = () => {
  return (
    <div className="lg:max-w-[1440px] w-full mx-auto">
      <section
        id="how-it-works"
        className="bg-[#FEFAF6] py-[40px] px-[20px] md:py-[60px] md:px-[80px] lg:py-[80px] lg:px-[120px]"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gird-cols-1 gap-12 lg:items-start item-center">
          {/* Left Content */}
          <div>
            <CardContent label="how it works" align="start" />

            <h2 className="text-[32px] md:text-[44px] font-[500] text-[#242424] mt-4 leading-[120%] tracking-[-0.5px] max-w-4xl">
              A streamline approach for lasting results. Here's how we're
              working.
            </h2>

            <p className="text-[#595959] text-base leading-[130%] tracking-normal font-[400] mt-5 ">
              Cold outreach is time-consuming and hard to scale. Writing emails,
              remembering follow-ups, and scheduling calls eats up your day.
            </p>
            <button className="mt-[30px] border-[#FE6037] border text-[#FE6037]  w-[140px] h-[48px] text-sm leading-[26px] rounded-[100px] hover:bg-[#FE6037] hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Right Steps */}
          <div className="flex flex-col md:flex-row lg:flex-col gap-[30px] flex-wrap">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex items-start bg-[#FAEBDC] rounded-[24px] p-[30px] flex-1
                  transition-all duration-500 transform hover:scale-[1.05] hover:shadow-2xl hover:bg-[#FE6037] group cursor-pointer"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FE6037] text-white font-semibold text-base shrink-0 mr-4 
                  transition-all duration-500 group-hover:bg-white group-hover:text-[#FE6037]"
                >
                  {step.id}
                </div>

                <div>
                  <h3
                    className="font-[500] text-2xl leading-[28.8px] tracking-normal 
                    transition-all duration-500 group-hover:text-white"
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-[400] leading-[28px] tracking-normal text-[#333333] text-base mt-[19px] 
                    transition-all duration-500 group-hover:text-[#fdfdfd]"
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
