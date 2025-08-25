import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import OurClient from "../OurClient/OurClient";
import FacingChalenges from "../FacingChalenges/FacingChalenges";
import HowItWorks from "../HowItWork/HowItWorks";
import AiPower from "../AiPower/AiPower";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import TransformingBussiness from "../TransformingBussiness/TransformingBussiness";

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
    </>
  );
};

export default Home;
