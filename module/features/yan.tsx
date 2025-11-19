import AppStoreButtons from "@/components/UI/AppStoreButtons";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimation";
import Ready from "@public/assets/images/ready.png";
import { NextPage } from "next";
import Image from "next/image";

export const Yan: NextPage = () => {
  return (
    <div className="px-6 md:pb-[60px]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 overflow-hidden rounded-[8px] px-5 py-8 md:flex-row md:border md:border-[#E2E2E2] md:px-16">
        <div className="flex flex-col items-center gap-6 md:w-[50%] md:items-start lg:max-w-[590px]">
          <div className="flex flex-col gap-10">
            <h4 className="text-primaryText-black text-center text-[32px] leading-tight font-semibold md:text-left">
              You&apos;re Not Alone Anymore
            </h4>

            <p className="text-primaryText-black text-center text-lg md:text-left lg:max-w-[590px]">
              Motherhood shouldn&apos;t feel isolating. NORA brings back the
              warmth of community support, the wisdom of shared experiences, and
              the comfort of knowing someone is always there for you.
            </p>
          </div>

          <AppStoreButtons />
        </div>

        <ScrollAnimationWrapper>
          <Image
            src={Ready}
            alt="An image of 2 phones with nora app"
            quality={100}
            placeholder="blur"
          />
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};
