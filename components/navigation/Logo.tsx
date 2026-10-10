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
      aria-label="AcresxManna — Home"
      className={cn(
        "group relative inline-flex items-center justify-center select-none",
        className,
      )}
    >
      <motion.img
        initial={reduce ? {} : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring" as const, stiffness: 180, damping: 20, delay: reduce ? 0 : 0.1 }}
        src={variant === "dark" ? "/logos/acresxmanna-horizontal.svg" : "/logos/acresxmanna-horizontal-dark.svg"}
        alt="AcresxManna Logo"
        className="h-10 sm:h-12 w-auto"
      />
    </button>
  );
}
