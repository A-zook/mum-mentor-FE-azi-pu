import AppStoreButtons from "@/components/UI/appstore-buttons";
import ScrollAnimationWrapper from "@/components/UI/scroll-animation";
import chubbyBaby from "@/public/assets/images/chubby-baby.png";
import { NextPage } from "next";
import Image from "next/image";

export const NotAlone: NextPage = () => {
  return (
    <div className="px-6 md:pb-60">
      <div className="md:border-outline-secondary mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 overflow-hidden rounded-lg px-5 py-8 md:flex-row md:border md:px-16">
        <div className="flex flex-col items-center gap-6 md:w-[50%] md:items-start lg:max-w-[590px]">
          <div className="flex flex-col gap-10">
            <h4 className="text-primary-text text-center text-2xl leading-tight font-semibold md:text-left md:text-3xl">
              You&apos;re Not Alone Anymore
            </h4>

            <p className="text-primary-text text-center text-lg md:text-left lg:max-w-[590px]">
              Motherhood shouldn&apos;t feel isolating. NORA brings back the
              warmth of community support, the wisdom of shared experiences, and
              the comfort of knowing someone is always there for you.
            </p>
          </div>

          <AppStoreButtons />
        </div>

        <ScrollAnimationWrapper>
          <Image
            src={chubbyBaby}
            alt="An image of 2 phones with nora app"
            quality={100}
            placeholder="blur"
          />
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};
