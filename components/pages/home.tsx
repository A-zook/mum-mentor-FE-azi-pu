import {
  AIInsight,
  Hero,
  HowItWorks,
  TestimonialsSection,
} from "@/module/home";
import { NextPage } from "next";
import FAQAccordion from "../faq";
import { HiwReady } from "@/module/hiw";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <AIInsight />
      <HowItWorks />
      <TestimonialsSection />
      <FAQAccordion />
      <HiwReady />
    </div>
  );
};

export default Home;
