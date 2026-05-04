import { cn } from "@/lib/utils";

interface OrbProps {
  className?: string;
  color?: "amber" | "blue";
  size?: number;
}

export const AnimatedOrb = ({ className, color = "amber", size = 480 }: OrbProps) => {
  const bg =
    color === "amber"
      ? "radial-gradient(circle, hsl(var(--primary) / 0.15), hsl(var(--primary) / 0) 70%)"
      : "radial-gradient(circle, hsl(var(--foreground) / 0.08), hsl(var(--foreground) / 0) 70%)";
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full blur-3xl animate-orb", className)}
      style={{ width: size, height: size, background: bg }}
    />
  );
};

export default AnimatedOrb;