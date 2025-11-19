import { NextPage } from "next";
import Image from "next/image";

export const FeatureHero: NextPage = () => {
  return (
    <div className="relative h-[520px] w-full md:h-[720px]">
      <Image
        src="/assets/images/mother-child1.png"
        alt="Hero Image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 md:ml-[100px]">
        <p className="md:text-heading1 text-background mb-4 text-center text-[28px] font-bold">
          Features Built With Love
        </p>
        <p className="md:text-body-large text-background text-center text-[18px]">
          NORA offers nurturing tools that guide you through the highs, lows,
          and everything in between, so you always have a companion you can
          trust.
        </p>
      </div>
    </div>
  );
};
