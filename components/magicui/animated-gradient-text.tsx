import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props { children: ReactNode; className?: string; }
export function AnimatedGradientText({ children, className }: Props) {
  return (
    <span
      className={cn("inline-flex animate-gradient bg-gradient-to-r from-[#9ef01a] via-[#4ade80] to-[#9ef01a] bg-[length:200%_auto] bg-clip-text text-transparent", className)}
      style={{ backgroundSize: "200% auto", animation: "gradient-shift 4s linear infinite" }}
    >
      {children}
    </span>
  );
}
