import StarIcon from "@/public/assets/icons/star.svg";
import Image from "next/image";

export default function SectionHeader({ headerText }: { headerText: string }) {
  return (
    <div className="flex items-center gap-10">
      <Image src={StarIcon} alt="A star icon" quality={100} priority />

      <p className="text-primary uppercase md:text-2xl font-semibold">
        {headerText}
      </p>
    </div>
  );
}
