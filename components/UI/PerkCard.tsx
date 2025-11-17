import Image from "next/image";

type PerkCardProps = {
  title: string;
  description: string;
};

export default function PerkCard({ title, description }: PerkCardProps) {
  return (
    <div className="flex h-[249px] w-full max-w-[396px] flex-col items-start gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
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
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}
