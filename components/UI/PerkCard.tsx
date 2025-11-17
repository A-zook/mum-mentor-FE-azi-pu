import Image from "next/image";

type PerkCardProps = {
  title: string;
  description: string;
};

export default function PerkCard({ title, description }: PerkCardProps) {
  return (
    <div className="flex flex-col items-start gap-3 p-6 rounded-xl border border-gray-200 bg-white shadow-sm w-[396px] h-[249px]">
      {/* Icon */}

      <Image
        src="/assets/icons/gift-icon.png"
        alt="Gift Icon"
        width={44}
        height={44}
      />

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
