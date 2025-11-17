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
      <div className="flex flex-col items-center gap-8 w-[408px] md:w-[1240px]">
        <div className="flex flex-col items-center gap-2 md:gap-4 w-full md:w-[804px]">
          <h2 className="text-4xl md:text-4xl font-bold text-center">
            Perks For Joining Early, Mama!
          </h2>
          <p className="text-body regular md:text-2xl text-center md:w-[552px]">
            Little goodies while you wait for Nora&apos;s big arrival
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 w-full md:w-full">
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
