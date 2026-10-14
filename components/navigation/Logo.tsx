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
        src="/brand/acres-manna-logo-purple.svg"
        alt="AcresxManna logo"
        className={cn(
          "h-11 sm:h-14 w-auto transition-opacity duration-500",
          !reduce && "animate-[fadeIn_0.5s_ease-out_0.1s_both]",
          variant === "light" && "",
        )}
      />
    </button>
  );
}
