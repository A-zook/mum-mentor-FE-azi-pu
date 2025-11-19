import { FeatureHero, OurFeatures, Yan } from "@/module/features";
import { NextPage } from "next";

const Features: NextPage = () => {
  return (
    <div>
      <FeatureHero />
      <OurFeatures />
      <Yan />
    </div>
  );
};

export default Features;
