import React from "react";
import CardContent from "../CardContent/CardContent";

const stats = [
  {
    value: "3 + Years",
    label: "Proven Experience",
  },
  {
    value: "11 + Clients",
    label: "Trusted Partnerships",
  },
  {
    value: "41+",
    label: "Project Impactful Results",
  },
];

export default function TransformingBussiness() {
  return (
    <>
      <div className="bg-[#FEFAF6] py-[80px] px-[120px] ">
        <CardContent label="WHO WE ARE" align="center" />
        <h2 className="text-[44px] font-[500] text-[#242424] mt-4 leading-[120%] mx-auto text-center tarcking-[-0.5px] max-w-xl">
          Transforming businesses with expertise
        </h2>
        <div className=" py-10 flex ">
          <div className="flex flex-col md:flex-row gap-[10px] md:gap-6  w-full ">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex-1 bg-[#FE6037] text-white rounded-[24px] py-10 px-[30px] text-center"
              >
                <h3 className="text-[40px]  font-[500] mb-2 leading-[60px] tracking-normal">
                  {item.value}
                </h3>
                <p className="text-[20px] font-[500] leading-[28px]  tracking-[0%]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
