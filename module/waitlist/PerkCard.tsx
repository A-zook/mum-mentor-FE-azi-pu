import { NextPage } from "next";
import Image from "next/image";

export const PerkCard: NextPage<PerkCardProps> = ({ title, description }) => {
  return (
    <div className="flex h-[209px] max-w-[408px] flex-col items-start gap-1.5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:h-[249px] lg:w-[396px]">
      <div className="flex h-[153px] w-[352px] flex-col gap-2">
        {/* Icon */}
        <Image
          src="/assets/icons/gift-icon.png"
          alt="Gift Icon"
          width={44}
          height={44}
        />

        {/* Title */}
        <h3 className="text-body-large leading-tight font-semibold text-[#1A1A1A] lg:text-2xl">
          {title}
        </h3>

        {/* Description */}
        <p className="text-body-regular leading-snug text-[#1A1A1A] lg:text-lg lg:leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
