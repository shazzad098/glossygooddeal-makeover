import { PropsWithChildren, HTMLAttributes, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const Reveal = ({ children, className, delay = 0, direction = "up", style, ...rest }: PropsWithChildren<RevealProps>) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    const xOffset = direction === "left" ? -30 : direction === "right" ? 30 : 0;
    const yOffset = direction === "up" ? 30 : direction === "down" ? -30 : 0;

    gsap.fromTo(
      container.current,
      {
        x: xOffset,
        y: yOffset,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay / 1000,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: container });

  return (
    <div
      ref={container}
      className={cn("will-change-transform", className)}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Reveal;