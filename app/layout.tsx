import "@/app/globals.css";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

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
        {/* <NavBar /> */}
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
