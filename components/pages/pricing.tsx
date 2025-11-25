// components/pages/pricing.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/UI/Button";
import ScrollAnimationWrapper from "../UI/scroll-animation"; // Changed to relative import
import { Check } from "lucide-react";
import { NextPage } from "next";

const pricingPlans = [
  {
    id: 1,
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "Basic AI chat support",
      "Daily mood check-ins",
      "Community access",
      "Basic milestone tracking",
      "Weekly wellness tips",
    ],
    highlighted: false,
  },
  {
    id: 2,
    name: "Premium",
    price: "$99",
    period: "/ month",
    billing: "billed monthly",
    features: [
      "Everything in Free",
      "Unlimited AI conversations",
      "Personalized meal plans",
      "Advanced milestone tracking",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    id: 3,
    name: "Premium Plus",
    price: "$99",
    period: "/ month",
    billing: "billed monthly",
    features: [
      "Everything in Premium",
      "Personal AI coach",
      "Custom wellness programs",
      "Expert consultations",
      "Partner account access",
    ],
    highlighted: false,
  },
];

const Pricing: NextPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="px-6 pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[768px] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-4xl leading-tight font-bold text-[#1A1A1A] md:text-5xl lg:text-[56px] lg:leading-[64px]"
          >
            The Care You Need, at a Price That Fits Your Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl leading-relaxed text-[#4D4D4D] md:text-2xl lg:leading-[32px]"
          >
            Start with the essentials at no cost, and upgrade anytime to access
            smarter AI guidance and premium wellbeing features.
          </motion.p>
        </div>
      </section>

      {/* Toggle Section */}
      <section className="px-6 pb-12 md:pb-16">
        <div className="mx-auto flex max-w-[357.61px] items-center justify-center gap-4">
          <span
            className={`text-lg leading-[32px] font-normal ${!isYearly ? "text-[#1A1A1A]" : "text-[#1A1A1A]/60"}`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative h-[33px] w-[77.09px] rounded-full bg-[#1A1A1A]/15"
            aria-label="Toggle pricing period"
          >
            <motion.div
              animate={{
                x: isYearly ? 40 : 2,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-[6px] h-[21px] w-[21px] rounded-full bg-[#FAFAFA] shadow-sm"
            />
          </button>
          <span
            className={`text-lg leading-[32px] font-normal ${isYearly ? "text-[#1A1A1A]" : "text-[#1A1A1A]/60"}`}
          >
            Yearly
          </span>
          {isYearly && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-[14.5px] bg-[#DD2D4A]/10 px-3 py-1 text-[13px] leading-[17px] font-bold tracking-[1.625px] text-[#DD2D4A] uppercase"
            >
              Save 25%
            </motion.span>
          )}
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <ScrollAnimationWrapper key={plan.id}>
              <div
                className={`flex h-full flex-col rounded-lg border p-8 ${
                  plan.highlighted
                    ? "border-[#E5E5E5] bg-white shadow-lg"
                    : "border-[#E5E5E5] bg-white"
                }`}
              >
                {/* Plan Name */}
                <h3 className="mb-4 text-sm leading-[18px] font-bold tracking-[1.625px] text-[#DD2D4A] uppercase">
                  {plan.name}
                </h3>

                {/* Pricing */}
                <div className="mb-3">
                  <div className="flex items-end gap-2">
                    <span className="text-2xl leading-[65px] font-bold tracking-[-0.8px] text-[#1A1A1A]">
                      {plan.price}
                    </span>
                    <span className="text-[17px] leading-[29px] font-normal tracking-[-0.094px] text-[#1A1A1A]">
                      {plan.period}
                    </span>
                  </div>
                  {plan.billing && (
                    <p className="text-base leading-[26px] font-normal tracking-[-0.1px] text-[#4D4D4D] opacity-70">
                      {plan.billing}
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="mb-7 flex-grow space-y-[14px]">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-[11px]">
                      <Check className="h-[17px] w-[17px] shrink-0 text-[#2ECC71]" />
                      <span className="text-lg leading-[32px] font-normal text-[#1A1A1A]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  <span>Get Started</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.43 5.93018L20.5 12.0002L14.43 18.0702"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 12H20.33"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
