"use client";
import { NextPage } from "next";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/icons/nora-icon.svg";
import { AppStoreButton, GooglePlayButton } from "../UI/AppStoreButtons";
import { companyLinks, socialLinks } from "@/data/layout-data";

export const Footer: NextPage = () => {
  const pathname = usePathname();
  const waitlist = pathname === "/waitlist";

  return (
    <footer className="bg-[#0F1419] text-white" id="footer">
      <div className="mx-auto max-w-[1440px] px-6 py-12 lg:px-20 lg:py-16">
        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:justify-between lg:gap-12">
          {/* Left Section - Logo & Description */}
          <div className="space-y-6">
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
            <p className="max-w-[400px] text-base leading-relaxed text-gray-300">
              Delivering trusted AI support to help pregnant women and moms
              navigate motherhood with confidence.
            </p>
            {!waitlist && (
              <div className="flex gap-4 p-1">
                <GooglePlayButton />
                <AppStoreButton />
              </div>
            )}

            <p className="mt-10 text-sm text-white">
              © 2025 Nora All rights reserved
            </p>
          </div>

          {/* Middle Section - Company Links */}
          {!waitlist && (
            <div>
              <h3 className="mb-6 border-b border-gray-700 pb-3 text-xl font-bold">
                Company
              </h3>
              <nav className="space-y-4">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-base text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}

          {/* Right Section - Social Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="space-y-8 lg:hidden">
          {/* Logo & Description */}
          <div className="space-y-4">
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
            <p className="text-base leading-relaxed text-gray-300">
              Delivering trusted AI support to help pregnant women and moms
              navigate motherhood with confidence.
            </p>
          </div>

          {/* App Store Buttons */}
          {!waitlist && (
            <div className="flex flex-row gap-6">
              <GooglePlayButton />
              <AppStoreButton />
            </div>
          )}
          {/* Company Links */}
          {!waitlist && (
            <div>
              <h3 className="mb-4 text-xl font-bold">Company</h3>
              <nav className="space-y-4">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-lg text-gray-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Connect</h3>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-colors hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="pt-4 text-sm text-white">
            © {new Date().getFullYear()} Nora All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
