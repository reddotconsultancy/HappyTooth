"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
 children: ReactNode;
 animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale" | "blur";
 delay?: number; // 0-8 for stagger delay
 className?: string;
 threshold?: number;
 once?: boolean;
}

export default function ScrollReveal({
 children,
 animation = "fade-up",
 delay,
 className = "",
 threshold = 0.15,
 once = true,
}: ScrollRevealProps) {
 const ref = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const el = ref.current;
  if (!el) return;

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
   el.classList.add("revealed");
   return;
  }

  const observer = new IntersectionObserver(
   ([entry]) => {
    if (entry.isIntersecting) {
     el.classList.add("revealed");
     if (once) observer.unobserve(el);
    } else if (!once) {
     el.classList.remove("revealed");
    }
   },
   {
    threshold,
    rootMargin: "0px 0px -40px 0px",
   }
  );

  observer.observe(el);

  return () => observer.disconnect();
 }, [threshold, once]);

 const animClass =
  animation === "fade-up" ? "reveal-fade-up" :
  animation === "fade-in" ? "reveal-fade-in" :
  animation === "fade-left" ? "reveal-fade-left" :
  animation === "fade-right" ? "reveal-fade-right" :
  animation === "scale" ? "reveal-scale" :
  animation === "blur" ? "reveal-blur" : "reveal-fade-up";

 const delayClass = delay !== undefined ? `reveal-delay-${delay}` : "";

 return (
  <div ref={ref} className={`${animClass} ${delayClass} ${className}`}>
   {children}
  </div>
 );
}
