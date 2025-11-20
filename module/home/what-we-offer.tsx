import ScrollAnimationWrapper from "@/components/UI/ScrollAnimation";
import { NextPage } from "next";

const features = [
  {
    id: 1,
    icon: (
      <svg
        width="34"
        height="30"
        viewBox="0 0 34 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[27px] lg:size-[34px]"
      >
        <path
          d="M24.0667 0C21.05 0 18.35 1.46667 16.6667 3.71667C14.9833 1.46667 12.2833 0 9.26667 0C4.15 0 0 4.16667 0 9.31667C0 11.3 0.316667 13.1333 0.866667 14.8333C3.5 23.1667 11.6167 28.15 15.6333 29.5167C16.2 29.7167 17.1333 29.7167 17.7 29.5167C21.7167 28.15 29.8333 23.1667 32.4667 14.8333C33.0167 13.1333 33.3333 11.3 33.3333 9.31667C33.3333 4.16667 29.1833 0 24.0667 0Z"
          fill="white"
        />
      </svg>
    ),
    title: "Emotional Support",
    description:
      "Get daily check-ins, gentle encouragement, and empathetic responses when you need someone to listen. You're never alone.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="34"
        height="32"
        viewBox="0 0 34 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[27px] lg:size-[34px]"
      >
        <path
          d="M25 0H8.33333C3.33333 0 0 3.33333 0 8.33333V18.3333C0 23.3333 3.33333 26.6667 8.33333 26.6667V30.2167C8.33333 31.55 9.81667 32.35 10.9167 31.6L18.3333 26.6667H25C30 26.6667 33.3333 23.3333 33.3333 18.3333V8.33333C33.3333 3.33333 30 0 25 0ZM16.6667 20.2833C15.9667 20.2833 15.4167 19.7167 15.4167 19.0333C15.4167 18.35 15.9667 17.7833 16.6667 17.7833C17.3667 17.7833 17.9167 18.35 17.9167 19.0333C17.9167 19.7167 17.3667 20.2833 16.6667 20.2833ZM18.7667 13.3667C18.1167 13.8 17.9167 14.0833 17.9167 14.55V14.9C17.9167 15.5833 17.35 16.15 16.6667 16.15C15.9833 16.15 15.4167 15.5833 15.4167 14.9V14.55C15.4167 12.6167 16.8333 11.6667 17.3667 11.3C17.9833 10.8833 18.1833 10.6 18.1833 10.1667C18.1833 9.33333 17.5 8.65 16.6667 8.65C15.8333 8.65 15.15 9.33333 15.15 10.1667C15.15 10.85 14.5833 11.4167 13.9 11.4167C13.2167 11.4167 12.65 10.85 12.65 10.1667C12.65 7.95 14.45 6.15 16.6667 6.15C18.8833 6.15 20.6833 7.95 20.6833 10.1667C20.6833 12.0667 19.2833 13.0167 18.7667 13.3667Z"
          fill="white"
        />
      </svg>
    ),
    title: "Personalized Guidance",
    description:
      "Receive short, actionable advice tailored to your unique situation. No overwhelming information, just what you need.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="30"
        height="31"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6 lg:size-[30px]"
      >
        <path
          d="M22.9167 0.0999999V2.5C22.9167 3.18333 22.35 3.75 21.6667 3.75C20.9833 3.75 20.4167 3.18333 20.4167 2.5V0H9.58333V2.5C9.58333 3.18333 9.01667 3.75 8.33333 3.75C7.65 3.75 7.08333 3.18333 7.08333 2.5V0.0999999C2.16667 0.55 0 3.71667 0 8.33333V22.5C0 27.5 2.5 30.8333 8.33333 30.8333H21.6667C27.5 30.8333 30 27.5 30 22.5V8.33333C30 3.71667 27.8333 0.55 22.9167 0.0999999ZM15 22.0833H8.33333C7.65 22.0833 7.08333 21.5167 7.08333 20.8333C7.08333 20.15 7.65 19.5833 8.33333 19.5833H15C15.6833 19.5833 16.25 20.15 16.25 20.8333C16.25 21.5167 15.6833 22.0833 15 22.0833ZM21.6667 13.75H8.33333C7.65 13.75 7.08333 13.1833 7.08333 12.5C7.08333 11.8167 7.65 11.25 8.33333 11.25H21.6667C22.35 11.25 22.9167 11.8167 22.9167 12.5C22.9167 13.1833 22.35 13.75 21.6667 13.75Z"
          fill="white"
        />
      </svg>
    ),
    title: "Stage-Based Support",
    description:
      "From pregnancy to toddler years, get proactive reminders and timely tips for every milestone your baby reaches.",
  },
  {
    id: 4,
    icon: (
      <svg
        width="33"
        height="34"
        viewBox="0 0 33 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[27px] lg:size-[33px]"
      >
        <path
          d="M26.2633 6.66667C25.2466 6.66667 24.3133 6.08333 23.8466 5.18333L22.6466 2.76667C21.88 1.25 19.88 0 18.18 0H14.3633C12.6466 0 10.6466 1.25 9.87997 2.76667L8.67997 5.18333C8.2133 6.08333 7.27997 6.66667 6.2633 6.66667C2.64663 6.66667 -0.220033 9.71667 0.0133001 13.3167L0.879967 27.0833C1.07997 30.5167 2.92997 33.3333 7.52997 33.3333H24.9966C29.5966 33.3333 31.43 30.5167 31.6466 27.0833L32.5133 13.3167C32.7466 9.71667 29.88 6.66667 26.2633 6.66667ZM13.7633 8.75H18.7633C19.4466 8.75 20.0133 9.31667 20.0133 10C20.0133 10.6833 19.4466 11.25 18.7633 11.25H13.7633C13.08 11.25 12.5133 10.6833 12.5133 10C12.5133 9.31667 13.08 8.75 13.7633 8.75ZM16.2633 26.8667C13.1633 26.8667 10.63 24.35 10.63 21.2333C10.63 18.1167 13.1466 15.6 16.2633 15.6C19.38 15.6 21.8966 18.1167 21.8966 21.2333C21.8966 24.35 19.3633 26.8667 16.2633 26.8667Z"
          fill="white"
        />
      </svg>
    ),
    title: "Memory Timeline",
    description:
      "Capture and organize precious moments. Create a beautiful visual journey of your motherhood experience to cherish forever.",
  },
];

export const WhatWeOffer: NextPage = () => {
  return (
    <div className="mx-auto my-50 px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-60">
        <div className="flex max-w-[750px] flex-col items-center gap-4">
          <h3 className="lg:text-heading2 text-secondary-text text-center text-3xl leading-tight font-bold md:text-4xl">
            What We Offer
          </h3>
          <p className="text-secondary-text text-center text-lg leading-relaxed md:text-xl lg:text-2xl">
            Everything you need to feel supported, informed, and confident
            throughout your motherhood journey.
          </p>
        </div>

        <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <ScrollAnimationWrapper
              key={index}
              style="border-outline flex max-w-[600px] flex-col gap-2.5 rounded-lg border px-4 py-5 lg:px-[60px] lg:py-[60px]"
            >
              <div className="flex flex-col gap-4 lg:gap-6">
                <div className="flex h-11 w-12 items-center justify-center rounded-xl bg-[#DD2D4A] lg:h-16 lg:w-[68px]">
                  {feature.icon}
                </div>
                <h4 className="text-primaryText-black text-2xl font-bold lg:text-3xl">
                  {feature.title}
                </h4>
                <p className="text-gray-text3 text-lg lg:text-xl">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};
