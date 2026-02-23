"use client";

import { motion, useReducedMotion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function ScrollReveal({ children, className, style }: ScrollRevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? "visible" : "hidden"}
      whileInView={reduced ? "visible" : "visible"}
      viewport={{ once: true, margin: "-40px" }}
      variants={defaultVariants}
      transition={{ duration: reduced ? 0 : 0.4 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
