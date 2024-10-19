import React from "react";
import { Helmet } from "react-helmet";
import TestimonialSlider from "../PageComponents/HomeComponents/Reviews";
import Process from "../PageComponents/HomeComponents/Process";
import Logo from "../PageComponents/HomeComponents/logo";
import BlogIntro from "../PageComponents/HomeComponents/BlogIntro";
import Hero from "../PageComponents/HomeComponents/hero";
import PrimaryFeatures from "../PageComponents/HomeComponents/PrimaryFeatures";
import WhyUs from "../PageComponents/HomeComponents/WhyUs";
import CTA2 from "../PageComponents/Universal/CTA2";
import ProblemsSection from "../PageComponents/HomeComponents/SolvedProblems";


export default function Home() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Serino Digital offers custom-built websites for tradespeople across the UK. We specialise in high-performance, hand-coded websites that help your business stand out. Explore our services, pricing, and why we're the right choice for your business." />
        <title>Serino Digital - Home</title>
      </Helmet>
      <Hero />
      <Logo />
      <ProblemsSection />
      {/* <Pitch /> */}
      {/* <WhyUs /> */}
      {/* <PrimaryFeatures /> */}
      {/* <CTA2 /> */}
      {/* <Process /> */}
      {/* <BlogIntro /> */}
      {/* <CTA1 /> */}
      <TestimonialSlider />
      <CTA2 />
    </>
  );
}
