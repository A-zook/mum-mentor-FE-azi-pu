"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavBarProps {
  onClose: () => void; // parent passes a function to close
}
const NavBar: React.FC<NavBarProps> = ({ onClose }) => {
  const navItems = [{ title: "Home" }, { title: "Perks" }, { title: "FAQs" }];

  return (
    <div className="bg-white-text fixed top-0 right-0 left-0 h-[302px] w-full px-5">
      <header className="flex w-full items-center justify-between pt-[23px] pb-3">
        <Image
          src="/assets/icons/nora-icon.svg"
          alt="Nora icon"
          height={30.67}
          width={76}
        />
        <button onClick={onClose}>
          {" "}
          <Image
            src="/assets/icons/x.svg"
            alt="Close bar icon"
            height={24}
            width={24}
          />
        </button>
      </header>
      <nav className="flex flex-col justify-start gap-3">
        {navItems.map((item) => (
          <Link
            href=""
            key={item.title}
            className="border-outline border-b-[0.4px] px-3 py-4 font-semibold text-[#000000]"
            onClick={onClose}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
