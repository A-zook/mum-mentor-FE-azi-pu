import { HeroSection, ImageGallery } from "@/module/waitlist";
import { NextPage } from "next";
import PerkSection from "../layout/PerkSection";

const Waitlist: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <ImageGallery />
      <PerkSection />
    </div>
  );
};

export default Waitlist;
