import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({ eyebrow, title, subtitle, align = "center", className }: Props) => (
  <div
    className={cn(
      "mb-12 max-w-3xl",
      align === "center" ? "mx-auto text-center" : "text-left",
      className
    )}
  >
    {eyebrow && (
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
          {eyebrow}
        </span>
      </Reveal>
    )}
    <Reveal delay={80}>
      <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h2>
    </Reveal>
    {subtitle && (
      <Reveal delay={160}>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>
      </Reveal>
    )}
  </div>
);

export default SectionHeading;