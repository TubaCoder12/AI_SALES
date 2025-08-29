import React from "react";
import logo from "../../assets/Icons/Logo.svg";
import google from "../../assets/Icons/Google.svg";
import img1 from "../../assets/images/BackgroundImg1.jpg";
import img2 from "../../assets/images/BackgroundImg2.jpg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none bg-[#FEFAF6]">
        {/* Background Gradient */}
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
        <button className="w-full border text-[17px] font-medium leading-[25px] tracking-normal  border-[#E4E4E7] rounded-lg py-2 flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50">
          <img src={google} alt="Google" className="w-4 h-4" />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-[40px]">
          <hr className="md:w-[252.8px] w-[130.32px] border-[#E4E4E7]" />
          <span className="px-2 text-[#E4E4E7] text-sm">Or</span>
          <hr className="flex-grow  border-[#E4E4E7]" />
        </div>

        {/* Form */}
        <h2 className="text-[24.3px] font-bold leading-[32.49px] tracking-[-2.5%] mb-4">
          Sign in to your account
        </h2>

        <form className="space-y-[30px] rounded-lg  bg-white">
          <div>
            <label className="block text-sm  font-bold text-[#333333] leading-[20.3px] tracking-normal">
              Email
            </label>
            <input
              type="email"
              placeholder="Jane Doe"
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2 shadow-[0px_1.02px_2.03px_0px_#0000000D]  focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-sm  font-bold text-[#333333] leading-[20.3px] tracking-normal">
              Password
            </label>
            <input
              type="password"
              placeholder="Jane Doe"
              className="mt-2 w-full border border-gray-300 rounded-lg px-3 py-2  shadow-[0px_1.02px_2.03px_0px_#0000000D]  focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 ">
              <input
                type="checkbox"
                className="rounded text-sm  border border-[#E4E4E7] font-[500] text-[#333333] leading-[20.3px] tracking-normal"
              />
              Remember me
            </label>
            <Link
              to="/forget-password"
              className=" underline text-sm  font-[500] text-[#333333] leading-[20.3px] tracking-normal"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full text-sm   leading-[20.3px] tracking-normal bg-[#FE6037] text-white rounded-lg py-2 font-semibold shadow-[inset_0px_2px_0px_0px_#FFFFFF26"
          >
            Login
          </button>
        </form>

        <p className="text-sm  text-start font-inter font-[600] text-[#595959] leading-[20.3px] tracking-normal-6 mt-[30px] ">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#FE6037] font-[600] underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
