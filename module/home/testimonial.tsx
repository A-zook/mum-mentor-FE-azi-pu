"use client";

import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    quote:
      "NORA feels like having a supportive friend who truly understands. The gentle check-ins and personalized advice have made such a difference in my confidence as a new mum.",
    author: "Sarah Mitchell",
    role: "Mother of 4-month-old",
    image: "/assets/images/testimonial_user_icon.jpg",
  },
  {
    id: 2,
    quote:
      "As a first-time mum-to-be, I had so many questions and anxieties. NORA provides just the right amount of guidance without being overwhelming. I feel so much more prepared. Thank you!",
    author: "Sarah Mitchell",
    role: "Mother of 4-month-old",
    image: "/assets/images/testimonial_user_icon.jpg",
  },
  {
    id: 3,
    quote:
      "NORA feels like having a supportive friend who truly understands. The gentle check-ins and personalized advice have made such a difference in my confidence as a new mum.",
    author: "Sarah Mitchell",
    role: "Mother of 4-month-old",
    image: "/assets/images/testimonial_user_icon.jpg",
  },
];

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
        className="h-12 w-12 md:h-16 md:w-16"
      >
        <path
          d="M14.2222 42.6667V28.4444C14.2222 23.7037 15.6667 19.8519 18.5556 16.8889C21.4444 13.9259 25.037 12.4444 29.3333 12.4444V18.6667C26.8148 18.6667 24.7407 19.5185 23.1111 21.2222C21.4815 22.9259 20.6667 25 20.6667 27.5556V28.4444H29.3333V42.6667H14.2222ZM40.8889 42.6667V28.4444C40.8889 23.7037 42.3333 19.8519 45.2222 16.8889C48.1111 13.9259 51.7037 12.4444 56 12.4444V18.6667C53.4815 18.6667 51.4074 19.5185 49.7778 21.2222C48.1481 22.9259 47.3333 25 47.3333 27.5556V28.4444H56V42.6667H40.8889Z"
          fill="#E11D48"
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
          <h2 className="mb-4 text-3xl font-bold text-[#1A1A1A] md:text-4xl lg:text-5xl">
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
