import "@/app/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/NavBar";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    template: "%s - Nora",
    default: "Welcome - Nora",
  },

  description:
    "Nora is a platform that connects expecting mothers with experienced mentors for guidance and support throughout pregnancy.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="">{children}</main>
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
