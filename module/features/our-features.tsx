import { NextPage } from "next";
import Image from "next/image";
import { features } from "@/data/features-data";
import FeaturesOfferred from "./features-offerred";
import StarIcon from "@public/assets/icons/star.svg";
import { FeatureHero } from "./hero";

export const OurFeatures: NextPage = () => {
  return (
    <>
      <FeatureHero />
      <div className="mx-auto px-6">
        <div className="mx-auto flex w-[368px] flex-col items-center justify-center gap-3 py-6 md:w-[750px]">
          <div className="flex items-center gap-2.5">
            <Image src={StarIcon} alt="Icon of a star" quality={100} priority />
            <p className="text-primary font-semibold uppercase md:text-lg">
              What you&apos;ll get
            </p>
          </div>
          <p className="semibold text-heading2">Your Essential Mom Toolkit</p>
          <p className="text-button text-grey-text4 md:text-body-large font-hanken text-center">
            Everything you need to feel supported, informed, and confident
            throughout your motherhood journey
          </p>
        </div>
        <div className="mx-auto my-60 grid w-full max-w-7xl gap-60">
          {features.map((feature) => (
            <FeaturesOfferred feature={feature} key={feature.id} />
          ))}
        </div>
      </div>
    </>
  );
};
