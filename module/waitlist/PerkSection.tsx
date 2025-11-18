import PerkCard from "@/components/UI/PerkCard";
import { NextPage } from "next";

const perks = [
  {
    title: "First-in-Line Access",
    description:
      "Meet Nora before everyone else and experience the support early.",
  },
  {
    title: "Special Mum Perks",
    description:
      "Unlock mini-guides, calming routines, and bonus resources just for early users.",
  },
  {
    title: "Insider Updates",
    description:
      "Stay ahead with development updates, new tools, and behind-the-scenes improvements.",
  },
];

export const PerksSection: NextPage = () => {
  return (
    <section className="flex w-full justify-center overflow-hidden px-4 py-6">
      <div className="flex w-full max-w-[408px] flex-col items-center gap-8 md:max-w-[976px] lg:max-w-[1240px]">
        <div className="flex w-full flex-col items-center gap-2 lg:max-w-[804px] lg:gap-4">
          <h2 className="lg:text-heading2 text-center text-4xl font-bold">
            Perks For Joining Early, Mama!
          </h2>
          <p className="text-body-regular text-center lg:max-w-[552px] lg:text-2xl">
            Little goodies while you wait for Nora&apos;s big arrive
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-[26px]">
          {perks.map((perk, index) => (
            <PerkCard
              key={index}
              title={perk.title}
              description={perk.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
