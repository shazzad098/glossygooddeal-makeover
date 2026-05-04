import PageShell from "@/components/PageShell";
import Hero from "@/sections/Hero";
import Partners from "@/sections/Partners";
import About from "@/sections/About";
import ServicesSection from "@/sections/Services";
import Stats from "@/sections/Stats";
import WhyUs from "@/sections/WhyUs";
import CTA from "@/sections/CTA";

const Index = () => (
  <PageShell>
    <Hero />
    <Partners />
    <About />
    <ServicesSection />
    <Stats />
    <WhyUs />
    <CTA />
  </PageShell>
);

export default Index;
