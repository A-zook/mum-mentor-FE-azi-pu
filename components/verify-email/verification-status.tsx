"use client";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { NextPage } from "next";

export const VerificationStatusIcon: NextPage<VerificationStatusProps> = ({
  status,
}) => {
  if (status === "loading") {
    return (
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-50">
        <Loader2 className="h-10 w-10 animate-spin text-pink-600" />
      </div>
    );
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50"
      >
        <CheckCircle2 className="h-10 w-10 text-green-600" />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50"
    >
      <XCircle className="h-10 w-10 text-red-600" />
    </motion.div>
  );
};
