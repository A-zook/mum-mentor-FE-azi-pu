"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/UI/Button";
import { useRouter } from "next/navigation";
import notFoundImage from "@/public/assets/images/not-found.png";
import rocket from "@/public/assets/images/Rocket.png";
import { Navbar, Footer } from "@/components/layout";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="relative mx-auto flex flex-col items-center justify-center gap-4 px-6 py-20">
        <Image
          src={notFoundImage}
          alt="404 Image"
          height={280}
          width={538.32}
          className="w-[384.77px] md:w-[631px]"
        />
        <Image
          src={rocket}
          alt="404 Image"
          height={88.6}
          width={94.6}
          className="absolute top-0 right-3 mb-5 md:right-96"
        />
        <p className="font-hanken md:text-5l text-4xl font-semibold tracking-tight">
          Opps! page not found
        </p>
        <p className="md:text-body-large text-button text-grey-text4 text-center">
          This page you are looking for cannot be found. Try again later.
        </p>
        <Button onClick={() => router.push("/")} variant="primary" size="md">
          Go to homepage
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
