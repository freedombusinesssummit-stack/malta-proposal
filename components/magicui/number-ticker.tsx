"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimalPlaces?: number;
}

export function NumberTicker({ value, suffix = "", prefix = "", duration = 2000, className, decimalPlaces = 0 }: Props) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          setDisplay(parseFloat((eased * value).toFixed(decimalPlaces)));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, duration, decimalPlaces]);

  return (
    <span ref={ref} className={className}>
      {prefix}{decimalPlaces > 0 ? display.toFixed(decimalPlaces) : Math.floor(display).toLocaleString()}{suffix}
    </span>
  );
}
