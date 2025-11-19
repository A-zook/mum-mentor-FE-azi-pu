import {
  HowItWorksHero,
  HowtoGetStarted,
  ReadyToDownload,
  WhyThisWorks,
} from "@/module/how-it-works";
import { NextPage } from "next";

const HowItWorks: NextPage = () => {
  return (
    <div>
      <HowItWorksHero />
      <HowtoGetStarted />
      <WhyThisWorks />
      <ReadyToDownload />
    </div>
  );
};

export default HowItWorks;
