import FAQAccordion from "@/components/faq";
import { AboutUsHero, WhatWeOfferAbout, WhoWeAre } from "@/module/about-us";
import { ReadyToDownload } from "@/module/how-it-works";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="space-y-12">
      <AboutUsHero />
      <WhoWeAre />
      <WhatWeOfferAbout />
      <FAQAccordion />
      <ReadyToDownload />
    </div>
  );
};

export default About;
