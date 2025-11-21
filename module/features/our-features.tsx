import { NextPage } from "next";
import ScrollAnimationWrapper from "@/components/UI/scroll-animation";
import { features } from "@/data/features-data";

export const OurFeatures: NextPage = () => {
  return (
    <div className="mx-auto my-50 px-6">
      <div className="mx-auto flex w-[368px] flex-col gap-4 py-6 md:w-[750px]">
        <p className="md:text-heading2 text-soft-black font-hanken text-center text-2xl font-semibold md:text-3xl">
          Our Features
        </p>
        <p className="text-button md:text-body-large md:text-secondary-text font-hanken text-center font-medium">
          Everything you need to feel supported, informed and confident
          throughout your motherhood journey
        </p>
      </div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 py-50 md:grid-cols-2">
        {features.map((feature) => (
          <ScrollAnimationWrapper
            key={feature.id}
            style="border-outline flex max-w-[600px] flex-col gap-2.5 rounded-lg border px-4 py-5 lg:px-60  py-60"
          >
            <div className="flex flex-col gap-4 lg:gap-6">
              <div className="bg-primary flex h-11 w-12 items-center justify-center rounded-xl lg:h-16 lg:w-[68px]">
                {feature.icon}
              </div>
              <h4 className="text-primary-text text-2xl font-bold lg:text-3xl">
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
  );
};
