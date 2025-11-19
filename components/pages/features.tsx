import { FeatureHero, OurFeatures } from "@/module/features";
import { Yan } from "@/module/features/yan";
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
