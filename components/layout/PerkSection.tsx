import PerkCard from "@/components/UI/PerkCard";

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

export default function PerksSection() {
  return (
    <section className="w-full flex justify-center py-16">
      <div className="flex flex-col items-center gap-8 w-[408px] lg:w-[1240px]">
        <div className="flex flex-col items-center gap-2 lg:gap-4 w-full lg:w-[804px]">
          <h2 className="text-4xl lg:text-4xl font-bold text-center">
            Perks For Joining Early, Mama!
          </h2>
          <p className="text-body regular lg:text-2xl text-center lg:w-[552px]">
            Little goodies while you wait for Nora&apos;s big arrive
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-8 w-full lg:w-full">
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
}
