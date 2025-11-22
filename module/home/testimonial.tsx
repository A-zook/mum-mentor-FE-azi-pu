"use client";

import { testimonials } from "@/data/testimonial";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";

const TestimonialCard = ({
  quote,
  author,
  role,
  image,
  index,
}: {
  quote: string;
  author: string;
  role: string;
  image: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-6 rounded-2xl border border-[#E5E5E5] bg-white p-6 md:p-8"
    >
      {/* Quote Icon */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.4264 32.9859H54.933C54.7197 45.4392 52.2664 47.4925 44.613 52.0259C43.733 52.5592 43.4397 53.6792 43.973 54.5859C44.5064 55.4659 45.6264 55.7592 46.533 55.2259C55.5464 49.8925 58.693 46.6392 58.693 31.1192V16.7459C58.693 12.1859 54.9864 8.50586 50.453 8.50586H42.453C37.7597 8.50586 34.213 12.0525 34.213 16.7459V24.7459C34.1864 29.4392 37.733 32.9859 42.4264 32.9859Z"
          fill="#DD2D4A"
        />
        <path
          d="M13.574 32.9859H26.0806C25.8673 45.4392 23.414 47.4925 15.7606 52.0259C14.8806 52.5592 14.5873 53.6792 15.1207 54.5859C15.654 55.4659 16.774 55.7592 17.6807 55.2259C26.694 49.8925 29.8406 46.6392 29.8406 31.1192V16.7459C29.8406 12.1859 26.134 8.50586 21.6007 8.50586H13.6006C8.88065 8.50586 5.33398 12.0525 5.33398 16.7459V24.7459C5.33398 29.4392 8.88065 32.9859 13.574 32.9859Z"
          fill="#DD2D4A"
        />
      </svg>

      {/* Quote Text */}
      <p className="text-base leading-relaxed text-[#404040] md:text-lg">
        {quote}
      </p>

      {/* Divider */}
      <div className="h-px w-full bg-[#E5E5E5]" />

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={image}
            alt={author}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p className="font-semibold text-[#1A1A1A]">{author}</p>
          <p className="text-sm text-[#737373]">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialsSection: NextPage = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-primary-text mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
            Loved by mothers everywhere
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#404040] md:text-lg lg:text-xl">
            Join thousands of mums who have found support, guidance, and
            companionship with NORA
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
