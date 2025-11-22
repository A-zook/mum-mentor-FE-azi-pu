import ScrollAnimationWrapper from "@/components/UI/scroll-animation";
import { WHO_WE_ARE } from "@/data/about-us-data";
import WhoWeAreImage from "@/module/about-us/who-we-are-image";
import { SectionHeaderText } from "@/module/how-it-works";
import { NextPage } from "next";

export const WhoWeAre: NextPage = () => {
  return (
    <div className="lg:mx-auto lg:flex lg:max-w-1240 lg:items-center lg:gap-6 lg:px-6">
      <WhoWeAreImage className="hidden lg:block lg:h-[546px]" />

      <div className="space-y-6 px-6 lg:w-3/5 lg:px-0">
        {/* first block */}
        <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center">
          <ScrollAnimationWrapper style="space-y-2.5 rounded-md md:w-1/2 md:space-y-4 lg:w-full">
            <div className="space-y-3">
              <SectionHeaderText headerText="who we are" />
              <h2 className="text-heading2 text-primary-text font-semibold">
                A thoughtful companion{" "}
              </h2>
            </div>
            <p className="text-grey-text4 text-2xl">
              We exist to make emotional support feel softer and more
              accessible. With Nora, you&apos;re met with patience, care, and a
              presence that genuinely listens.
            </p>
          </ScrollAnimationWrapper>

          {/* image */}

          <WhoWeAreImage className="lg:hidden" />
        </div>

        {/* second block */}
        <ScrollAnimationWrapper style="flex flex-col gap-6 md:flex-row">
          {WHO_WE_ARE.map((data, idx) => (
            <div
              key={idx}
              className="border-grey border-outline space-y-2.5 rounded-md border px-6 py-8"
            >
              <h3 className="text-primary-text text-4xl font-bold capitalize">
                {data.title}
              </h3>
              <p className="text-grey-text4 text-2xl">{data.desc}</p>
            </div>
          ))}
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};
