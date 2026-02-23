"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type VideoHoverProps = {
  videoSrc: string;
  poster: string;
  alt?: string;
  /** Aspect ratio container */
  aspectRatio?: string;
};

export function VideoHover({ videoSrc, poster, alt = "", aspectRatio = "16/9" }: VideoHoverProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const coarse = window.matchMedia("(pointer: coarse)");
    setIsTouch(coarse.matches);
  }, []);

  const shouldPlay = hover && !reducedMotion && !isTouch;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (shouldPlay) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [shouldPlay]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        backgroundColor: "var(--border)",
        overflow: "hidden",
        minHeight: 0,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {reducedMotion || isTouch ? (
        <Image src={poster} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
      ) : (
        <>
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", opacity: shouldPlay ? 0 : 1, transition: "opacity var(--motion-duration)" }}
            aria-hidden
          />
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            aria-label={alt || "Preview"}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: shouldPlay ? 1 : 0,
              transition: "opacity var(--motion-duration)",
            }}
          />
        </>
      )}
    </div>
  );
}
