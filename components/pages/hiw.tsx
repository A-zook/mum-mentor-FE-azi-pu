import { NextPage } from "next";
import { HiwHero, HiwReady, HiwSteps, HiwWhy } from "@/module/hiw";

const HIW: NextPage = () => {
  return (
    <div>
      <HiwHero />
      <HiwSteps />
      <HiwWhy />
      <HiwReady />
    </div>
  );
};

export default HIW;
