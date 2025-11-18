import { NextPage } from "next";
import { PerkCard } from ".";

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
    <section className="flex w-full justify-center py-16">
      <div className="flex flex-col items-center gap-8 lg:w-[1240px]">
        <div className="flex w-full flex-col items-center gap-2 lg:w-[804px] lg:gap-4">
          <h2 className="lg:text-heading2 text-center text-4xl font-bold">
            Perks For Joining Early, Mama!
          </h2>
          <p className="text-body regular text-center lg:w-[552px] lg:text-2xl">
            Little goodies while you wait for Nora&apos;s big arrive
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
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
