import { WHATS_NEW_FEATURES } from "@/data/whats-new-data";
import FeatureIcon from "@public/assets/images/featuresIcon.svg";
import { NextPage } from "next";
import Image from "next/image";

export const Features: NextPage = () => {
  return (
    <div className="bg-secondary-extralight">
      <div className="oveflow-hidden mx-auto flex max-w-1240 flex-col gap-6 rounded-md md:flex-row">
        {WHATS_NEW_FEATURES.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-[18px] p-6 md:gap-4"
          >
            <Image
              src={FeatureIcon}
              alt="icon for features"
              quality={100}
              priority
            />
            <p className="text-primary-text text-center text-2xl font-semibold capitalize">
              {feature.title}
            </p>

            <p className="text-primary-text text-center text-lg">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
