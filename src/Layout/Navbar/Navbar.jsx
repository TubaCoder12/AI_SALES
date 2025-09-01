import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/Icons/Logo.svg";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { gsap } from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const logoRef = useRef(null);
  const logoTextRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    // Timeline banaya taake sab sequence me animate ho
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power2.out" },
    });

    // Logo + Text
    tl.fromTo(logoRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      .fromTo(
        logoTextRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0 },
        "-=0.3" // overlap thoda
      )
      // Links stagger
      .fromTo(
        linksRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "-=0.2"
      );
  }, []);

  return (
    <nav className="fixed top-5 left-1/2 z-50 -translate-x-1/2 xxl:w-[1280px] w-[358px] h-[64px] md:w-[742px] lg:w-[995px] flex items-center justify-between py-2 pr-2 pl-6 shadow-sm bg-[#FAEBDC] rounded-[32px]">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Logo + Text */}
      <div className="flex items-center gap-2">
        <div className="w-[31px] h-[33px]" ref={logoRef}>
          <img src={logo} alt="logo" />
        </div>
        <span
          ref={logoTextRef}
          className="font-[400] md:text-2xl text-[22px] leading-[130%] text-[#000000] font-pragati"
        >
          AI SALES
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-8 font-[16px] leading-[130%]">
        {["Challenges", "How it works", "Use cases", "case study"].map(
          (text, i) => (
            <a
              key={i}
              href={`#${text.replace(/\s+/g, "-").toLowerCase()}`}
              ref={(el) => (linksRef.current[i] = el)}
            >
              {text}
            </a>
          )
        )}
      </div>

      {/* Button (Login) */}
      <Link
        to="/login"
        className="block bg-[#FE6037] text-white w-[140px] h-[48px] py-3 text-sm leading-[26px] rounded-[100px] text-center"
      >
        Login
      </Link>

      {/* Mobile Drawer */}
      {open && (
        <div className="absolute top-[72px] left-0 w-full bg-[#FAEBDC] flex flex-col items-start px-[20px] space-y-4 py-6 md:hidden rounded-b-2xl shadow-md">
          <a href="#Challenges" onClick={() => setOpen(false)}>
            Challenges
          </a>
          <a href="#how-it-works" onClick={() => setOpen(false)}>
            How it works
          </a>
          <a href="#use-cases" onClick={() => setOpen(false)}>
            Use cases
          </a>
          <a href="#useStudy" onClick={() => setOpen(false)}>
            use study
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
