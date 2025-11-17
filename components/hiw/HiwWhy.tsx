import SectionHeader from "@/components/hiw/SectionHeader";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimation";
import SleepingBaby from "@public/assets/images/sleepingBaby.png";
import SleepingBabyDesktop from "@public/assets/images/sleepingBabyDesktop.png";

import Image from "next/image";

export default function HiwWhy() {
  return (
    <div className="bg-bg-secondary mt-[60px] pl-6">
      <div className="mx-auto flex max-w-[550px] flex-col gap-6 md:max-w-[1240px] md:flex-row">
        <ScrollAnimationWrapper style="flex w-[560px] flex-col justify-center space-y-[13px] py-8 lg:w-[569.26px]">
          <SectionHeader headerText="why this works" />

          <h4 className="text-primaryText-black md:text-heading2 text-4xl leading-tight font-semibold capitalize">
            Because motherhood changes every day — your tools should too.
          </h4>

          <p className="text-gray-text3 text-start text-xl font-medium lg:text-2xl">
            Mom Mentor AI grows with you, understands your needs, and simplifies
            the chaos so you can focus on what truly matters.
          </p>
        </ScrollAnimationWrapper>

        <div className="flex justify-center">
          <Image
            src={SleepingBaby}
            alt="A woman holding a baby serious"
            quality={100}
            placeholder="blur"
            className="lg:hidden"
          />

          <Image
            src={SleepingBabyDesktop}
            alt="A woman holding a baby serious"
            quality={100}
            placeholder="blur"
            className="hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
}
