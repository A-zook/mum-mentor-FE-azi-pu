"use client";

import { useState } from "react";
import Button from "@/components/UI/button";
import { useResendVerification } from "@/hooks";
import { NextPage } from "next";

export const VerificationActions: NextPage<VerificationStatusProps> = ({
  status,
}) => {
  const [email, setEmail] = useState("");
  const [showResendForm, setShowResendForm] = useState(false);

  const { mutate: resendVerification, isPending } = useResendVerification();

  const handleResend = () => {
    if (!email.trim()) return;
    resendVerification({ email: email.trim() });
  };

  if (status === "loading") {
    return (
      <p className="text-sm text-[#737373]">
        Please wait while we verify your email...
      </p>
    );
  }

  if (status === "success") {
    return (
      <div className="space-y-4">
        <div className="rounded-lg bg-green-50 p-4">
          <p className="text-sm text-green-800">
            Your email has been verified! You can now close this page and return
            to the app.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {!showResendForm ? (
        <Button onClick={() => setShowResendForm(true)} className="w-full">
          Resend Verification Email
        </Button>
      ) : (
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full rounded-lg border border-[#D5D5D5] px-4 py-2"
            disabled={isPending}
          />
          <div className="flex gap-2">
            <Button
              onClick={handleResend}
              disabled={!email.trim() || isPending}
              className="flex-1"
            >
              {isPending ? "Sending..." : "Send"}
            </Button>
            <button
              onClick={() => setShowResendForm(false)}
              disabled={isPending}
              className="rounded-lg border border-[#D5D5D5] px-4 py-2 text-sm text-[#737373] hover:bg-gray-50 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
