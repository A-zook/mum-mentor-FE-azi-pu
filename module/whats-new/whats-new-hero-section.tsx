import Button from "@/components/UI/button";
import ScrollAnimationWrapper from "@/components/UI/scroll-animation";
import HeroImage from "@public/assets/images/whats-new-hero.png";
import { NextPage } from "next";
import Image from "next/image";

export const WhatsNewHero: NextPage = () => {
  return (
    <div className="mx-auto max-w-[962px] space-y-8 overflow-hidden px-6 md:px-60 md:pt-12">
      <div className="flex flex-col items-center gap-8">
        <div className="space-y-4 md:mx-auto md:space-y-6">
          <h1 className="text-primary-text md:text-heading1 text-center text-4xl leading-9 font-semibold md:leading-16 md:font-bold">
            What&apos;s new with <span className="text-primary">Nora?</span>
          </h1>
          <p className="text-grey-text4 md:text-primary-text mx-auto max-w-[700px] text-center text-xl leading-7 md:text-2xl md:leading-8">
            Here’s everything we’ve improved, launched, or updated
            recently.{" "}
          </p>
        </div>

        <Button className="w-full md:w-fit">Watch DEMO</Button>
      </div>

      <ScrollAnimationWrapper>
        <Image
          src={HeroImage}
          alt="What's new page hero image"
          quality={100}
          placeholder="blur"
          priority
        />
      </ScrollAnimationWrapper>
    </div>
  );
};
