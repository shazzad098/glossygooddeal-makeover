import PartnerMarquee from "@/components/PartnerMarquee";
import Reveal from "@/components/Reveal";

export const Partners = () => (
  <section className="relative py-16">
    <div className="mx-auto max-w-8xl px-6">
      <Reveal>
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Authorized Partners & Direct Importers
        </p>
      </Reveal>
      <Reveal delay={120}>
        <PartnerMarquee />
      </Reveal>
    </div>
  </section>
);

export default Partners;