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
    <section id="how-it-works" className="bg-[#FEFAF6] py-[80px]  px-[120px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <CardContent label="how it works" align="start" />

          <h2 className="text-[44px] font-[500] text-[#242424] mt-4 leading-[120%]  tarcking-[-0.5px] max-w-4xl">
            A streamline approach for lasting results. <br />
            Here's how we're working.
          </h2>

          <p className="text-[#595959] text-base  leading-[130%] tracking-normal font-[400] mt-5 ">
            Cold outreach is time-consuming and hard to scale. Writing emails,
            remembering follow-ups, and scheduling calls eats up your day.
          </p>
          <button className=" mt-[30px] border-[#FE6037] border text-[#FE6037]  w-[140px] h-[48px] text-sm leading-[26px] rounded-[100px]">
            Learn More
          </button>
        </div>

        {/* Right Steps */}
        <div className=" gap-[30px] flex flex-col">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex items-start bg-[#FAEBDC] rounded-[24px] p-[30px]"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FE6037] text-white font-semibold text-base shrink-0 mr-4">
                {step.id}
              </div>

              <div>
                <h3 className="font-[500] text-2xl leading-[28.8px] tracking-normal ">
                  {step.title}
                </h3>
                <p className="font-[400]  leading-[28px] tracking-normal  text-base mt-[19px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
