"use client";

import { useRef, type ReactNode } from "react";
import { BRASS_RGB } from "@/lib/theme";

export function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const glowRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    glowRef.current?.style.setProperty("--x", `${e.clientX - rect.left}px`);
    glowRef.current?.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div onMouseMove={onMouseMove} className={`group relative ${className}`}>
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(240px circle at var(--x, 50%) var(--y, 50%), rgba(${BRASS_RGB.join(",")},0.15), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
