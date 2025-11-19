import { FeatureHero, OurFeatures } from "@/module/features";
import { NextPage } from "next";
import { HiwReady } from "@/module/hiw";

const Features: NextPage = () => {
  return (
    <div>
      <FeatureHero />
      <OurFeatures />
      <HiwReady />
    </div>
  );
};

export default Features;
