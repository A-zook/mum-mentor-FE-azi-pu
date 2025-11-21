import {
  AIInsight,
  Hero,
  TestimonialsSection,
  WhatWeOffer,
  VideoSection,
} from "@/module/home";
import { ReadyToDownload } from "@/module/how-it-works";
import { NextPage } from "next";
import FAQAccordion from "../faq";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <VideoSection />
      <AIInsight />
      <WhatWeOffer />
      <TestimonialsSection />
      <FAQAccordion />
      <ReadyToDownload />
    </div>
  );
};

export default Home;
