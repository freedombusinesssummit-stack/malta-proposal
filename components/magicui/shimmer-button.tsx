"use client";
import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  href?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

export function ShimmerButton({
  children, className, shimmerColor = "rgba(255,255,255,0.4)",
  shimmerSize = "0.1em", borderRadius = "8px",
  shimmerDuration = "1.5s", background = "#9ef01a",
  href, onClick, style,
}: Props) {
  const El = href ? "a" : "button";
  return (
    <El
      href={href as string}
      onClick={onClick}
      className={cn("group relative flex items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]", className)}
      style={{ borderRadius, background, color: "#111827", ...style }}
    >
      {/* Shimmer sweep */}
      <span
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(120deg, transparent 30%, ${shimmerColor} 50%, transparent 70%)`,
          backgroundSize: "200% 100%",
          animation: `shimmer-sweep ${shimmerDuration} ease-in-out infinite`,
        }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </El>
  );
}
