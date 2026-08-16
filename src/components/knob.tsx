"use client";

import { useRef } from "react";

const MIN_DEG = -120;
const MAX_DEG = 120;

export function Knob({ label }: { label: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dialRef = useRef<HTMLDivElement>(null);
  const rotation = useRef(MIN_DEG);
  const dragging = useRef(false);
  const lastY = useRef(0);

  const applyRotation = (deg: number) => {
    rotation.current = Math.min(MAX_DEG, Math.max(MIN_DEG, deg));
    if (dialRef.current) {
      dialRef.current.style.transform = `rotate(${rotation.current}deg)`;
    }
  };

  const setIdlePaused = (paused: boolean) => {
    if (wrapperRef.current) {
      wrapperRef.current.style.animationPlayState = paused
        ? "paused"
        : "running";
    }
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    lastY.current = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
    setIdlePaused(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const delta = lastY.current - e.clientY;
    lastY.current = e.clientY;
    applyRotation(rotation.current + delta * 1.5);
  };

  const onPointerUp = () => {
    dragging.current = false;
    setIdlePaused(false);
  };

  const onPointerCancel = () => {
    dragging.current = false;
    setIdlePaused(false);
  };

  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <div
        ref={wrapperRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        className="relative h-14 w-14 touch-none animate-[knob-idle_4s_ease-in-out_infinite] rounded-full bg-surface shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] ring-1 ring-brass/40 active:cursor-grabbing"
        style={{ cursor: "grab" }}
      >
        <div
          ref={dialRef}
          className="absolute inset-0"
          style={{ transform: `rotate(${MIN_DEG}deg)` }}
        >
          <span className="absolute left-1/2 top-1 h-4 w-0.5 -translate-x-1/2 rounded-full bg-brass" />
        </div>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-widest text-cream-muted">
        {label}
      </span>
    </div>
  );
}
