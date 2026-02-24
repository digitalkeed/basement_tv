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
          width: "5px",
          height: "5px",
          background: "var(--lime)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          willChange: "left, top",
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
          width: click ? 16 : hover ? 60 : 32,
          height: click ? 16 : hover ? 60 : 32,
          border: "1px solid var(--paper-35)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "width 0.38s var(--ease), height 0.38s var(--ease), border-color 0.22s, background 0.22s",
          willChange: "left, top",
          ...(hover ? { background: "var(--lime-08)", borderColor: "var(--lime)" } : {}),
        }}
      />
    </>
  );
}
