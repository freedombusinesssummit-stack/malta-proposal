"use client";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode[];
  delay?: number;
  className?: string;
}

export function AnimatedList({ children, delay = 80, className }: Props) {
  const [visible, setVisible] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const arr = Array.isArray(children) ? children : [children];
        arr.forEach((_, i) => {
          setTimeout(() => setVisible(v => Math.max(v, i + 1)), i * delay);
        });
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [children, delay]);

  const arr = Array.isArray(children) ? children : [children];
  return (
    <div ref={ref} className={className}>
      {arr.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: visible > i ? 1 : 0,
            transform: visible > i ? "none" : "translateY(16px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
