import { APP_STORES } from "@/data/buttons-data";
import HeroImage from "@/public/assets/images/hiw-hero-image.png";
import { NextPage } from "next";
import Image from "next/image";
import { SectionHeaderText } from ".";

export const HowItWorksHero: NextPage = () => {
  return (
    <header className="mx-auto flex max-w-550 flex-col items-center justify-between gap-8 px-6 py-60 md:max-w-1240 md:flex-row md:items-start">
      <div className="flex flex-col items-center gap-10 md:mt-2 md:w-1/2 md:items-start lg:max-w-[581px]">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <SectionHeaderText headerText="How It Works" />

          <h1 className="text-primary-text lg:text-heading1 md:text-heading2 text-center text-4xl leading-snug font-semibold md:text-start md:leading-tight">
            Motherhood Made Simpler, One Smart Step at a Time
          </h1>

          <p className="text-gray-text3 text-center text-xl md:text-start md:text-xl lg:text-2xl">
            See how Mom Mentor AI understands your world, supports your routine,
            and helps you thrive every day.
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

      <div className="border-primary image-drop-shadow relative h-[372.37px] w-full overflow-hidden rounded-sm border-[2.99px] md:h-[497.83px] md:w-1/2">
        <Image
          src={HeroImage}
          alt="An image of a mother carrying baby"
          quality={100}
          placeholder="blur"
          priority
          fill
          className="object-cover"
        />
      </div>
    </header>
  );
};
