import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import OurClient from "../OurClient/OurClient";
import FacingChalenges from "../FacingChalenges/FacingChalenges";
import HowItWorks from "../HowItWork/HowItWorks";
import AiPower from "../AiPower/AiPower";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import TransformingBussiness from "../TransformingBussiness/TransformingBussiness";
import IndustrySection from "../IndustrySection/IndustrySection";
import CaseStudies from "../CaseStudy/CaseStudy";
import CTASection from "../CTASection/CTASection";
import TestimonialsSlider from "../Testimonail/Testimonail";

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurClient />
      <FacingChalenges />
      <AiPower />
      <HowItWorks />
      <ReviewProduct />
      <TransformingBussiness />
      <IndustrySection />

      <TestimonialsSlider />
      <CaseStudies />
      <CTASection />
    </>
  );
};

export default Home;
