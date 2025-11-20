import { NextPage } from "next";
import Image from "next/image";
import HeroImage from "@/public/assets/images/loving-mother.jpg";

export const FeatureHero: NextPage = () => {
  return (
    <section className="relative h-[520px] max-h-[738px] w-full lg:h-screen">
      <Image
        src={HeroImage}
        alt="Loving Mom with Her Baby Image"
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute top-0 h-full w-full bg-[#00000085]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 px-6 md:ml-[100px] md:w-[670px] md:items-start">
        <p className="md:text-heading1 text-background mb-4 text-center text-[28px] font-bold md:text-left">
          Features Built With Love
        </p>
        <p className="md:text-body-large text-background text-body-regular text-center md:text-left">
          NORA offers nurturing tools that guide you through the highs, lows,
          and everything in between, so you always have a companion you can
          trust.
        </p>
      </div>
    </section>
  );
};
