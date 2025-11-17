"use client";

import { useState } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  async function handleJoinWaitlist() {
    if (!email) return alert("Please enter your email");

    try {
      const response = await fetch("https://your-backend-url.com/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      alert("You have joined the waitlist successfully!");
      setEmail("");
    } catch {
      alert("Could not connect. Please try again later.");
    }
  }

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
        <div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full rounded-lg border border-[#D5D5D5] px-4 py-2 md:w-[408px]"
          />
          <button
            onClick={handleJoinWaitlist}
            className="h-12 w-full rounded-lg bg-[#DD2D4A] px-6 py-2 text-white md:w-[170px]"
          >
            Join The Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
