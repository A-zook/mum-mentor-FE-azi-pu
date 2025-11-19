import { STEPS } from "@/data/how-it-works-data";
import { GetStartedStep } from "@/module/how-it-works/get-started-step";
import { SectionHeaderText } from "@/module/how-it-works/section-header-text";
import { NextPage } from "next";

export const HowtoGetStarted: NextPage = () => {
  return (
    <div className="mt-60 space-y-60 px-6">
      <div className="flex flex-col items-center gap-3.5">
        <SectionHeaderText headerText="how to get started" />
        <p className="text-primary-text md:text-heading2 mx-auto max-w-[780px] text-center text-2xl font-semibold capitalize">
          get started with your AI companion in easy steps
        </p>
      </div>

      <div className="space-y-60">
        {/* steps */}
        {STEPS.map((step) => (
          <GetStartedStep key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
};
