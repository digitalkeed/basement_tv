import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";
import { GrainOverlay } from "@/components/GrainOverlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Basement",
  description: "Editing and post-production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
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
