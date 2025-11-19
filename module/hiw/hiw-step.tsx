import { STEPS } from "@/data/how-it-works-data";
import { NextPage } from "next";
import { SectionHeader, StepBlock } from ".";

export const HiwSteps: NextPage = () => {
  return (
    <div className="mt-60 space-y-60 px-6">
      <div className="flex flex-col items-center gap-3.5">
        <SectionHeader headerText="how to get started" />
        <p className="text-primary-text md:text-heading2 mx-auto max-w-[780px] text-center text-2xl font-semibold capitalize">
          get started with your AI companion in easy steps
        </p>
      </div>

      <div className="space-y-60">
        {/* steps */}
        {STEPS.map((step) => (
          <StepBlock key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
};
