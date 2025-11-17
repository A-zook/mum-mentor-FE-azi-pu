"use client";

import { useNav } from "@/hooks/useNav";
import logo from "@/public/assets/icons/nora-icon.svg";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  const { isOpen, isFixed, toggleMenu } = useNav();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Waitlist", href: "/waitlist" },
    { name: "How it works", href: "/how-it-works" },
    // { name: "FAQs", href: "/faqs" },
  ];

  const desktopNavItems: DesktopNavItem[] = [
    { name: "Waitlist", href: "/waitlist" },
    { name: "How it works", href: "/how-it-works" },
    // { name: "What's New", href: "/whats-new", hasNotification: true },
  ];

  return (
    <>
      <nav
        className={`top-0 right-0 left-0 z-50 bg-white ${isFixed ? "fixed shadow-sm" : "static"} transition-all duration-300`}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <Image
                  src={logo}
                  alt="Nora Logo"
                  width={104}
                  height={44}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              {desktopNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative flex items-center gap-1 text-base font-medium text-gray-700 transition-colors hover:text-[#E63946]"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  {item.hasNotification && (
                    <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#E63946]" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <Link href="/waitlist#join-waitlist">
              <button className="hidden rounded-lg bg-[#E63946] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[#d62839] lg:block">
                Join waitlist
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-0 left-0 z-40 overflow-hidden border-b border-gray-100 bg-white lg:hidden"
          >
            <div className="mx-auto max-w-[1440px] px-6 py-8">
              <div className="flex flex-col gap-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className="block border-b border-gray-100 pb-6 text-2xl font-medium text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
