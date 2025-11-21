import { WHATS_NEW_EXPLORATION } from "@/data/whats-new-data";
import { NewFeatureBlock } from "@/module/whats-new/new-feature-block";
import { NextPage } from "next";

export const WhatsNewExploration: NextPage = () => {
  return (
    <div className="space-y-60 px-6">
      <div className="space-y-3 md:space-y-4">
        <h1 className="text-primary-text md:text-heading2 text-center text-4xl font-semibold capitalize">
          explore what&apos; new
        </h1>

        <p className="text-grey-text4 mx-auto max-w-3xl text-center text-xl leading-7 font-medium md:text-2xl md:leading-9">
          Everything you need to feel supported, informed, and confident
          throughout your motherhood journey
        </p>
      </div>

      {/* steps */}
      <div className="space-y space-y-60">
        {/* steps */}
        {WHATS_NEW_EXPLORATION.map((feature) => (
          <NewFeatureBlock key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};
