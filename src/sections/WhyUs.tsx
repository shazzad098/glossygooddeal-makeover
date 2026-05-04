import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import busbarImg from "@/assets/busbar.jpg";
import solarImg from "@/assets/solar-farm.jpg";

const rows = [
  {
    img: busbarImg,
    title: "Engineered for performance, designed for safety",
    body: "From component selection to commissioning, every project is engineered around international standards — IEC, NFPA and BNBC.",
    points: ["Premium-grade switchgear & busbar", "Type-tested assemblies", "Rigorous QA at every stage"],
  },
  {
    img: solarImg,
    title: "Sustainable power that pays for itself",
    body: "Our solar EPC and energy-efficient systems support Green Factory ambitions while reducing operational costs over the long term.",
    points: ["Grid-tied & hybrid solar plants", "Energy audits & optimization", "Lifecycle support & maintenance"],
  },
];

export const WhyUs = () => (
  <section className="relative py-24 md:py-32 bg-secondary/50">
    <div className="mx-auto max-w-7xl px-6">
      <SectionHeading
        eyebrow="Why Good Deal"
        title={<>The standard for <span className="text-primary italic">industrial trust.</span></>}
      />

      <div className="space-y-16 md:space-y-24">
        {rows.map((r, i) => (
          <div key={r.title} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
            <Reveal className="lg:[direction:ltr]">
              <div className="overflow-hidden rounded-3xl glass-strong p-2">
                <img src={r.img} alt={r.title} loading="lazy" width={1600} height={1024} className="h-[360px] w-full rounded-2xl object-cover md:h-[440px]" />
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:[direction:ltr]">
              <h3 className="font-display text-3xl font-semibold leading-tight md:text-4xl">{r.title}</h3>
              <p className="mt-4 text-base text-muted-foreground">{r.body}</p>
              <ul className="mt-6 space-y-3">
                {r.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;