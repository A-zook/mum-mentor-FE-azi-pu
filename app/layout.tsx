import "./globals.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { Providers } from "./providers";
import { Hanken_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template: "%s - Nora",
    default: "Welcome - Nora",
  },

  description:
    "Nora is a platform that connects expecting mothers with experienced mentors for guidance and support throughout pregnancy.",
};

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.variable} antialiased`}>
        <Providers>
          {children}
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}
