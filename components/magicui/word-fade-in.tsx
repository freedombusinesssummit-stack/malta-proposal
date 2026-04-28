"use client";
import { useEffect, useRef, useState } from "react";

interface Props { text: string; className?: string; delay?: number; }

export function WordFadeIn({ text, className, delay = 80 }: Props) {
  const words = text.split(" ");
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        words.forEach((_, i) => {
          setTimeout(() => setCount(c => Math.max(c, i + 1)), i * delay);
        });
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [words.length, delay]);

  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: count > i ? 1 : 0,
            transform: count > i ? "none" : "translateY(8px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
            marginRight: "0.25em",
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}
