import { OurFeatures, WhyThisWorks } from "@/module/features";
import { ReadyToDownload } from "@/module/how-it-works";
import { NextPage } from "next";

const Features: NextPage = () => {
  return (
    <div>
      <OurFeatures />
      <WhyThisWorks />
      <ReadyToDownload />
    </div>
  );
};

export default Features;
