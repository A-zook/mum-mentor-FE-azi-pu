import ScrollAnimationWrapper from "@/components/UI/scroll-animation";
import { NextPage } from "next";
import { howItWorksFeatures } from "../features";

export const WhatWeOffer: NextPage = () => {
  return (
    <div className="mx-auto my-50 px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-60">
        <div className="flex max-w-[750px] flex-col items-center gap-4">
          <h3 className="lg:text-heading2 text-primary-text text-center text-3xl leading-tight font-semibold md:text-4xl">
            What We Offer
          </h3>
          <p className="text-secondary-text text-center text-lg leading-relaxed md:text-xl lg:text-2xl">
            Everything you need to feel supported, informed, and confident
            throughout your motherhood journey.
          </p>
        </div>

        <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
          {howItWorksFeatures.map((feature, index) => (
            <ScrollAnimationWrapper
              key={index}
              style="border-outline flex max-w-[600px] flex-col gap-2.5 rounded-lg border px-4 py-5 lg:px-[60px] lg:py-[60px]"
            >
              <div className="flex flex-col gap-4 lg:gap-6">
                <div className="flex h-11 w-12 items-center justify-center rounded-xl bg-[#DD2D4A] lg:h-16 lg:w-[68px]">
                  {feature.icon}
                </div>
                <h4 className="text-primaryText-black text-2xl font-bold lg:text-3xl">
                  {feature.title}
                </h4>
                <p className="text-gray-text3 text-lg lg:text-xl">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};
