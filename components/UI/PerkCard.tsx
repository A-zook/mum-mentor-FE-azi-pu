import Image from "next/image";

type PerkCardProps = {
  title: string;
  description: string;
};

export default function PerkCard({ title, description }: PerkCardProps) {
  return (
    <div className="flex h-[209px] w-[408px] flex-col items-start gap-1.5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:h-[249px] lg:w-[396px]">
      <div className="flex h-[153px] w-[352px] flex-col gap-2">
        {/* Icon */}

        <Image
          src="/assets/icons/gift-icon.png"
          alt="Gift Icon"
          width={44}
          height={44}
        />

        {/* Title */}
        <h3 className="lg:text-body-large h-[31px] w-[211px] text-xl font-semibold text-[#1A1A1A]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-body-regular h-[52px] w-[348px] leading-relaxed text-[#1A1A1A] lg:text-[20px]">
          {description}
        </p>
      </div>
    </div>
  );
}
