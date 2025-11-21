import {
  AppStoreButton,
  GooglePlayButton,
} from "@/components/UI/appstore-buttons";
import momWithBabyClothes from "@/public/assets/images/mum-have-baby-clothes-for-newborn.jpg";
import { NextPage } from "next";
import Image from "next/image";

export const Hero: NextPage = () => {
  return (
    <section className="relative h-[651px] max-h-[738px] lg:h-screen">
      <Image
        src={momWithBabyClothes}
        alt="Hero Image"
        className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute top-0 h-full w-full"
        style={{
          background:
            "linear-gradient(255.28deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        }}
      />

      <aside className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center justify-center px-4 lg:justify-start lg:px-20">
        <div className="flex flex-col justify-center gap-10 lg:justify-start">
          <div className="flex max-w-[667px] flex-col justify-center gap-4 lg:justify-start">
            <h1 className="text-background lg:text-heading1 text-center text-4xl leading-tight font-bold md:text-5xl lg:text-left">
              A Safe Space For Every Mother/Expecting Mother.
            </h1>
            <p className="text-background max-w-[640px] text-center text-lg leading-relaxed md:text-2xl lg:text-left">
              With Mom Mentor AI, every mom and expecting mom can feel at ease
              with simple guides through motherhood, it’s our mission to relieve
              your stress and calm your anxiety.
            </p>
          </div>

          <div className="flex justify-center gap-4 lg:justify-start">
            <GooglePlayButton />
            <AppStoreButton />
          </div>
        </div>
      </aside>
    </section>
  );
};
