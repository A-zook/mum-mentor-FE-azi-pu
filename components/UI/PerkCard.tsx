import Image from "next/image";

type PerkCardProps = {
  title: string;
  description: string;
};

export default function PerkCard({ title, description }: PerkCardProps) {
  return (
    <div className="flex flex-col items-start gap-1.5 p-6 rounded-xl border border-gray-200 bg-white shadow-sm w-[408px] h-[209px] lg:w-[396px] lg:h-[249px]">
      <div className="flex flex-col w-[352px] h-[153px] gap-2">
        {/* Icon */}

        <Image
          src="/assets/icons/gift-icon.png"
          alt="Gift Icon"
          width={44}
          height={44}
        />

        {/* Title */}
        <h3 className="text-xl w-[211px] h-[31px] font-semibold lg:text-body-large text-[#1A1A1A]">
          {title}
        </h3>

        {/* Description */}
        <p className=" w-[348px] h-[52px] text-body-regular lg:text-[20px] leading-relaxed text-[#1A1A1A]">
          {description}
        </p>
      </div>
    </div>
  );
}
