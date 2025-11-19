"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useVerifyEmail } from "@/hooks/use-verify-email";
import {
  getVerificationTitle,
  parseVerificationError,
  VerificationActions,
  VerificationStatusIcon,
} from "../verify-email";

export const VerifyEmail: NextPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  // Derive initial state from token synchronously (outside effect) to avoid cascading renders
  const [status, setStatus] = useState<VerificationStatus>(
    token ? "loading" : "error"
  );
  const [message, setMessage] = useState(
    token ? "" : "Invalid verification link. No token provided."
  );

  const { mutate: verifyEmail } = useVerifyEmail();

  useEffect(() => {
    // Only fire the async verification when a token exists
    if (!token) return;

    verifyEmail(
      { token },
      {
        onSuccess: (data) => {
          setStatus("success");
          setMessage(
            data.message || "Your email has been verified successfully!"
          );
        },
        onError: (error) => {
          setStatus("error");
          setMessage(parseVerificationError(error));
        },
      }
    );
  }, [token, verifyEmail]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAFA] px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-2xl border border-[#E5E5E5] bg-white p-8 text-center shadow-sm"
      >
        <div className="mb-6 flex justify-center">
          <VerificationStatusIcon status={status} />
        </div>

        <h1 className="mb-4 text-2xl font-bold text-[#1A1A1A] md:text-3xl">
          {getVerificationTitle(status)}
        </h1>

        <p className="mb-8 text-base text-[#404040] md:text-lg">{message}</p>

        <VerificationActions status={status} />
      </motion.div>
    </div>
  );
};
