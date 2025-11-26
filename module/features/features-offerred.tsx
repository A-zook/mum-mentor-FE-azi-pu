import React from "react";
import ScrollAnimationWrapper from "@/components/UI/scroll-animation";
import Image from "next/image";
import { NextPage } from "next";

interface FeaturesOfferredProps {
  feature: {
    id: number;
    icon: React.JSX.Element;
    title: string;
    description: string;
    imageUrl: string;
  };
}

const FeaturesOfferred: NextPage<FeaturesOfferredProps> = ({ feature }) => {
  return (
    <section
      className={`mx-auto flex max-w-550 flex-col gap-12 md:max-w-1240 md:items-center md:justify-between ${feature?.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
    >
      <div className="flex flex-col items-center gap-4 md:w-1/2 md:max-w-[430.47px] md:items-start">
        <div className="flex items-center gap-4">
          <div className="bg-primary flex h-11 w-12 items-center justify-center rounded-xl lg:h-16 lg:w-[68px]">
            {feature.icon}
          </div>
        </div>

        <h3 className="text-heading3 leading-tight font-semibold capitalize">
          {feature.title}
        </h3>

        <p className="text-gray-text3 text-xl font-medium lg:text-2xl">
          {feature.description}
        </p>
      </div>

      {/* image */}
      <div
        className={`bg-bg-secondary flex h-[317px] w-full items-end justify-center overflow-hidden md:w-1/2 lg:h-[479.58px] lg:w-[608px]`}
      >
        <ScrollAnimationWrapper style="relative">
          <Image
            src={feature?.imageUrl}
            alt="A phone image"
            quality={100}
            width={300}
            height={600}
            priority
            className="w-[166.16px] lg:w-[272.11px]"
          />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default FeaturesOfferred;
