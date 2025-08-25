import React from "react";
import logo from "../../assets/Icons/Logo.svg";
const Navbar = () => {
  return (
    <nav className="fixed top-5 left-1/2 z-50 -translate-x-1/2 xxl:w-[1280px] h-[64px] w-[1200px] flex items-center justify-between py-2 pr-2 pl-6 shadow-sm bg-[#FAEBDC] rounded-[32px]">
      {/* Logo / Brand */}
      <div className="flex items-center gap-2">
        <div className="w-[31px] h-[33px]">
          <img src={logo} alt="logo" />
        </div>
        <span className="font-[400] text-2xl leading-[130%] text-[#000000] font-pragati">
          AI SALES
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center space-x-8 font-[16px] leading-[130%]">
        <a href="#Challenges"> Challenges</a>
        <a href="#how-it-works">How it works</a>
        <a href="#use-cases">Use cases</a>
        <a href="#pricing">Pricing</a>
      </div>

      {/* Button */}
      <button className="bg-[#FE6037] text-white w-[140px] h-[48px] py-3 text-sm leading-[26px] rounded-[100px]">
        Let’s talk
      </button>
    </nav>
  );
};

export default Navbar;
