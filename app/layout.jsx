import React from "react"
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Garfe Coffee | Premium Ethiopian Coffee Since 1930",
  description:
    "Garfe Coffee is a proudly Ethiopian coffee company with roots stretching back nearly a century. Discover hand-selected beans from Gera and Yirgacheffe regions.",
};

export const viewport: Viewport = {
  themeColor: "#5C3317",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
