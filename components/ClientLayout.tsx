"use client";

import { SoftCursorProvider } from "@/contexts/CursorContext";
import { PageTransition } from "./PageTransition";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SoftCursorProvider>
      <PageTransition>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </PageTransition>
    </SoftCursorProvider>
  );
}
