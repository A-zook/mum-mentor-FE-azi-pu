import FAQAccordion from "@/components/faq";
import { ReadyToDownload } from "@/module/how-it-works";
import {
  Features,
  WhatsNewExploration,
  WhatsNewHero,
} from "@/module/whats-new";
import { NextPage } from "next";

const WhatsNew: NextPage = () => {
  return (
    <div className="space-y-12 pt-8 lg:space-y-60">
      <WhatsNewHero />
      <Features />
      <WhatsNewExploration />
      <FAQAccordion />
      <ReadyToDownload />

      {/* faq */}
    </div>
  );
};

export default WhatsNew;
