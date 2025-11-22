"use client";

import Button from "@/components/UI/button";
import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import { useState } from "react";
import { useJoinWaitlist } from "@/hooks/use-join-waitlist";

export const HeroSection: NextPage = () => {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const { mutate: joinWaitlist, isPending } = useJoinWaitlist();

  const handleNext = () => {
    if (step === 1 && fullName.trim()) {
      setStep(2);
    }
  };

  const handleJoinWaitlist = () => {
    if (!email.trim()) return;

    joinWaitlist(
      {
        full_name: fullName.trim(),
        email: email.trim(),
      },
      {
        onSuccess: () => {
          // Reset form
          setFullName("");
          setEmail("");
          setStep(1);
        },
      }
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter") {
      action();
    }
  };

  return (
    <div
      className="mt-3 flex w-full items-center justify-center px-4 lg:mt-16"
      id="join-waitlist"
    >
      <div className="flex h-[280px] w-[408px] flex-col items-center gap-4 text-center md:h-[340px] md:w-[713px] md:gap-6">
        <div className="flex flex-col gap-2 md:gap-6">
          <h1 className="md:text-heading1 text-3xl leading-snug font-bold md:leading-tight">
            Motherhood is hard. <br />
            <span className="text-primary">Nora</span> makes it softer
          </h1>

          <p className="md:text-body-large text-secondary-text mx-auto max-w-full text-xl md:max-w-[600px]">
            Get personalized guidance, emotional support, and answers anytime,
            anywhere
          </p>
        </div>

        <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-4">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex w-full flex-col justify-center gap-2 md:flex-row md:gap-4"
              >
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleNext)}
                  className="border-outline h-12 w-full rounded-lg border px-4 py-2 md:w-[408px]"
                  autoFocus
                />
                <Button onClick={handleNext} disabled={!fullName.trim()}>
                  Next
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex w-full flex-col justify-center gap-2 md:flex-row md:gap-4"
              >
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, handleJoinWaitlist)}
                  className="border-outline h-12 w-full rounded-lg border px-4 py-2 md:w-[408px]"
                  autoFocus
                />
                <Button
                  onClick={handleJoinWaitlist}
                  disabled={!email.trim() || isPending}
                >
                  {isPending ? "Joining..." : "Join The Waitlist"}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
