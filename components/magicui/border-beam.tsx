"use client";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
}
export function BorderBeam({
  className, size = 200, duration = 15,
  colorFrom = "#9ef01a", colorTo = "#4ade80", borderWidth = 2,
}: Props) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden", className)}
      style={{ "--border-beam-size": `${size}px`, "--border-beam-duration": `${duration}s`, "--border-beam-from": colorFrom, "--border-beam-to": colorTo, "--border-beam-width": `${borderWidth}px` } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          padding: `${borderWidth}px`,
          background: `linear-gradient(#fff, #fff) content-box, linear-gradient(${colorFrom}, ${colorTo}, ${colorFrom}) border-box`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          animation: `border-beam-rotate ${duration}s linear infinite`,
        }}
      />
    </div>
  );
}
