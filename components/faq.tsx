"use client";

import ScrollAnimationWrapper from "@/components/UI/ScrollAnimation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqData: FAQItem[] = [
  {
    question: "What is NORA?",
    answer:
      "NORA is an AI-powered companion built to support mums with quick answers, daily guidance, emotional support, and practical tools for every stage of motherhood.",
  },
  {
    question: "Can I delete my data anytime?",
    answer:
      "Yes, you have full control over your data. You can delete your account and all associated data at any time through the app settings.",
  },
  {
    question: "Do I need to subscribe?",
    answer:
      "NORA offers both free and premium subscription options. The free version provides basic features, while the premium subscription unlocks advanced AI insights and personalized support.",
  },
  {
    question: "What makes Mum Mentor different from other AI platforms?",
    answer:
      "Mum Mentor is specifically designed for mothers, with AI trained on maternal health, child development, and parenting expertise. It provides personalized, empathetic support tailored to your unique journey.",
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-bg-main py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-20">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-[641px] text-base text-gray-600 md:text-lg lg:text-2xl">
            A safe space to learn more about how the platform works and how it
            protects you.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <ScrollAnimationWrapper
              key={index}
              style="overflow-hidden rounded-2xl bg-white transition-all hover:bg-gray-100"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full cursor-pointer items-center justify-between px-6 py-6 text-left md:px-8 md:py-7"
                aria-expanded={openIndex === index}
              >
                <span className="text-primaryText-black pr-8 text-lg font-bold md:text-2xl">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0"
                >
                  <svg
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-7">
                      <p className="text-secondary-text text-base leading-relaxed md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Contact Support */}
        {/* <div className="mt-12 text-center md:mt-16">
          <p className="text-base text-gray-600 md:text-lg">
            Haven&apos;t gotten your answer?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#E63946] transition-colors hover:text-[#d62839]"
            >
              Contact our support now
            </Link>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default FAQAccordion;
