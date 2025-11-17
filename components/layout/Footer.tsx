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
    <section className="w-full bg-[#0A0D14] py-[60px] px-[20px] flex  items-start lg:h-[463px] lg:justify-center lg:items-center">
      <div className="w-full flex flex-col gap-64 lg:flex-row lg:justify-between lg:px-24">
        <div className="flex flex-col gap-24 lg:max-w-[400px] lg:gap-6">
          <Image
            src="/assets/icons/nora-icon.svg"
            alt="Nora icon"
            height={44}
            width={104}
          />
          <p className="text-2xl text-white-text leading-8">
            Delivering trusted AI support to help pregnant women and moms
            navigate motherhood with confidence.
          </p>
          <small className="hidden text-lg lg:block  text-white-text pt-6">
            &copy; 2025 Nora All rights reserved
          </small>
        </div>
        <article className="flex flex-col gap-8">
          <p className="font-semibold text-2xl text-white-text lg:pb-[20px] ">
            Company
          </p>
          <p className="lg:border-white-text border-b hidden lg:block" />

          {navItems.map((item) => (
            <Link href="" className=" text-white text-2xl" key={item.title}>
              {item.title}
            </Link>
          ))}
        </article>
        <nav className="flex flex-col gap-8">
          <p className="font-semibold text-2xl text-white-text">Connect</p>
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
        <small className="text-lg lg:hidden  text-white-text">
          &copy; 2025 Nora All rights reserved
        </small>
      </div>
    </section>
  );
};

export default Footer;
