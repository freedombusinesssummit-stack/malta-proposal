"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  speed?: number;
}

export function Marquee({ children, reverse = false, pauseOnHover = true, className, speed = 40 }: Props) {
  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      {[0, 1].map(i => (
        <div
          key={i}
          className={cn("flex min-w-full shrink-0 gap-4 py-1", pauseOnHover && "group-hover:[animation-play-state:paused]")}
          style={{
            animation: `marquee-scroll ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
          }}
          aria-hidden={i === 1}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
