"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ScrollReveal3DProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  rotateX?: number;
  y?: number;
}

export function ScrollReveal3D({
  children,
  className,
  delay = 0,
  rotateX = 18,
  y = 80,
}: ScrollReveal3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { transformPerspective: 1200, transformOrigin: "center top" });

    const tween = gsap.fromTo(
      el,
      {
        opacity: 0,
        y,
        rotateX,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 1,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      tween.kill();
    };
  }, [delay, rotateX, y]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
