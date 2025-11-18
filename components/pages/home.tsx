import {
  AIInsight,
  Hero,
  TestimonialsSection,
  WhatWeOffer,
} from "@/module/home";
import { NextPage } from "next";
import FAQAccordion from "../faq";
import { HiwReady } from "@/module/hiw";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <AIInsight />
      <WhatWeOffer />
      <TestimonialsSection />
      <FAQAccordion />
      <HiwReady />
    </div>
  );
};

export default Home;
