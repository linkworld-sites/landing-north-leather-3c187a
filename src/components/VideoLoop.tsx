"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Seamless looping video: two stacked <video> copies crossfade into each
 * other just before the playing copy ends, so the loop never hard-cuts.
 */
export function VideoLoop({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const refA = useRef<HTMLVideoElement | null>(null);
  const refB = useRef<HTMLVideoElement | null>(null);
  const [activeIsA, setActiveIsA] = useState(true);
  const switching = useRef(false);

  useEffect(() => {
    const active = activeIsA ? refA.current : refB.current;
    const idle = activeIsA ? refB.current : refA.current;
    if (!active || !idle) return;

    const onTimeUpdate = () => {
      if (switching.current) return;
      const dur = active.duration;
      if (!dur || Number.isNaN(dur)) return;
      if (dur - active.currentTime <= 1) {
        switching.current = true;
        idle.currentTime = 0;
        idle.play().catch(() => undefined);
        setActiveIsA((v) => !v);
      }
    };

    active.addEventListener("timeupdate", onTimeUpdate);
    return () => active.removeEventListener("timeupdate", onTimeUpdate);
  }, [activeIsA]);

  useEffect(() => {
    const justFinished = activeIsA ? refB.current : refA.current;
    if (!justFinished) return;
    const t = setTimeout(() => {
      justFinished.pause();
      justFinished.currentTime = 0;
      switching.current = false;
    }, 900);
    return () => clearTimeout(t);
  }, [activeIsA]);

  return (
    <div className={`absolute inset-0 h-full w-full ${className}`}>
      <video
        ref={refA}
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover transition-opacity ease-out"
        style={{ opacity: activeIsA ? 1 : 0, transitionDuration: "900ms" }}
      />
      <video
        ref={refB}
        src={src}
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover transition-opacity ease-out"
        style={{ opacity: activeIsA ? 0 : 1, transitionDuration: "900ms" }}
      />
    </div>
  );
}
