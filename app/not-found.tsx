"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "@/components/UI/Button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAFA] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex max-w-2xl flex-col items-center text-center"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-primary text-8xl font-bold md:text-9xl">404</h1>
        </motion.div>

        {/* Title */}
        <h2 className="mb-4 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mb-8 max-w-md text-base text-[#404040] md:text-lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have moved or deleted.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button onClick={() => router.push("/")}>Go to Homepage</Button>
          <Button onClick={() => router.back()} variant="outline">
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
