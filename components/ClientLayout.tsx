"use client";

import { Nav111 } from "./Nav111";
import { Footer111 } from "./Footer111";
import { MarqueeBar } from "./MarqueeBar";
import { Cursor111 } from "./Cursor111";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Cursor111 />
      <Nav111 />
      <main id="main" style={{ paddingBottom: "30px" }}>
        {children}
      </main>
      <Footer111 />
      <MarqueeBar />
    </>
  );
}
