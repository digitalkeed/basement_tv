"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const SMOOTH = 0.15;

type CursorContextValue = {
  setLabel: (label: string | null) => void;
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function useCursorLabel(): (label: string | null) => void {
  const ctx = useContext(CursorContext);
  return useCallback((label: string | null) => ctx?.setLabel(label) ?? null, [ctx]);
}

export function SoftCursorProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [label, setLabelState] = useState<string | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(!reducedMotion && !coarsePointer);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => setTarget({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const tick = () => {
      setPos((p) => ({
        x: p.x + (target.x - p.x) * SMOOTH,
        y: p.y + (target.y - p.y) * SMOOTH,
      }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled, target.x, target.y]);

  useEffect(() => {
    if (!enabled) {
      document.body.style.cursor = "";
      return;
    }
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "";
    };
  }, [enabled]);

  const setLabel = useCallback((l: string | null) => setLabelState(l), []);

  return (
    <CursorContext.Provider value={{ setLabel }}>
      {children}
      {enabled && (
        <div
          aria-hidden
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            pointerEvents: "none",
            zIndex: 9999,
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            transformOrigin: "center center",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              marginLeft: -5,
              marginTop: -5,
              borderRadius: "50%",
              background: "var(--accent)",
              opacity: 0.9,
            }}
          />
          {label && (
            <div
              style={{
                marginLeft: 12,
                marginTop: -10,
                padding: "var(--space-1) var(--space-2)",
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-wide)",
                textTransform: "uppercase",
                background: "var(--accent)",
                color: "var(--bg-pure)",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </div>
          )}
        </div>
      )}
    </CursorContext.Provider>
  );
}
