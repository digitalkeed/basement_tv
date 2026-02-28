import type { Metadata } from "next";
import { Bebas_Neue, Space_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Basement Studio | Communication & Video Production",
  description: "Communication and video production. Pristina, Kosovo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${bebasNeue.variable} ${spaceMono.variable}`}>
      <body className="bg-[#050505] text-[#fafafa] antialiased overflow-x-hidden max-w-[100vw] box-border grain" style={{ fontFamily: "system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif" }}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
