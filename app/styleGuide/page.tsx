"use client";
import React, { useState } from "react";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import Button from "@/components/UI/Button";
import Footer from "@/components/layout/Footer";

const Page = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="bg-white-text min-h-screen">
      <header className="fixed top-0 right-0 left-0 flex items-center justify-between px-5 py-2.5">
        <Image
          src="/assets/icons/nora-icon.svg"
          alt="Nora icon"
          width={66}
          height={27.73}
        />
        <button
          onClick={() => {
            setIsNavOpen(true);
          }}
        >
          <Image
            src="/assets/icons/closed.svg"
            alt="Nav Bar Icon"
            height={24}
            width={24}
          />
        </button>
      </header>
      {isNavOpen && <NavBar />}
      <section className="pt-12">
        <p>This is a test page</p>
        <Button
          size="lg"
          variant="primary"
          className="mx-auto mb-5 flex items-center"
        >
          me
        </Button>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
