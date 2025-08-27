import React from "react";
import logo from "../../assets/Icons/Logo.svg";

import img1 from "../../assets/images/BackgroundImg1.jpg";
import img2 from "../../assets/images/BackgroundImg2.jpg";
import { Link } from "react-router-dom";

export default function ForgetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center  relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none bg-[#FEFAF6]">
        <img
          alt="Background gradient"
          className="w-full h-full object-cover"
          src={img1}
          style={{
            height: "70%",
            clipPath: "polygon(0px 0px, 100% 0px, 100% 6%, 0px 100%)",
          }}
        />

        {/* Background Noise */}
        <img
          alt="Background noise"
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-25"
          src={img2}
          style={{
            height: "70%",
            clipPath: "polygon(0px 0px, 100% 0px, 100% 6%, 0px 100%)",
          }}
        />
      </div>

      {/* Card */}
      <div className="relative bg-white rounded-[30px] w-[600px] lg:py-[40px] lg:px-[80px]  px-[20px] py-[20px] my-[151.8px] xxl:mx-auto  mx-[20px] shadow-[0px_4.06px_101.52px_0px_#FE603740]">
        <div className="flex items-center gap-2 mb-[30px]">
          <div className="w-[44px] h-[47px]">
            <img src={logo} alt="logo" />
          </div>
          <span className="font-[400] text-[34.52px] leading-[130%] text-[#000000] font-pragati">
            AI SALES
          </span>
        </div>

        {/* Google Button */}

        {/* Form */}
        <h2 className="text-[24.3px] font-bold leading-[32.49px] tracking-[-2.5%] mb-[10px]">
          Reset your password{" "}
        </h2>
        <p className="mb-[30px] text-base font-normal leading-[130%] tracking-normal  ">
          Enter your email we’ll sent you a link to reset your password.
        </p>
        <form className="space-y-[30px] rounded-lg  bg-white">
          <div>
            <label className="block text-sm  font-bold text-[#333333] leading-[20.3px] tracking-normal">
              Email
            </label>
            <input
              type="email"
              placeholder="e.g janedoe@example.com"
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 shadow-[0px_1.02px_2.03px_0px_#0000000D]  focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full text-sm   leading-[20.3px] tracking-normal bg-[#FE6037] text-white rounded-lg py-2 font-semibold shadow-[inset_0px_2px_0px_0px_#FFFFFF26"
          >
            Reset Password
          </button>
        </form>

        <p className="text-sm  text-start font-inter font-[600] text-[#595959] leading-[20.3px] tracking-normal-6 mt-[30px] ">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FE6037] font-[600] underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
