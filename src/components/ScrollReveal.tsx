import React, { ReactNode } from "react";

interface ScrollRevealProps {
 children: ReactNode;
 /** Retained so existing call sites keep type-checking; no longer animates. */
 animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale" | "blur";
 delay?: number;
 className?: string;
 threshold?: number;
 once?: boolean;
}

/**
 * Layout wrapper. This used to run an IntersectionObserver that faded, slid,
 * scaled and blurred almost every block on the site into view. The entrance
 * animations were removed; the wrapper stays so call sites keep passing their
 * grid/spacing classes through unchanged.
 */
export default function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
 return <div className={className}>{children}</div>;
}
