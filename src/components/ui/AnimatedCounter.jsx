"use client";
import React, { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function AnimatedCounter({ to = 100, duration = 1200, decimals = 0, prefix = "", suffix = "" }) {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.3 });
  const [value, setValue] = useState(0);
  const raf = useRef();

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const from = 0;
    const animate = (t) => {
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = from + (to - from) * eased;
      setValue(current);
      if (progress < 1) raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [inView, duration, to]);

  return (
    <span ref={ref}>
      {prefix}
      {Number(value).toFixed(decimals)}
      {suffix}
    </span>
  );
}
