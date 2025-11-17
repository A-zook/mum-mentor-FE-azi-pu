import HiwHero from "@/components/hiw/HiwHero";
import HiwReady from "@/components/hiw/HiwReady";
import HiwSteps from "@/components/hiw/HiwSteps";
import HiwWhy from "@/components/hiw/HiwWhy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
};

export default function Page() {
  return (
    <div>
      <HiwHero />
      <HiwSteps />
      <HiwWhy />
      <HiwReady />
    </div>
  );
}
