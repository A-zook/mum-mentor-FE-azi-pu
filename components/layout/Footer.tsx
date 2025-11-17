import logo from "@/public/assets/icons/nora-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { AppStoreButton, GooglePlayButton } from "../UI/AppStoreButtons";

const Footer = () => {
  const companyLinks = [
    { name: "Features", href: "/features" },
    { name: "Private Policy", href: "/privacy-policy" },
    { name: "Terms of service", href: "/terms" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/nora",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/nora",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/nora",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0F1419] text-white">
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
            <div className="flex gap-4 p-1">
              <GooglePlayButton />
              <AppStoreButton />
            </div>

            <p className="mt-10 text-sm text-white">
              © 2025 Nora All rights reserved
            </p>
          </div>

          {/* Middle Section - Company Links */}
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
          <div className="flex flex-row gap-6">
            <GooglePlayButton />
            <AppStoreButton />
          </div>
          {/* Company Links */}
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
            © 2025 Nora All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
