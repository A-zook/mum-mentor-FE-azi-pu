"use client";

import Button from "@/components/UI/Button";
import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import { useState } from "react";
import { toast } from "sonner";

export const HeroSection: NextPage = () => {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (step === 1 && fullName.trim()) {
      setStep(2);
    }
  };

  const handleJoinWaitlist = async () => {
    if (!email.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://kaizen.emerj.net/api/v1/contact/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullName.trim(),
            email: email.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || data.message || "Failed to join waitlist"
        );
      }

      toast.success("Welcome to the waitlist!", {
        description: "We'll notify you when Nora is ready.",
      });

      // Reset form
      setFullName("");
      setEmail("");
      setStep(1);
    } catch (error) {
      toast.error("Something went wrong", {
        description:
          error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter") {
      action();
    }
  };

  return (
    <div className="mt-16 flex w-full items-center justify-center px-4">
      <div className="flex h-[280px] w-[408px] flex-col items-center gap-4 text-center md:h-[340px] md:w-[713px] md:gap-6">
        <div className="flex flex-col gap-2 md:gap-6">
          <h1 className="md:text-heading1 md:leading-64px text-3xl leading-snug font-bold">
            Motherhood is hard. <br />
            <span className="text-pink-600">Nora</span> makes it softer
          </h1>
          <p className="md:text-body-large mx-auto max-w-full text-[20px] text-[#1A1A1A] md:max-w-[600px]">
            Get personalized guidance, emotional support, and answers anytime,
            anywhere
          </p>
        </div>

        <div
          className="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-4"
          id="join-waitlist"
        >
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex w-full flex-col gap-2 md:flex-row md:gap-4"
              >
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleNext)}
                  className="h-12 w-full rounded-lg border border-[#D5D5D5] px-4 py-2 md:w-[408px]"
                  autoFocus
                />
                <Button onClick={handleNext} disabled={!fullName.trim()} className="flex-1">
                  Next
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex w-full flex-col gap-2 md:flex-row md:gap-4"
              >
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleJoinWaitlist)}
                  className="h-12 w-full rounded-lg border border-[#D5D5D5] px-4 py-2 md:w-[408px]"
                  autoFocus
                />
                <Button
                  onClick={handleJoinWaitlist}
                  disabled={!email.trim() || isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join The Waitlist"}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
