"use client";

import { useReducedMotion } from "framer-motion";
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
        "group isolate relative z-10 inline-flex shrink-0 items-center justify-center select-none",
        className,
      )}
    >
      <img
        src={
          variant === "dark"
            ? "/brand/acres-manna-logo-horizontal-white.svg"
            : "/brand/acres-manna-logo-horizontal.svg"
        }
        alt="Acres & Manna"
        className={cn(
          "h-10 sm:h-12 w-auto transition-opacity duration-300",
        )}
      />
    </button>
  );
}
