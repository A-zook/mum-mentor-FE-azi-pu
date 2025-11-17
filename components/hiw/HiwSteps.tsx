import SectionHeader from "@/components/hiw/SectionHeader";
import StepBlock from "@/components/hiw/StepBlock";
import PhoneImage from "@public/assets/images/phone.png";
import Phone2Image from "@public/assets/images/phone2.png";
import Phone3Image from "@public/assets/images/phone3.png";
import Phone4Image from "@public/assets/images/phone4.png";

export const STEPS = [
  {
    id: 1,
    title: "Create Your Mom Profile",
    description:
      "Share where you are in your motherhood journey — pregnancy, newborn, toddler, school-age. Mom Mentor AI uses your routines, goals, and lifestyle to tailor support.",
    image: PhoneImage,
  },

  {
    id: 2,
    title: "Get Personalized Daily Support",
    description:
      "Receive AI-powered reminders, wellness check-ins, feeding schedules, sleep suggestions, and emotional support. Everything adjusts automatically as your child grows.",
    image: Phone2Image,
  },

  {
    id: 3,
    title: "Track Milestones Effortlessly",
    description:
      "Monitor key child-development milestones with simple logging. From first words to growth stats, everything is organized in one place.",
    image: Phone3Image,
  },

  {
    id: 4,
    title: "Your Personal AI Mom Companion",
    description:
      "Ask questions, get emotional support, and receive instant guidance—from feeding routines to self-care reminders. The AI adapts to your mood, your child’s stage, and your daily challenges, offering calm, compassionate help whenever you need it.",
    image: Phone4Image,
  },
];

export default function HiwSteps() {
  return (
    <div className="mt-[60px]  space-y-[60px] px-6">
      <div className="flex flex-col gap-[13px] items-center ">
        <SectionHeader headerText="how to get started" />
        <p className="text-2xl text-center capitalize font-semibold text-primaryText-black md:text-heading2 max-w-[780px] mx-auto">
          get started with your AI companion in easy steps
        </p>
      </div>

      <div className=" space-y-[60px]">
        {/* steps */}
        {STEPS.map((step) => (
          <StepBlock key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
}
