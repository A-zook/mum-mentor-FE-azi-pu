import ScrollAnimationWrapper from "@/components/UI/scroll-animation";
import { SectionHeaderText } from "@/module/how-it-works/section-header-text";
import SleepingBabyImage from "@public/assets/images/sleepingBaby.png";
import SleepingBabyDesktopImage from "@public/assets/images/sleepingBabyDesktop.png";
import { NextPage } from "next";
import Image from "next/image";

export const WhyThisWorks: NextPage = () => {
  return (
    <div className="bg-bg-secondary mt-60 pl-6">
      <div className="mx-auto flex max-w-550 flex-col gap-6 md:max-w-1240 md:flex-row">
        <ScrollAnimationWrapper style="flex  flex-col justify-center space-y-3.5 py-8 lg:w-[569.26px]">
          <SectionHeaderText headerText="why this works" />

          <h4 className="text-primary-text md:text-heading2 text-4xl leading-tight font-semibold capitalize">
            Because motherhood changes every day — your tools should too.
          </h4>

          <p className="text-gray-text3 text-start text-xl font-medium lg:text-2xl">
            Mom Mentor AI grows with you, understands your needs, and simplifies
            the chaos so you can focus on what truly matters.
          </p>
        </ScrollAnimationWrapper>

        <div className="flex justify-center">
          <Image
            src={SleepingBabyImage}
            alt="A woman holding a baby serious"
            quality={100}
            placeholder="blur"
            className="lg:hidden"
          />

          <Image
            src={SleepingBabyDesktopImage}
            alt="A woman holding a baby serious"
            quality={100}
            placeholder="blur"
            className="hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};
