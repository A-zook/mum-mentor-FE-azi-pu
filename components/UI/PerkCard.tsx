import Image from "next/image";

type PerkCardProps = {
  title: string;
  description: string;
};

export default function PerkCard({ title, description }: PerkCardProps) {
  return (
    <div className="flex w-full flex-col items-start gap-1.5 rounded-lg border-[0.5px] border-gray-200 bg-white p-6 shadow-sm md:gap-2 md:rounded-xl md:border lg:h-[249px]">
      <div className="flex w-full flex-col gap-1.5">
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
}
