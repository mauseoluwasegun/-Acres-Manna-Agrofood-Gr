"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "light",
  className,
  onClick,
}: {
  variant?: "light" | "dark";
  className?: string;
  onClick?: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <button
      onClick={onClick}
      aria-label="Acres & Manna — Home"
      className={cn(
        "group relative inline-flex shrink-0 items-center justify-center select-none",
        className,
      )}
    >
      <motion.img
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring" as const, stiffness: 180, damping: 20, delay: reduce ? 0 : 0.1 }}
        src="/brand/acres-manna-logo-purple.svg"
        alt="Acres & Manna logo"
        className={cn(
          "h-11 sm:h-14 w-auto",
          variant === "light" && "brightness-0 invert",
        )}
      />
    </button>
  );
}
