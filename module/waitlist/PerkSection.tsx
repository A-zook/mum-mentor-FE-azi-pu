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
    <section className="flex w-full justify-center px-4 py-16 md:px-8 md:py-24">
      <div className="flex w-[408px] flex-col items-center gap-8 md:w-[1240px]">
        <div className="flex w-full flex-col items-center gap-2 md:w-[804px] md:gap-4">
          <h2 className="text-center text-4xl font-bold md:text-4xl">
            Perks For Joining Early, Mama!
          </h2>
          <p className="text-body regular text-center md:w-[552px] md:text-2xl">
            Little goodies while you wait for Nora&apos;s big arrival
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:w-full md:grid-cols-3 md:gap-8">
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
