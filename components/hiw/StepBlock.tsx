interface StepBlockProps {
  step: {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
  };
}

import StepsDot from "@/public/assets/icons/dot.svg";
import Image, { StaticImageData } from "next/image";

export default function StepBlock({ step }: StepBlockProps) {
  return (
    <section
      className={`flex max-w-[550px] md:max-w-[1240px] mx-auto flex-col gap-8  md:justify-between md:items-center ${step?.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
    >
      <div className="flex gap-4 flex-col  md:w-[50%] md:max-w-[430.47px]">
        <div className="flex items-center gap-4">
          <Image src={StepsDot} alt="steps dot" priority />
          <h4 className="text-4xl text-primaryText-black font-semibold">
            Step {step?.id}
          </h4>
        </div>

        <h3 className="text-[36px] font-semibold leading-tight capitalize">
          {step.title}
        </h3>

        <p className="text-xl lg:text-2xl font-medium text-gray-text3">
          {step.description}
        </p>
      </div>

      {/* image */}
      <div
        className={` bg-bg-secondary md:w-[50%] h-[317px] flex justify-center items-end lg:w-[608px] lg:h-[479.58px] w-full`}
      >
        <div className="relative ">
          <Image
            src={step?.image}
            alt="A phone image"
            quality={100}
            placeholder="blur"
            priority
            className="w-[166.16px] lg:w-[272.11px]"
          />
        </div>
      </div>
    </section>
  );
}
