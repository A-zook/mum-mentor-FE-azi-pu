import {
  AIInsight,
  Hero,
  TestimonialsSection,
  WhatWeOffer,
} from "@/module/home";
import { ReadyToDownload } from "@/module/how-it-works";
import { NextPage } from "next";
import FAQAccordion from "../faq";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <AIInsight />
      <WhatWeOffer />
      <TestimonialsSection />
      <FAQAccordion />
      <ReadyToDownload />
    </div>
  );
};

export default Home;
