import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import "./theme-basement111.css";
import { ClientLayout } from "@/components/ClientLayout";
import { GrainOverlay } from "@/components/GrainOverlay";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "Basement — Editing & Post-Production",
  description: "Editing and post-production. Work that moves.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`theme-basement111 ${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <GrainOverlay />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
