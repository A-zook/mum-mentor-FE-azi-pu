"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/assets/images/mother-child1.png",
  "/assets/images/mother-child2.png",
  "/assets/images/mother-child3.png",
  "/assets/images/mother-child4.png",
];

export default function ImageGallery() {
  return (
    <section className="w-full flex justify-center py-16 overflow-hidden">
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
            className="shrink-0 w-[350px] h-[350px] sm:w-[355px] sm:h-[505px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={355}
              height={505}
              className="w-full h-full object-cover"
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
}
