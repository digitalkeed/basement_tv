import type { Metadata } from "next";
import "./globals.css";
import "./theme-basement111.css";
import { ClientLayout } from "@/components/ClientLayout";
import { GrainOverlay } from "@/components/GrainOverlay";

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
    <html lang="en" className="theme-basement111">
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
