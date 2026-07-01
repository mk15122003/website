"use client";

import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role='button'], input, textarea, select"
      );
      ring.style.width = interactive ? "52px" : "28px";
      ring.style.height = interactive ? "52px" : "28px";
      ring.style.background = interactive
        ? "rgba(0,184,255,0.12)"
        : "transparent";
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      const half = ring.offsetWidth / 2;
      ring.style.transform = `translate3d(${ringX - half}px, ${ringY - half}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="cursor-glow" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
