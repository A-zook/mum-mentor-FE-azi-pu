import { HeroSection, ImageGallery, PerksSection } from "@/module/waitlist";
import { NextPage } from "next";
import FAQAccordion from "../faq";

const Waitlist: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <ImageGallery />
      <PerksSection />
      <FAQAccordion />
    </div>
  );
};

export default Waitlist;
