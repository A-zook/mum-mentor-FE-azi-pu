import { FeatureHero, OurFeatures, NotAlone } from "@/module/features";
import { NextPage } from "next";

const Features: NextPage = () => {
  return (
    <div>
      <FeatureHero />
      <OurFeatures />
      <NotAlone />
    </div>
  );
};

export default Features;
