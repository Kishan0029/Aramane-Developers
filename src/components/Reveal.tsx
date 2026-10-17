"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export const Reveal = ({
  children,
  delay = 0,
  y = 32,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const Eyebrow = ({
  children,
  dark = false,
  testId,
}: {
  children: React.ReactNode;
  dark?: boolean;
  testId?: string;
}) => (
  <p
    data-testid={testId}
    className={`text-xs uppercase tracking-[0.3em] font-sans font-medium ${
      dark ? "text-gold" : "text-golddark"
    }`}
  >
    {children}
  </p>
);
