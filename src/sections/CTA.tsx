import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedOrb from "@/components/AnimatedOrb";
import Reveal from "@/components/Reveal";

export const CTA = () => (
  <section className="relative px-6 py-16 md:py-20 overflow-hidden">
    <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 p-8 text-center md:p-12 shadow-2xl border border-white/10">
      <AnimatedOrb className="-top-24 left-1/2 -translate-x-1/2 opacity-50" size={420} />
      
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Let's build something that lasts</p>
      </Reveal>
      
      <Reveal delay={100}>
        <h2 className="mt-3 font-bold text-3xl leading-tight md:text-4xl lg:text-5xl text-white">
          Ready for a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">Good Deal?</span>
        </h2>
      </Reveal>
      
      <Reveal delay={180}>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300">
          Talk to our engineers about your next power, busbar, fire-safety or solar project — we'll get back within one business day.
        </p>
      </Reveal>
      
      <Reveal delay={260}>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="default" className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 px-6 py-5 rounded-full">
            <Link to="/contact" className="flex items-center gap-2">Start a Project <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <Button asChild size="default" variant="outline" className="border-primary/50 text-blue-400 hover:bg-primary/10 hover:border-primary px-6 py-5 rounded-full transition-all duration-300">
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTA;