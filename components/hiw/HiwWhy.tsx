import SectionHeader from "@/components/hiw/SectionHeader";
import SleepingBaby from "@/public/assets/images/sleepingBaby.png";
import SleepingBabyDesktop from "@/public/assets/images/sleepingBabyDesktop.png";

import Image from "next/image";

export default function HiwWhy() {
  return (
    <div className="bg-bg-secondary  mt-[60px] pl-6">
      <div className="flex flex-col gap-6  max-w-[550px] mx-auto  md:max-w-[1240px] md:flex-row ">
        <div className="space-y-[13px] py-8 w-[560px] lg:w-[569.26px] flex flex-col justify-center ">
          <SectionHeader headerText="why this works" />

          <h4 className="text-4xl  capitalize font-semibold text-primaryText-black md:text-heading2 leading-tight">
            Because motherhood changes every day — your tools should too.
          </h4>

          <p className="text-xl lg:text-2xl font-medium text-gray-text3 text-start ">
            Mom Mentor AI grows with you, understands your needs, and simplifies
            the chaos so you can focus on what truly matters.
          </p>
        </div>

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
