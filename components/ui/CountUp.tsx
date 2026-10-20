"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type CountUpProps = {
  /** The target numeric value to count to */
  to: number;
  /** Optional suffix appended after the number (e.g. "+", "%", "t") */
  suffix?: string;
  /** Optional prefix prepended before the number (e.g. "$") */
  prefix?: string;
  /** Duration of the count-up animation in milliseconds */
  duration?: number;
  /** Number of decimal places */
  decimals?: number;
  className?: string;
};

/**
 * Animated counter that counts from 0 to `to` when it scrolls into view.
 * Uses requestAnimationFrame with an easeOutExpo curve for silky deceleration.
 */
export function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1800,
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo — premium deceleration feel
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(parseFloat((eased * to).toFixed(decimals)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isInView, to, duration, decimals]);

  const formatted =
    decimals > 0
      ? count.toFixed(decimals)
      : count.toLocaleString("en-US");

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
