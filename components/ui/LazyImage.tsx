"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface LazyImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  wrapperClassName?: string;
  showSkeleton?: boolean;
  aspectRatio?: string;
  onLoaded?: () => void;
}

/**
 * LazyImage Component
 *
 * Drop-in replacement for `next/image` that adds a progressive blur-up reveal:
 * - Native lazy loading (`loading="lazy"`) with `decoding="async"` unless `priority`
 * - Shimmering skeleton placeholder while the asset loads
 * - Blur-to-sharp + fade + subtle scale reveal once the image has loaded
 * - Zero layout shift: the wrapper owns the box, the image simply fills it
 *
 * The reveal transition lives on an inner layer so a caller-supplied
 * `className` (object-fit, hover scale, etc.) is never overridden.
 */
export function LazyImage({
  src,
  alt,
  className,
  wrapperClassName,
  showSkeleton = true,
  aspectRatio,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  onLoaded,
  ...rest
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden", aspectRatio, wrapperClassName)}
    >
      {/* Animated shimmer skeleton placeholder */}
      {showSkeleton && !isLoaded && !hasError && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-neutral-900/10 animate-pulse dark:bg-white/5"
        >
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
      )}

      {/* Progressive blur-up reveal layer (keeps caller className untouched) */}
      <div
        className={cn(
          "transition-[opacity,filter,transform] duration-700 ease-out",
          fill ? "absolute inset-0" : "relative w-full",
          !isLoaded
            ? "opacity-0 blur-md scale-[1.03]"
            : "opacity-100 blur-0 scale-100",
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          decoding="async"
          onLoad={() => {
            setIsLoaded(true);
            onLoaded?.();
          }}
          onError={() => {
            setHasError(true);
          }}
          className={className}
          {...rest}
        />
      </div>
    </div>
  );
}

export default LazyImage;
