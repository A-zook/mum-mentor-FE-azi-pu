import StarIcon from "@public/assets/icons/star.svg";
import { NextPage } from "next";
import Image from "next/image";

export const SectionHeaderText: NextPage<{
  headerText: string;
}> = ({ headerText }) => {
  return (
    <div className="flex items-center gap-2.5">
      <Image src={StarIcon} alt="A star icon" quality={100} priority />

      <p className="text-primary font-semibold uppercase md:text-xl">
        {headerText}
      </p>
    </div>
  );
};
