import SectionHeader from "@/components/hiw/SectionHeader";
import AppStoreBtn from "@/public/assets/icons/app-store.svg";
import PlayStoreBtn from "@/public/assets/icons/play-store.svg";

import HeroImage from "@/public/assets/images/hiw-hero-image.png";
import Image from "next/image";

export default function HiwHero() {
  return (
    <header className="py-[60px] flex flex-col gap-8 items-center md:items-start max-w-[550px] mx-auto md:flex-row  justify-between md:max-w-[1240px] px-6">
      <div className="gap-4 flex items-center md:items-start flex-col  md:w-[50%] md:mt-2">
        <SectionHeader headerText="How It Works" />

        <h1 className="font-semibold text-4xl leading-snug text-center text-primaryText-black md:text-heading1 md:leading-tight md:text-start">
          Motherhood Made Simpler, One Smart Step at a Time
        </h1>

        <p className="text-xl text-center text-[#616161] md:text-2xl md:text-start">
          See how Mom Mentor AI understands your world, supports your routine,
          and helps you thrive every day.
        </p>

        <div className="flex items-center gap-6 mt-24">
          <button aria-label="play store button">
            <Image
              src={PlayStoreBtn}
              alt="play store button"
              quality={100}
              priority
            />
          </button>

          <button aria-label="app store button">
            <Image
              src={AppStoreBtn}
              alt="app store button"
              quality={100}
              priority
            />
          </button>
        </div>
      </div>

      {/* hero image */}

      <div className="border-primary border-[2.99px] rounded-[6px] overflow-hidden image-drop-shadow  relative w-[394.19px] h-[372.37px] md:w-[527px] md:h-[497.83px]">
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
}
