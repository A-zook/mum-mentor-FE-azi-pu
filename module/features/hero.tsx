import { NextPage } from "next";
import Image from "next/image";
import AppStoreButtons from "@/components/UI/appstore-buttons";
import mumHuggingBaby from "@/public/assets/images/featured-mom-baby.png";
import StarIcon from "@public/assets/icons/star.svg";

export const FeatureHero: NextPage = () => {
  return (
    <section className="relative flex items-center justify-center lg:h-screen lg:max-h-[738px]">
      <div className="mx-auto flex max-w-550 flex-col items-center justify-between gap-8 px-6 py-60 md:max-w-1240 md:flex-row md:items-start">
        <div className="flex flex-col items-center gap-4 md:mt-2 md:w-1/2 md:items-start">
          <div className="flex items-center gap-2.5">
            <Image src={StarIcon} alt="A star icon" quality={100} priority />

            <p className="text-primary font-semibold uppercase md:text-lg">
              FEARURES
            </p>
          </div>

          <h1 className="text-primary-text md:text-heading1 max-w-[581px] text-center text-4xl leading-snug font-semibold md:text-start md:leading-tight">
            Everything You Need, All In One Place
          </h1>

          <p className="text-gray-text3 max-w-[581px] text-center text-xl md:text-start md:text-2xl">
            See how Nora understands your world, supports your routine, and
            helps you thrive every day.
          </p>

          <AppStoreButtons />
        </div>

        {/* hero image */}

        <div className="border-primary image-drop-shadow relative h-[372.37px] w-full overflow-hidden rounded-sm border-[2.99px] md:h-[497.83px] md:w-[527px]">
          <Image
            src={mumHuggingBaby}
            alt="An image of a mother hugging her baby"
            quality={100}
            placeholder="blur"
            priority
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
