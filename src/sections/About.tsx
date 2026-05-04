import { Award, Globe2, Leaf, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import engineersImg from "@/assets/engineers.jpg";

const pillars = [
  { 
    icon: Globe2, 
    title: "International Compliance", 
    body: "All projects strictly adhere to IEC, NFPA, and BNBC safety and quality benchmarks.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500"
  },
  { 
    icon: Award, 
    title: "Direct Import Advantage", 
    body: "We eliminate middlemen by importing core components directly with full warranties.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
    iconColor: "text-indigo-500"
  },
  { 
    icon: Leaf, 
    title: "Sustainable Focus", 
    body: "Supporting Green Factory initiatives through energy-efficient and solar EPC systems.",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500"
  },
  { 
    icon: Wrench, 
    title: "Technical Expertise", 
    body: "Multi-disciplinary engineers delivering design, supply, install and maintenance.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500"
  },
];

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Expert Engineers" },
  { value: "25+", label: "Global Partners" },
];

export const About = () => (
  <section id="about" className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-full blur-3xl" />
    </div>
    <div className="mx-auto max-w-7xl px-6 relative z-10">
      <SectionHeading
        title={
          <>
            Bridging Global Innovation{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">
              with Local Expertise
            </span>
          </>
        }
        subtitle="A premier multi-disciplinary engineering and supply-chain firm headquartered in Dhaka — sourcing premium components from ABB, Schneider Electric and Siemens, integrated with expert engineering for safety, efficiency and sustainability."
        className="text-center"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 100}>
            <div className="text-center p-5 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5" delay={0.2}>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-2xl">
              <img 
                src={engineersImg} 
                alt="Engineers in control room" 
                loading="lazy" 
                width={1600} 
                height={1024} 
                className="h-full w-full object-cover transform group-hover:scale-105 transition duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-white text-xs font-medium border border-white/20">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  ISO 9001:2021 Certified
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.3 + (i * 0.1)}>
              <div className="group relative h-full p-5 rounded-2xl bg-white dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${pillar.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className={`h-5 w-5 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {pillar.body}
                  </p>
                  <button className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-blue-600 transition-colors group/link">
                    Learn More
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;