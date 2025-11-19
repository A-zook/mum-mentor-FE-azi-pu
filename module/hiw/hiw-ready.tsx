import AppStoreButtons from "@/components/UI/AppStoreButtons";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimation";
import chubbyBaby from "@public/assets/images/chubby-baby.png";
import { NextPage } from "next";
import Image from "next/image";

export const HiwReady: NextPage = () => {
  return (
    <div className="px-6 md:py-60">
      <div className="md:border-bg-secondary-1 mx-auto flex max-w-1240 flex-col items-center justify-between gap-8 overflow-hidden rounded-md px-5 py-8 md:flex-row md:border md:px-16">
        <div className="flex flex-col items-center gap-6 md:w-1/2 md:items-start lg:max-w-590">
          <div className="flex flex-col gap-10">
            <h4 className="text-primaryText-black text-center text-4xl leading-tight font-semibold md:text-left">
              Ready to Download NORA?
            </h4>

            <p className="text-primary-text text-center text-lg md:text-left lg:max-w-590">
              Join women who want calm, caring guidance through pregnancy and
              motherhood. Download the app and start your journey today!
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
