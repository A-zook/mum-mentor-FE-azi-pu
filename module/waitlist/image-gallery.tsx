"use client";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Image from "next/image";

const galleryImages = [
  "/assets/images/mother-kissing-baby-soft-light.png",
  "/assets/images/mother-holding-newborn-dark-background.png",
  "/assets/images/mother-child-outdoors-floral-sunlight.png",
  "/assets/images/mother-holding-baby-orange-background.png",
];

export const ImageGallery: NextPage = () => {
  return (
    <section className="flex w-full justify-center overflow-hidden py-6">
      <div
        className="flex gap-2 overflow-x-auto overflow-y-hidden px-4"
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="h-[350px] w-[350px] shrink-0 overflow-hidden rounded-lg shadow-lg md:h-[422px] md:w-[297px] md:rounded-[6.68px] lg:h-[505px] lg:w-[355px]"
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
