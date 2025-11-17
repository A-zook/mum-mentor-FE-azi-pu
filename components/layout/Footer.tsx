import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const images = [
    { src: "/assets/icons/twitter.png", alt: "Twitter Icon" },
    { src: "/assets/icons/indeed.png", alt: "Indeed Icon" },
    { src: "/assets/icons/facebook.png", alt: "Facebook Icon" },
  ];

  const navItems = [
    { title: "Features" },
    { title: "Privacy Policy" },
    { title: "TErms of service" },
  ];
  return (
    <section className="bg-bg-footer flex w-full flex-col items-start gap-64 py-4">
      <div className="flex flex-col gap-24">
        <Image
          src="/assets/icons/nora-icon.svg"
          alt="Nora icon"
          height={44}
          width={104}
        />
        <p className="text-2xl">
          Delivering trusted AI support to help pregnant women and moms navigate
          motherhood with confidence.
        </p>
        <small className="hidden text-lg lg:block">
          &copy; 2025 Nora All rights reserved
        </small>
      </div>
      <article className="flex flex-col gap-16">
        <p className="text-2xl font-semibold">Company</p>
        {navItems.map((item) => (
          <Link href="" className="text-sm" key={item.title}>
            {item.title}
          </Link>
        ))}
      </article>
      <nav className="flex gap-24">
        <p className="text-2xl font-semibold">Connect</p>
        {images.map((item) => (
          <Image
            src={item.src}
            alt={item.alt}
            height={24}
            width={24}
            key={item.alt}
          />
        ))}
      </nav>
      <small className="text-lg lg:hidden">
        &copy; 2025 Nora All rights reserved
      </small>
    </section>
  );
};

export default Footer;
