"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  src: string;
  poster: string;
  alt?: string;
  priority?: boolean;
  className?: string;
}

export function VideoPlayer({ src, poster, alt = "", priority = false, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isInView, setIsInView] = useState(priority);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const observerCallback = useCallback<IntersectionObserverCallback>((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setIsInView(true);
    });
  }, []);

  useEffect(() => {
    if (priority) return;
    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "100px",
      threshold: 0.1,
    });
    const el = videoRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [priority, observerCallback]);

  useEffect(() => {
    if (reducedMotion || !isInView) return;
    const video = videoRef.current;
    if (!video) return;
    setShouldPlay(true);
  }, [reducedMotion, isInView]);

  if (reducedMotion) {
    return (
      <div className={className} style={{ position: "relative", width: "100%", aspectRatio: "16/9", backgroundColor: "var(--border)" }}>
        <Image
          src={poster}
          alt={alt}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={className} style={{ position: "relative", width: "100%", aspectRatio: "16/9", backgroundColor: "var(--border)" }}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay={shouldPlay}
        aria-label={alt || "Project video"}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
