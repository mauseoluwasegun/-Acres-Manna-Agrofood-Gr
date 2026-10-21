"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  rotate?: boolean;
  rotateAmount?: number;
  hoverScale?: boolean;
  hoverRotate?: boolean;
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
  rotate = false,
  rotateAmount = 3,
  hoverScale = false,
  hoverRotate = false,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const movement = speed * 100;

    let startY = 0;
    let startX = 0;
    switch (direction) {
      case "up":
        startY = movement;
        break;
      case "down":
        startY = -movement;
        break;
      case "left":
        startX = movement;
        break;
      case "right":
        startX = -movement;
        break;
    }

    // Scroll parallax
    gsap.fromTo(
      content,
      {
        y: startY,
        x: startX,
        rotation: rotate ? rotateAmount : 0,
      },
      {
        y: 0,
        x: 0,
        rotation: rotate ? -rotateAmount : 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Hover effects
    if (hoverScale || hoverRotate) {
      const hoverTween = gsap.to(content, {
        scale: hoverScale ? 1.05 : 1,
        rotation: hoverRotate ? 3 : (rotate ? -rotateAmount : 0),
        duration: 0.4,
        ease: "power2.out",
        paused: true,
      });

      container.addEventListener("mouseenter", () => hoverTween.play());
      container.addEventListener("mouseleave", () => hoverTween.reverse());
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed, direction, rotate, rotateAmount, hoverScale, hoverRotate]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  rotate?: boolean;
  rotateAmount?: number;
  hoverScale?: boolean;
  hoverRotate?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.3,
  rotate = false,
  rotateAmount = 2,
  hoverScale = false,
  hoverRotate = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    // Scroll parallax
    gsap.fromTo(
      image,
      {
        y: speed * 100,
        rotation: rotate ? rotateAmount : 0,
      },
      {
        y: -speed * 100,
        rotation: rotate ? -rotateAmount : 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Hover effects
    if (hoverScale || hoverRotate) {
      const hoverTween = gsap.to(image, {
        scale: hoverScale ? 1.08 : 1,
        rotation: hoverRotate ? 5 : (rotate ? -rotateAmount : 0),
        duration: 0.4,
        ease: "power2.out",
        paused: true,
      });

      container.addEventListener("mouseenter", () => hoverTween.play());
      container.addEventListener("mouseleave", () => hoverTween.reverse());
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed, rotate, rotateAmount, hoverScale, hoverRotate]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
