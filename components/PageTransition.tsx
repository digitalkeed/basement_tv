"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const pathToTitle: Record<string, string> = {
  "/": "BASEMENT",
  "/work": "WORK",
  "/editors": "EDITORS",
  "/films": "FILMS",
  "/music-videos": "MUSIC VIDEOS",
  "/the-lookout": "THE LOOKOUT",
  "/contact": "CONTACT",
};

const DURATION_MS = 320;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [title, setTitle] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const label = (pathToTitle[pathname] ?? pathname.slice(1).toUpperCase()) || "BASEMENT";
    setTitle(label);
    if (reduced) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const t = setTimeout(() => setVisible(false), DURATION_MS);
    return () => clearTimeout(t);
  }, [pathname, reduced]);

  return (
    <>
      {title && (
        <motion.div
          aria-hidden
          initial={false}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: reduced ? 0 : 0.15 }}
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 9998,
            fontSize: "var(--text-sm)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          {title}
        </motion.div>
      )}
      {children}
    </>
  );
}
