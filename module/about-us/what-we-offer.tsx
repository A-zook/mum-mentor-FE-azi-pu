import ScrollAnimationWrapper from "@/components/UI/scroll-animation";
import { WHAT_WE_OFFER } from "@/data/about-us-data";
import { NextPage } from "next";
import Image from "next/image";

export const WhatWeOfferAbout: NextPage = () => {
  return (
    <div className="mx-auto max-w-1240 space-y-6 px-6 md:space-y-10 lg:space-y-60 lg:py-50">
      <div className="mx-auto max-w-[750px] space-y-1 md:space-y-4">
        <h2 className="text-primary-text md:text-heading2 text-center text-4xl font-semibold md:font-bold">
          What we offer
        </h2>
        <p className="text-grey-text4 text-center md:text-2xl">
          AI powered insights, routines, and reminders designed to simplify
          motherhood and support your journey
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:gap-10">
        {WHAT_WE_OFFER.map((offer, idx) => (
          <ScrollAnimationWrapper
            key={idx}
            style="border-outline space-y-4 rounded-md border p-7 md:rounded-lg lg:gap-2.5 lg:p-0 lg:px-9 lg:py-60"
          >
            <Image src={offer.icon} alt={offer.title} quality={100} />

            <h4 className="text-primary-text text-lg font-semibold md:text-2xl lg:text-4xl lg:font-bold">
              {offer.title}
            </h4>

            <p className="text-grey-text4 text-lg md:text-xl lg:text-2xl">
              {offer.desc}
            </p>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </div>
  );
};
