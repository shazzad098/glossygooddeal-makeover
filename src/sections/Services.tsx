import { ArrowUpRight, Zap, Flame, Sun, Building } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const services = [
  { 
    icon: Zap, 
    title: "Electrical & Power Distribution", 
    body: "Complete MV/LV power distribution solutions including switchgear, transformers, busbar trunking systems, and panel boards engineered to international IEC standards.", 
    id: "electrical-power" 
  },
  { 
    icon: Flame, 
    title: "Fire & Life Safety Solutions", 
    body: "Comprehensive fire detection, suppression, and life safety systems certified to NFPA and BS standards for complete building protection.", 
    id: "fire-safety" 
  },
  { 
    icon: Sun, 
    title: "Sustainable Solar Solutions", 
    body: "End-to-end solar EPC services from feasibility study to commissioning of grid-tied and off-grid solar power plants for sustainable energy.", 
    id: "solar-solutions" 
  },
  { 
    icon: Building, 
    title: "Civil & Industrial Construction", 
    body: "Professional construction services for industrial facilities, commercial buildings, and infrastructure projects with quality assurance.", 
    id: "civil-construction" 
  },
];

export const ServicesSection = () => (
  <section id="services" className="relative py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </div>
    
    <div className="mx-auto max-w-7xl px-6 relative z-10">
      <SectionHeading
        title={<>Turnkey engineering, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent italic">end-to-end.</span></>}
        subtitle="From single-component supply to fully integrated EPC delivery — we handle the entire value chain so your facility stays safe, efficient and future-ready."
        className="text-center"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 70}>
            <Link to={`/service/${s.id}`} className="group block h-full">
              <article className="relative h-full p-5 rounded-2xl bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/25">
                  <s.icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="mt-4 font-bold text-lg text-gray-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{s.body}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary group-hover:text-blue-600 transition-colors">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="pointer-events-none absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
      
      {/* View All Services Button */}
      <div className="text-center mt-12">
        <Link to="/services">
          <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-105">
            View All Services
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesSection;