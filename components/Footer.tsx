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
    { title: "Terms of service" },
  ];
  return (
    <section className="flex w-full items-start bg-[#0A0D14] px-[20px] py-[60px] lg:h-[463px] lg:items-center lg:justify-center">
      <div className="flex w-full flex-col gap-64 lg:flex-row lg:justify-between lg:px-24">
        <div className="flex flex-col gap-24 lg:max-w-[400px] lg:gap-6">
          <Image
            src="/assets/icons/nora-icon.svg"
            alt="Nora icon"
            height={44}
            width={104}
          />
          <p className="text-white-text text-2xl leading-8">
            Delivering trusted AI support to help pregnant women and moms
            navigate motherhood with confidence.
          </p>
          <small className="text-white-text hidden pt-6 text-lg lg:block">
            &copy; 2025 Nora All rights reserved
          </small>
        </div>
        <article className="flex flex-col gap-8">
          <p className="text-white-text text-2xl font-semibold lg:pb-[20px]">
            Company
          </p>
          <p className="lg:border-white-text hidden border-b lg:block" />

          {navItems.map((item) => (
            <Link href="" className="text-2xl text-white" key={item.title}>
              {item.title}
            </Link>
          ))}
        </article>
        <nav className="flex flex-col gap-8">
          <p className="text-white-text text-2xl font-semibold">Connect</p>
          <nav className="flex gap-24">
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
        </nav>
        <small className="text-white-text text-lg lg:hidden">
          &copy; 2025 Nora All rights reserved
        </small>
      </div>
    </section>
  );
};

export default Footer;
