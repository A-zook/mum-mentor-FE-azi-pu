import AppStoreButtons from "@/components/UI/appstore-buttons";
import ScrollAnimationWrapper from "@/components/UI/scroll-animation";
import mumKissingBaby from "@/public/assets/images/mum-kissing-baby.png";
import { NextPage } from "next";
import Image from "next/image";
import StarIcon from "@public/assets/icons/star.svg";

export const Hero: NextPage = () => {
  return (
    <section className="relative flex h-[651px] max-h-[738px] items-center justify-center lg:h-screen">
      <div className="mx-auto flex max-w-550 flex-col items-center justify-between gap-8 px-6 py-60 md:max-w-1240 md:flex-row md:items-start">
        <div className="flex flex-col items-center gap-4 md:mt-2 md:w-1/2 md:items-start">
          <div className="flex items-center gap-2.5">
            <Image src={StarIcon} alt="A star icon" quality={100} priority />

            <p className="text-primary font-semibold uppercase md:text-lg">
              WELCOME TO NORA
            </p>
          </div>

          <h1 className="text-primary-text md:text-heading1 max-w-[581px] text-center text-4xl leading-snug font-semibold md:text-start md:leading-tight">
            A Safe Space For Every Mother/ Expecting Mother
          </h1>

          <p className="text-gray-text3 max-w-[581px] text-center text-xl md:text-start md:text-2xl">
            With NORA, every mom and expecting mom can feel at ease with simple
            guides through motherhood. It’s our mission to relieve your stress
            and anxiety
          </p>

          <AppStoreButtons />
        </div>

        {/* hero image */}

        <ScrollAnimationWrapper style="border-primary image-drop-shadow relative h-[372.37px] w-full overflow-hidden rounded-sm border-[2.99px] md:h-[497.83px] md:w-[527px]">
          <Image
            src={mumKissingBaby}
            alt="An image of a mother kissing her baby"
            quality={100}
            placeholder="blur"
            priority
            fill
            className="object-cover"
          />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};
