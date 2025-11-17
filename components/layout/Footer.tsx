import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/icons/nora-icon.svg";
import playstore from "@/public/assets/images/mobile-play-store.png";
import appstore from "@/public/assets/images/mobile-app-store.png";

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
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 transition-transform hover:scale-105"
              >
                <Image
                  src={playstore}
                  alt="Google Play Store"
                  width={164}
                  height={44}
                  className="h-11 w-[167px] object-cover"
                />
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 transition-transform hover:scale-105"
              >
                <Image
                  src={appstore}
                  alt="Apple App Store"
                  width={164}
                  height={44}
                  className="h-11 w-[164px] object-cover"
                />
              </a>
            </div>
            <p className="text-sm text-white">
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
              <div className="relative h-10 w-10">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#E63946" />
                  <path
                    d="M20 12C16.6863 12 14 14.6863 14 18C14 21.3137 16.6863 24 20 24C23.3137 24 26 21.3137 26 18C26 14.6863 23.3137 12 20 12Z"
                    fill="white"
                  />
                  <ellipse cx="20" cy="30" rx="8" ry="4" fill="#FF8C42" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-[#E63946]">NORA</span>
            </Link>
            <p className="text-base leading-relaxed text-gray-300">
              Delivering trusted AI support to help pregnant women and moms
              navigate motherhood with confidence.
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 transition-transform hover:scale-105"
            >
              <div className="flex h-14 items-center justify-center gap-2 rounded-lg border border-gray-600 bg-black px-4 hover:bg-gray-900">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z"
                    fill="#32BBFF"
                  />
                  <path
                    d="M13.792 12l10.125 10.125a.994.994 0 00-.17.144l-7.326-4.27L13.792 12z"
                    fill="#32BBFF"
                  />
                  <path
                    d="M3 2.734V21.266l10.182-9.266L3 2.734z"
                    fill="#2C9FD9"
                  />
                  <path
                    d="M16.421 6l7.326 4.27c.307.179.5.512.5.875s-.193.696-.5.875l-7.326 4.27 2.63-2.629L16.42 6z"
                    fill="#29CC5E"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase">
                    Get it on
                  </div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </div>
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 transition-transform hover:scale-105"
            >
              <div className="flex h-14 items-center justify-center gap-2 rounded-lg border border-gray-600 bg-black px-4 hover:bg-gray-900">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase">
                    Download on the
                  </div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </div>
            </a>
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
