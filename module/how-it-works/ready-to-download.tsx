import AppStoreButtons from "@/components/UI/appstore-buttons";
import ScrollAnimationWrapper from "@/components/UI/scroll-animation";
import YouAreNotAloneImage from "@public/assets/images/YouAreNotAloneImage.png";
import { NextPage } from "next";
import Image from "next/image";

export const ReadyToDownload: NextPage = () => {
  return (
    <div className="px-6 md:py-60">
      <div className="md:border-bg-secondary-1 mx-auto flex max-w-1240 flex-col items-center justify-between gap-8 overflow-hidden rounded-md px-5 py-8 md:flex-row lg:border lg:px-16">
        <div className="flex flex-col items-center gap-6 md:w-2/3 md:items-start lg:w-3/5 lg:max-w-590">
          <div className="flex flex-col gap-2.5 lg:gap-4">
            <h4 className="text-primaryText-black text-center text-4xl leading-tight font-semibold capitalize md:text-left">
              You&apos;re not alone anymore
            </h4>

            <p className="text-primary-text text-center text-lg md:text-left lg:max-w-590">
              Motherhood shouldn&apos;t feel isolating. NORA brings back the
              warmth of community support, the wisdom of shared experiences, and
              the comfort of knowing someone is always there for you.
            </p>
          </div>

          <AppStoreButtons />
        </div>

        <ScrollAnimationWrapper style="h-[446px] w-1/2 relative ">
          <Image
            src={YouAreNotAloneImage}
            alt="An image of 2 phones with nora app"
            quality={100}
            fill
            placeholder="blur"
            className="object-contain"
          />
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};
