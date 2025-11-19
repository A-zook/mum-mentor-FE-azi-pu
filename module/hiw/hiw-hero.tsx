import AppStoreButtons from "@/components/UI/AppStoreButtons";
import ScrollAnimationWrapper from "@/components/UI/ScrollAnimation";
import HeroImage from "@/public/assets/images/hiw-hero-image.png";
import { NextPage } from "next";
import Image from "next/image";
import { SectionHeader } from ".";

export const HiwHero: NextPage = () => {
  return (
    <header className="mx-auto flex max-w-550 flex-col items-center justify-between gap-8 px-6 py-15 md:max-w-1240 md:flex-row md:items-start">
      <div className="flex flex-col items-center gap-4 md:mt-2 md:w-1/2 md:items-start">
        <SectionHeader headerText="How It Works" />

        <h1 className="text-primary-text md:text-heading1 text-center text-4xl leading-snug font-semibold md:text-start md:leading-tight">
          Motherhood Made Simpler, One Smart Step at a Time
        </h1>

        <p className="text-gray-text3 text-center text-xl md:text-start md:text-2xl">
          See how Mom Mentor AI understands your world, supports your routine,
          and helps you thrive every day.
        </p>

        <AppStoreButtons />
      </div>

      {/* hero image */}

      <ScrollAnimationWrapper style="border-primary image-drop-shadow relative h-[372.37px] w-full overflow-hidden rounded-sm border-[2.99px] md:h-[497.83px] md:w-[527px]">
        <Image
          src={HeroImage}
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
