import StatCounter from "@/components/StatCounter";
import Reveal from "@/components/Reveal";

export const Stats = () => (
  <section className="relative py-16">
    <div className="mx-auto max-w-7xl px-6">
      <Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCounter value={15} suffix="+" label="Years of Engineering" />
          <StatCounter value={250} suffix="+" label="Projects Delivered" />
          <StatCounter value={5} label="Global Partners" />
          <StatCounter value={100} suffix="%" label="Genuine Components" />
        </div>
      </Reveal>
    </div>
  </section>
);

export default Stats;