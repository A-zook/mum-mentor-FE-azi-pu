import ScrollAnimationWrapper from "@/components/UI/scroll-animation";
import { APP_STORES } from "@/data/buttons-data";
import { SectionHeaderText } from "@/module/how-it-works";

import AboutUsHeroImage from "@public/assets/images/AboutUsHeroImage.png";
import { NextPage } from "next";
import Image from "next/image";

export const AboutUsHero: NextPage = () => {
  return (
    <header className="mx-auto flex max-w-550 flex-col items-center justify-between gap-8 px-6 py-60 md:max-w-1240 md:flex-row md:items-start">
      <div className="flex flex-col items-center gap-10 md:mt-2 md:w-1/2 md:items-start lg:max-w-[581px]">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <SectionHeaderText headerText="About us" />

          <h1 className="text-primary-text lg:text-heading1 md:text-heading2 text-center text-4xl leading-snug font-semibold md:text-start md:leading-tight">
            Support that feels like a friend.
          </h1>

          <p className="text-gray-text3 text-center text-xl md:text-start md:text-xl lg:text-2xl">
            Nora was created to be a gentle companion in the moments when life
            feels heavy. She listens, supports, and helps you find clarity
            without pressure or judgment.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {APP_STORES.map((store, idx) => (
            <button aria-label="Play store download button" key={idx}>
              <Image src={store.icon} alt={store.alt} quality={100} priority />
            </button>
          ))}
        </div>
      </div>

      {/* hero image */}

      <ScrollAnimationWrapper style="border-primary image-drop-shadow relative h-[372.37px] w-full md:w-1/2 overflow-hidden rounded-sm border-[2.99px] md:h-[497.83px] ">
        <Image
          src={AboutUsHeroImage}
          alt="An image of a mother carrying baby"
          quality={100}
          placeholder="blur"
          priority
          fill
          className="object-cover"
        />
      </ScrollAnimationWrapper>
    </header>
  );
};
