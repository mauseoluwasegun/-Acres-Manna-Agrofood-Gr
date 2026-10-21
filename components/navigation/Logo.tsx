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
        loading="lazy"
        className={cn(
          "h-7 sm:h-8 lg:h-9 w-auto max-w-[120px] sm:max-w-[140px] lg:max-w-[155px] object-contain transition-all duration-300",
        )}
      />
    </button>
  );
}
