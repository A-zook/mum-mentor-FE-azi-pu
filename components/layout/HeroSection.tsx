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
    <div className="bg-white w-full flex flex-col justify-center items-center px-4 mt-16">
      <div className="w-[1440px] h-[43px]" />
      <div
        className="flex flex-col items-center gap-4 
                      w-[408px] h-[280px] 
                      md:w-[713px] md:h-[340px] md:gap-6 text-center"
      >
        <div className="flex flex-col gap-2 md:gap-6">
          <h1 className="text-3xl md:text-heading1 leading-snug md:leading-64px font-bold">
            Motherhood is hard. <br />
            <span className="text-pink-600">Nora</span> makes it softer
          </h1>
          <p className="text-[20px] md:text-body-large text-[#1A1A1A] max-w-full md:max-w-[600px] mx-auto">
            Get personalized guidance, emotional support, and answers anytime,
            anywhere
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full md:flex-row md:items-center md:justify-center md:gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[#D5D5D5] border rounded-lg px-4 py-2 w-full h-12 md:w-[408px]"
          />
          <button
            onClick={handleJoinWaitlist}
            className="bg-[#DD2D4A] text-white px-6 py-2 rounded-lg w-full h-12 md:w-[170px]"
          >
            Join The Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}
