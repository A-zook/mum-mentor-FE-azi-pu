import ScrollAnimationWrapper from "@/components/UI/ScrollAnimation";
import StepsDotSvg from "@public/assets/icons/dot.svg";
import { NextPage } from "next";
import Image from "next/image";

export const StepBlock: NextPage<StepBlockProps> = ({ step }) => {
  return (
    <section
      className={`mx-auto flex max-w-550 flex-col gap-8 md:max-w-1240 md:items-center md:justify-between ${step?.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
    >
      <div className="flex flex-col gap-4 md:w-1/2 md:max-w-[430.47px]">
        <div className="flex items-center gap-4">
          <Image src={StepsDotSvg} alt="steps dot" priority />
          <h4 className="text-primary-text text-4xl font-semibold">
            Step {step?.id}
          </h4>
        </div>

        <h3 className="text-heading3 leading-tight font-semibold capitalize">
          {step.title}
        </h3>

        <p className="text-gray-text3 text-xl font-medium lg:text-2xl">
          {step.description}
        </p>
      </div>

      {/* image */}
      <div
        className={`bg-bg-secondary flex h-[317px] w-full items-end justify-center overflow-hidden md:w-1/2 lg:h-[479.58px] lg:w-[608px]`}
      >
        <ScrollAnimationWrapper style="relative">
          <Image
            src={step?.image}
            alt="A phone image"
            quality={100}
            placeholder="blur"
            priority
            className="w-[166.16px] lg:w-[272.11px]"
          />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};
