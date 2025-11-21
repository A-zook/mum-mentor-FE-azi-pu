import ScrollAnimationWrapper from "@/components/UI/scroll-animation";
import { NextPage } from "next";
import Image from "next/image";

export const AIInsight: NextPage = () => {
  return (
    <div className="bg-bg-secondary overflow-hidden">
      <section className="mx-auto min-h-96 max-w-[1440px] px-6 py-12 md:py-16 lg:px-20 lg:py-20">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-11">
          {/* Text Content */}
          <div className="flex max-w-full flex-col justify-center gap-4 lg:max-w-[699px]">
            <p className="lg:text-heading2 text-center text-3xl leading-tight font-bold md:text-4xl lg:text-left">
              AI support that transforms motherhood
            </p>
            <p className="max-w-[586px] text-center text-base leading-relaxed md:text-lg lg:text-left lg:text-2xl">
              AI powered insights, routines, and reminders designed to simplify
              motherhood and support your journey
            </p>
          </div>

          {/* Image */}
          <ScrollAnimationWrapper style="w-auto shrink-0">
            <div className="relative w-full overflow-hidden rounded-lg">
              <Image
                src="/assets/images/mum-with-smiling-baby.jpg"
                alt="Mother holding smiling baby"
                height={300}
                width={495}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default AIInsight;
