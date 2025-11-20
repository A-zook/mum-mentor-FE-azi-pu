import { NextPage } from "next";
import { PerkCard } from ".";
import { perkData } from "../../data/perk-data";

export const PerksSection: NextPage = () => {
  return (
    <section className="flex w-full justify-center py-16">
      <div className="flex flex-col items-center gap-8 lg:w-[1240px]">
        <div className="flex w-full flex-col items-center gap-2 lg:w-[804px] lg:gap-4">
          <h2 className="lg:text-heading2 text-center text-4xl font-bold">
            Perks For Joining Early, Mama!
          </h2>
          <p className="text-body-regular text-center lg:max-w-[552px] lg:text-2xl">
            Little goodies while you wait for Nora&apos;s big arrive
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {perkData.map((perk, index) => (
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
