"use client";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";

const galleryImages = [
  "/assets/images/mother-child1.png",
  "/assets/images/mother-child2.png",
  "/assets/images/mother-child3.png",
  "/assets/images/mother-child4.png",
];

export const ImageGallery: NextPage = () => {
  return (
    <section className="flex w-full justify-center overflow-hidden py-16">
      <div
        className="flex gap-2 overflow-x-auto px-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="h-[350px] w-[350px] shrink-0 overflow-hidden rounded-lg shadow-lg sm:h-[505px] sm:w-[355px]"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={355}
              height={505}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
