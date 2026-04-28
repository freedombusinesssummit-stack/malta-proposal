"use client";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
const Progress = ({ className, value, ...props }: React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>) => (
  <ProgressPrimitive.Root className={cn("relative h-2 w-full overflow-hidden rounded-full bg-secondary", className)} {...props}>
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 transition-all duration-700 ease-out"
      style={{ transform: `translateX(-${100 - (value || 0)}%)`, background: "linear-gradient(90deg, #9ef01a, #70e000)" }}
    />
  </ProgressPrimitive.Root>
);
export { Progress };
