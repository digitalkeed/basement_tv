"use client";

import { useEffect, useState, useRef } from "react";

export function Cursor111() {
  const [mounted, setMounted] = useState(false);
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isCoarse) return;

    document.body.classList.add("cursor-custom");

    const onMove = (e: MouseEvent) => {
      posRef.current.mx = e.clientX;
      posRef.current.my = e.clientY;
    };
    const animate = () => {
      const { mx, my, rx, ry } = posRef.current;
      posRef.current.rx += (mx - posRef.current.rx) * 0.12;
      posRef.current.ry += (my - posRef.current.ry) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${posRef.current.rx}px`;
        ringRef.current.style.top = `${posRef.current.ry}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMove);

    const onDown = () => setClick(true);
    const onUp = () => setClick(false);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const interactive = document.querySelectorAll("a, button");
    const onEnter = () => setHover(true);
    const onLeave = () => setHover(false);
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.body.classList.remove("cursor-custom");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={dotRef}
        id="cursor-dot"
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: click ? "4px" : "6px",
          height: click ? "4px" : "6px",
          background: "var(--acid)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.25s var(--easing), height 0.25s var(--easing)",
        }}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: click ? "20px" : hover ? "72px" : "36px",
          height: click ? "20px" : hover ? "72px" : "36px",
          border: "1px solid rgba(245,242,235,0.45)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "width 0.35s var(--easing), height 0.35s var(--easing), border-color 0.2s, background 0.25s",
          ...(hover ? { background: "rgba(212,242,68,0.08)", borderColor: "var(--acid)" } : {}),
        }}
      />
    </>
  );
}
